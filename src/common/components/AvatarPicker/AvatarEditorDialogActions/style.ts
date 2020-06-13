import { createUseStyles } from 'react-jss';

export default createUseStyles({
    actions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    slider: {
        marginLeft: 18,
    },

    noWidth: {
        width: 0,
    },

    button: {
        flex: '0 0 auto',
    },
    rotateIcon: {
        flex: '0 0 auto',
        marginLeft: 12,
    },
    deleteIcon: {
        flex: '0 0 auto',
        marginLeft: 8,
    },
});
