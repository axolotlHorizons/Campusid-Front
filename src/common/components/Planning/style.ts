import { createUseStyles } from 'react-jss';

export default createUseStyles({
    demoApp: {
        fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
        fontSize: '14px',
        paddingBottom: '5%',
        width: 'auto',

        '& .MuiButtonBase-root': {
            backgroundColor: '#B70000',
            color: '',
            borderRadius: '8px',
            margin: '3px',
            width: 'auto',
            textAlign: 'center',
            textTransform: 'uppercase',
            alignSelf: 'center',
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
        '& th': {
            backgroundColor: '#B70000',
            color: 'white',
            padding: '1%',
            textTransform: 'uppercase',
        },
        '& tr': {
            height: '2rem',
            fontWeight: 'bold',
        },
        '& .fc-title': {
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
