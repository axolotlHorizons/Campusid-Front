import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ImageCard from '../Card/ImageCard/index';

export default makeStyles((theme: Theme) =>
    createStyles({
        // MuiPaper- root MuiCard - root MuiPaper - elevation1 MuiPaper - rounded
        //MuiGrid- root MuiGrid - container

        cardInternship: {
            // height: '800px',
            // '& .MuiGrid-root.MuiGrid-container': {
            //     width: '40px',
            //     // width: '100 %',
            //     // display: 'flex',
            //     // flex: 'wrap',
            //     // box: 'border-box',
            //     // marginbottom: '5px',
            //     // -webkit-user-modify: 'read-write-plaintext-only,
            //     textalign: 'justify',
            // },

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

// MuiGrid- root MuiGrid - container

//  hrStyle: {
//     height: '0.5px',
//     width: '80% !important',
// },

// containerText: {
//     padding: '20px',
//     textAlign: 'center',
// },
