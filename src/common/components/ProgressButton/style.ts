import { createUseStyles } from 'react-jss';

export default createUseStyles({
    wrapper: {
        position: 'relative',
        display: 'inline-flex',
    },
    fullWidth: {
        width: '100%',
    },

    button: {
        width: '100%',
    },
    buttonSuccess: {
        cursor: 'default',
        backgroundColor: '#22bb33',
        '&:hover': {
            backgroundColor: '#22bb33',
        },
    },
    '@keyframes buttonProgressCircularRotate': {
        '100%': {
            transform: 'rotate(360deg) translate(-50%, -50%)',
        },
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        animationName: '$buttonProgressCircularRotate',
    },
    successBtnLabel: {
        /* on success, we just use hide the text with opacity so the button keeps its size */
        opacity: 0,
    },
    successIcon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -14,
        marginLeft: -14,
        color: 'white',
        fontSize: 28,
        pointerEvents: 'none', // this is important to be able to still click the button through this icon
    },
});
