import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        // MuiPaper- root MuiCard - root MuiPaper - elevation1 MuiPaper - rounded
        //MuiGrid- root MuiGrid - container

        containerInternship: {
            margin: '20%',
            padding: '20%',
        },

        //  hrStyle: {
        //     height: '0.5px',
        //     width: '80% !important',
        // },

        // containerText: {
        //     padding: '20px',
        //     textAlign: 'center',
        // },
    })
);
