import { createUseStyles } from 'react-jss';

export default createUseStyles({
    container: {
        height: '100%',
        backgroundColor: 'Firebrick',
        color: 'white',
        position: 'fixed',
    },
    link: {
        display: 'flex',
        maxWidth: 240,
        textDecoration: 'none',
        color: '#FFF',
    },
    label: {
        display: 'block',
        marginLeft: 12,
    },
});
