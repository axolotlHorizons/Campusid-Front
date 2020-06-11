import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
    createStyles({
        content: {
            padding: theme.spacing(2),
            marginLeft: '50px',
            textAlign: 'justify',
            usermodify: 'read-write-plaintext-only',

            '& .MuiGrid-root': {
                webkitusermodify: 'read-write-plaintext-only',
            },
        },
        img: {
            margin: '10%',
            margingtop: '200px',
            display: 'block',
            maxWidth: '80%',
            maxHeight: '200px',
        },

        buttonContainer: {
            alignSelf: 'flex-end',
        },
        span: {
            textAlign: 'justify',
            color: 'red',
        },
    })
);
