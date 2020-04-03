import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import styles from './style';
import moment from 'moment';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';

type Props = {
    title?: string;
    start?: Date;
    end?: Date;
    allDay?: String;
    rendering?: String;
    backgroundColor?: String;
};

interface DemoAppState {
    calendarWeekends: boolean;
    calendarEvents: EventInput[];
}

export default function Planning(props: Props) {
    const classes = styles();

    const calendarComponentRef = React.createRef<FullCalendar>();

    const [calendarWeekends, setCalendarWeekends] = useState(true);
    const [calendarEvents, setcalendarEvents] = useState([
        {
            title: 'JAVA',
            start: moment().toDate(),
            end: moment()
                .add(3, 'hours')
                .toDate(),
            allDay: '',
            // rendering: 'background',
            backgroundColor: 'red',
        },
    ]);

    const toggleWeekends = () => {
        setCalendarWeekends(!calendarWeekends);
    };

    const handleDateClick = (arg: any) => {
        alert('here');
        let newEvent = {
            // creates a new array
            title: 'DEEP LEARNING',
            start: moment().toDate(),
            end: moment()
                .add(6, 'hours')
                .toDate(),
            allDay: arg.allDay,
            backgroundColor: 'green',
        };

        setcalendarEvents([...calendarEvents, newEvent]);
    };

    return (
        <div className={classes.demoApp}>
            <div className={classes.demoAppTop}>
                <button onClick={toggleWeekends}>toggle weekends</button>
                &nbsp; &nbsp; (also, click a date/time to add an event)
            </div>
            <div className={classes.demoAppCalendar}>
                <FullCalendar
                    defaultView="dayGridMonth"
                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                    }}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    ref={calendarComponentRef}
                    weekends={calendarWeekends}
                    events={calendarEvents}
                    dateClick={handleDateClick}
                />
            </div>
        </div>
    );
}
