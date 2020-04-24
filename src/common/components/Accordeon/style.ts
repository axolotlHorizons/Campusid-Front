import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            marginTop: '10px'
        },
        heading: {
           // fontSize: theme.typography.pxToRem(15),
           // fontWeight: theme.typography.fontWeightRegular,
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        backgroundValid: {
            backgroundColor: 'rgba(1, 152, 117, 1)',
            color: "white"
        },
        backgroundInvalid: {
            backgroundColor: 'orange',
            color: "white"
        }
    })
);

export default useStyles;
