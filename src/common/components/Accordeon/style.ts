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
            backgroundColor: 'rgba(30, 130, 76, 1)',
            color: "white"
        },
        backgroundInvalid: {
            backgroundColor: 'rgba(214, 69, 65, 1)',
            color: "white"
        }
    })
);

export default useStyles;
