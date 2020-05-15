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
import ButtonCustom from '../ButtonCustom';
import { text } from '@storybook/addon-knobs';

type EventCourse = {
    idCourse: number;
    idTypeCourse: number;
    idMatter: number;
    idTeacher: number;
    teacherName: string;
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
        teacherName: 'Billy',
        idClass: 1,
        dateStart: '2020-04-30 09:00:00',
        dateEnd: '2020-04-30 11:00:00',
        presentTeacher: true,
        comments: 'No comment',
        idClassNavigation: 1,
        idMatterNavigation: 1,
        idTeacherNavigation: 1,
        idTypeCourseNavigation: 1,
        title: 'Java',
        backgroundColor: '#ABEBC6',
    },
    {
        idCourse: 2,
        idTypeCourse: 2,
        idMatter: 2,
        idTeacher: 2,
        teacherName: 'Jérémy',
        idClass: 2,
        dateStart: '2020-04-30 11:00:00',
        dateEnd: '2020-04-30 13:00:00',
        presentTeacher: true,
        comments: 'No comment',
        idClassNavigation: 2,
        idMatterNavigation: 2,
        idTeacherNavigation: 2,
        idTypeCourseNavigation: 2,
        title: 'C#',
        backgroundColor: '#85C1E9',
    },
    {
        idCourse: 1,
        idTypeCourse: 1,
        idMatter: 1,
        idTeacher: 1,
        teacherName: 'Billy',
        idClass: 1,
        dateStart: '2020-05-14 14:00:00',
        dateEnd: '2020-05-14 16:00:00',
        presentTeacher: true,
        comments: 'No comment',
        idClassNavigation: 1,
        idMatterNavigation: 1,
        idTeacherNavigation: 1,
        idTypeCourseNavigation: 1,
        title: 'Java',
        backgroundColor: '#85C1E9',
    },
    {
        idCourse: 2,
        idTypeCourse: 2,
        idMatter: 2,
        idTeacher: 2,
        teacherName: 'Jérémy',
        idClass: 2,
        dateStart: '2020-05-15 09:00:00',
        dateEnd: '2020-05-15 13:00:00',
        presentTeacher: true,
        comments: 'No comment',
        idClassNavigation: 2,
        idMatterNavigation: 2,
        idTeacherNavigation: 2,
        idTypeCourseNavigation: 2,
        title: 'C#',
        backgroundColor: '#ABEBC6',
    },
    {
        idCourse: 1,
        idTypeCourse: 1,
        idMatter: 1,
        idTeacher: 1,
        teacherName: 'Sebastien',
        idClass: 1,
        dateStart: '2020-05-14 10:00:00',
        dateEnd: '2020-05-14 13:00:00',
        presentTeacher: true,
        comments: 'No comment',
        idClassNavigation: 1,
        idMatterNavigation: 1,
        idTeacherNavigation: 1,
        idTypeCourseNavigation: 1,
        title: 'Deep Learning',
        backgroundColor: '#F9E79F  ',
    },
    {
        idCourse: 2,
        idTypeCourse: 2,
        idMatter: 2,
        idTeacher: 2,
        teacherName: ' _ ',
        idClass: 2,
        dateStart: '2020-05-15 14:00:00',
        dateEnd: '2020-05-15 18:00:00',
        presentTeacher: true,
        comments: 'No comment',
        idClassNavigation: 2,
        idMatterNavigation: 2,
        idTeacherNavigation: 2,
        idTypeCourseNavigation: 2,
        title: 'ID City',
        backgroundColor: '#FCF3CF ',
    },
];

const transformEvents = fakesEvents.map(event => ({
    start: moment(event.dateStart).toDate(),
    end: moment(event.dateEnd).toDate(),
    title: event.title,
    description: event.teacherName,
    backgroundColor: event.backgroundColor,
}));

export default function Planning() {
    const classes = styles();
    const calendarComponentRef = React.createRef<FullCalendar>();
    const [calendarWeekends, setCalendarWeekends] = useState(false);
    const [calendarEvents, setcalendarEvents] = useState(transformEvents);

    const toggleWeekends = () => {
        setCalendarWeekends(!calendarWeekends);
    };

    const eventRender = ({ event, el, view }: any) => {
        const description = event.extendedProps.description;
        var div = document.createElement('div');
        var text = document.createTextNode('Enseignant : ' + description);
        div.appendChild(text);
        el.appendChild(div);
    };

    return (
        <div className={classes.demoApp}>
            <div className={classes.demoAppTop}>
                <ButtonCustom
                    className={classes.demoAppTop}
                    callBack={toggleWeekends}
                    valueButton="Weekend"
                />
            </div>
            <div className={classes.demoAppCalendar}>
                <FullCalendar
                    defaultView="dayGridMonth"
                    header={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                    }}
                    buttonText={{
                        today: "aujoud'hui",
                        month: 'mois',
                        week: 'semaine',
                        day: 'jour',
                        list: 'liste',
                    }}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    ref={calendarComponentRef}
                    weekends={calendarWeekends}
                    events={calendarEvents}
                    // dateClick={handleDateClick}
                    locale={'fr'}
                    minTime="09:00:00"
                    maxTime="18:00:00"
                    eventRender={eventRender}
                    fixedWeekCount={false}
                    firstDay={1}
                    allDaySlot={false}
                    height={700}
                    footer={true}
                />
            </div>
        </div>
    );
}
