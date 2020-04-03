import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import styles from './style';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';

type Props = {
    title?: string;
    start?: Date;
    allDay?: String;
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
            title: 'Event Now',
            start: new Date(),
            allDay: '',
        },
    ]);

    const toggleWeekends = () => {
        setCalendarWeekends(!calendarWeekends);
    };

    const handleDateClick = (arg: any) => {
        alert('here');
        let newEvent = {
            // creates a new array
            title: 'New Event',
            start: arg.date,
            allDay: arg.allDay,
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
