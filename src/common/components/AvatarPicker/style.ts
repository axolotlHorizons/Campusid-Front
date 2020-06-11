import { createUseStyles } from 'react-jss';

export default createUseStyles({
    icon: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: '#fff',
    },
    container: {
        position: 'relative',
        padding: 10,
        display: ' inline-flex',
    },
    avatarPreviewContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatarContainer: {
        position: 'relative',
    },
});
