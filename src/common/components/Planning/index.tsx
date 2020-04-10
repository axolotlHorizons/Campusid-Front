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

type EventCourse = {
    idCourse: number;
    idTypeCourse: number;
    idMatter: number;
    idTeacher: number;
    idClass: number;
    dateStart: string;
    dateEnd: string;
    presentTeacher: boolean;
    comments: string;
    idClassNavigation: number;
    idMatterNavigation: number;
    idTeacherNavigation: number;
    idTypeCourseNavigation: number;
    title: string; // todo aggregated datas ...
    backgroundColor: string;
};

type Props = {
    // title?: string;
    // start?: Date;
    // end?: Date;
    // allDay?: String;
    // rendering?: String;
    // backgroundColor?: String;
    events: EventCourse;
};

interface DemoAppState {
    calendarWeekends: boolean;
    calendarEvents: EventInput[];
}

const fakesEvents: EventCourse[] = [
    {
        idCourse: 1,
        idTypeCourse: 1,
        idMatter: 1,
        idTeacher: 1,
        idClass: 1,
        dateStart: '2020-04-10 09:00:00',
        dateEnd: '2020-04-10 11:00:00',
        presentTeacher: true,
        comments: 'No comment',
        idClassNavigation: 1,
        idMatterNavigation: 1,
        idTeacherNavigation: 1,
        idTypeCourseNavigation: 1,
        title: 'Java',
        backgroundColor: 'red',
    },
    {
        idCourse: 2,
        idTypeCourse: 2,
        idMatter: 2,
        idTeacher: 2,
        idClass: 2,
        dateStart: '2020-04-10 11:00:00',
        dateEnd: '2020-04-10 13:00:00',
        presentTeacher: true,
        comments: 'No comment',
        idClassNavigation: 2,
        idMatterNavigation: 2,
        idTeacherNavigation: 2,
        idTypeCourseNavigation: 2,
        title: 'C#',
        backgroundColor: 'purple',
    },
];

const transformEvents = fakesEvents.map(event => ({
    start: moment(event.dateStart).toDate(),
    end: moment(event.dateEnd).toDate(),
    title: event.title,
    backgroundColor: event.backgroundColor,
}));

export default function Planning() {
    console.log(transformEvents);
    const classes = styles();

    const calendarComponentRef = React.createRef<FullCalendar>();

    const [calendarWeekends, setCalendarWeekends] = useState(true);
    const [calendarEvents, setcalendarEvents] = useState(transformEvents);

    console.log(calendarEvents);
    const toggleWeekends = () => {
        setCalendarWeekends(!calendarWeekends);
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
                    // dateClick={handleDateClick}
                    locale={'fr'}
                    minTime="08:00:00"
                    maxTime="19:00:00"
                    height="auto"
                />
            </div>
        </div>
    );
}
