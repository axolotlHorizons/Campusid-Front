import React from 'react';
import ImageCard from '../common/component/Card/ImageCard/index';
// import SimpleCard from '../common/component/Card/simpleCard';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
// import { Toggle } from 'material-ui';

export default {
    title: 'Card',
    decorators: [withKnobs],
};

export const imageCard = () => {
    return (
        <ImageCard
            image={text(
                'Image Url',
                'https://2.bp.blogspot.com/-ZWVaEVfnhrU/WscAG0733-I/AAAAAAAArBY/6qDxl6S4tSUGsN-g4LhG3GaXnt591kiDQCLcBGAs/s1600/scoobyNatural-warner-estreia_banner.jpg'
            )}
            title={text('Title', 'Scoobydoobidoooo')}
            text={text('Text', 'You can put some text if you need')}
            hasButton={boolean('With button ?', true)}
            buttonText={text('Button text', 'Click here')}
        />
    );
};

// export const simpleCard = () => {
//     const styles = ['darkTheme', 'mediumTheme', 'lightTheme'];

//     return (
//         <SimpleCard
//             title={text('Title', 'CampusID')}
//             style={select('style', styles)}
//             text={text(
//                 'Text',
//                 'Oui alors écoute moi, premièrement, il faut se recréer... pour recréer... a better you et cette officialité peut vraiment retarder ce qui devrait devenir... Et là, vraiment, j essaie de tout coeur de donner la plus belle réponse de la terre ! '
//             )}
//         />
//     );
// };
