import { createUseStyles } from 'react-jss';
import { transparent } from 'material-ui/styles/colors';

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
        '& .MuiIconButton-colorSecondary:hover' : {
            backgroundColor: "#B70000"
        },
        '& .MuiCheckbox-colorSecondary.Mui-checked:hover' : {
            backgroundColor: "#B70000"
        },
        '& .MuiCheckbox-colorSecondary.Mui-checked' : {
         color: "white"
        }
    },
    logoCampus: {
        width: "240px",
        height: "189px",
        backgroundSize: "contain",
        margin: "auto"
    },
});
