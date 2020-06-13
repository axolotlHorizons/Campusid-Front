import { createUseStyles } from 'react-jss';

export default createUseStyles({
    demoApp: {
        fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
        fontSize: '14px',
        width: 'auto',
        '& .MuiButtonBase-root': {
            backgroundColor: '#B70000',
            borderRadius: '2px',
            margin: '3px',
            width: 'auto',
            textAlign: 'center',
            textTransform: 'uppercase',
            alignSelf: 'center',
            marginTop: '3%',

            '&:hover': {
                backgroundColor: '#918D8C ',
            },
        },
        '& .MuiButton-text': {
            color: '#FFF',
        },
        '& td.fc-day.fc-widget-content.fc-fri.fc-today': {
            backgroundColor: '#F1948A ',
        },
    },
    demoAppTop: {
        margin: '0 0 3em',
    },

    demoAppCalendar: {
        margin: '0 auto',
        maxWidth: '900px',

        display: 'flex',
        color: 'black',
        '& .fc-divider': { display: 'none' },
        '& td.fc-today': {
            backgroundColor: '#f2f2f2',
        },
        '& .fc-event': {
            border: '1px solid rgb(0,0,0,0.2)',
        },
        '& .fc-time-grid-event': {
            color: 'black',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        },
        '& th': {
            backgroundColor: '#B70000',
            color: 'white',
            padding: '1%',
            textTransform: 'uppercase',
        },
        '& tr': {
            height: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        '& .fc-title': {
            color: 'white',
            backgroundColor: 'black',
            borderRadius: '3px',
            margin: '3px',
            width: 'auto',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            alignSelf: 'center',
        },
    },
});
