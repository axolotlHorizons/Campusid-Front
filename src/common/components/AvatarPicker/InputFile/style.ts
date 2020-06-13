import { createUseStyles } from 'react-jss';

export default createUseStyles({
    hiddenInputFile: {
        overflow: 'hidden',
        height: 0,
        width: 0,
        position: 'absolute',
    },
    label: {
        display: 'flex',
        justifyContent: 'center',
    },
});
