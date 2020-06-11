import { createUseStyles } from 'react-jss';

export default createUseStyles({
    containerLogin: {
        width: '100%',

        '& .MuiPaper-root': {
            width: '60%',
            height: '80%',
            borderRadius: '0px',
        },

        '& .MuiButtonBase-root': {
            backgroundColor: '#B70000',
            color: 'white',
            borderRadius: '0px',
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
    logoCampus: {
        width: "240px",
        height: "189px",
        backgroundSize: "contain",
        margin: "auto"
    },
});
