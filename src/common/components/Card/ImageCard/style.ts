import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export default makeStyles((theme: Theme) =>
    createStyles({
        Card: { margin: '20px' },
        content: {
            padding: theme.spacing(2),
            marginLeft: '50px',
            textAlign: 'justify',
        },
        img: {
            margin: '0',
            display: 'block',
            maxWidth: '80%',
            maxHeight: '300px',
        },

        buttonContainer: {
            alignSelf: 'flex-end',
        },
    })
);
