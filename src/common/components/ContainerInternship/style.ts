import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ImageCard from '../Card/ImageCard/index';

export default makeStyles((theme: Theme) =>
    createStyles({
        cardInternship: {
            img: {
                margin: 'auto',
                display: 'block',
                maxWidth: '10%',
                maxHeight: '10%',
            },

            buttonContainer: {
                alignSelf: 'flex-end',
            },
        },
    })
);
