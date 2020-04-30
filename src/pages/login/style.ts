import { createUseStyles } from 'react-jss';

export default createUseStyles({
    containerLogin: {
        width: '100%',

        '& .MuiPaper-root': {
            width: '60%',
            height: '80%',
            borderRadius: '8px',
        },

        '& .MuiButtonBase-root': {
            backgroundColor: '#B70000',
            color: 'white',
            borderRadius: '8px',
            margin: '8px',
            width: 'auto',
            textAlign: 'center',
            textTransform: 'uppercase',
            alignSelf: 'center',
        },
        '& .MuiFormControl-root': {
            width: '80%',
        },
    },
});
