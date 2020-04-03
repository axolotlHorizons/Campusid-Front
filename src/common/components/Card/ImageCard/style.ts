import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        content: {
            padding: theme.spacing(2),
            margin: '0',
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },

        buttonContainer: {
            alignSelf: 'flex-end',
        },
    })
);
