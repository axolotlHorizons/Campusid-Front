import React from 'react';
import ImageCard from 'common/components/Card/ImageCard/index';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { createUseStyles } from 'react-jss';

export default {
    title: 'Card',
    decorators: [withKnobs],
};

const styles = createUseStyles({
    container: {
        maxWidth: '50%',
    },
});

export const imageCard = () => {
    const classes = styles();

    return (
        <div className={classes.container}>
            <ImageCard
                image={text(
                    'Image Url',
                    'https://2.bp.blogspot.com/-ZWVaEVfnhrU/WscAG0733-I/AAAAAAAArBY/6qDxl6S4tSUGsN-g4LhG3GaXnt591kiDQCLcBGAs/s1600/scoobyNatural-warner-estreia_banner.jpg'
                )}
                title={text('Title', 'Scoobydoobidoooo')}
                text={text(
                    'Text',
                    'Je me souviens en fait, après il faut s intégrer tout ça dans les environnements et c est un très, très gros travail et cette officialité peut vraiment retarder ce qui devrait devenir... Ça respire le meuble de Provence, hein ?'
                )}
                hasButton={boolean('With button ?', true)}
                buttonText={text('Button text', 'Click here')}
                altImage={text('Alt image ', 'Scoobidooooo')}
                textCompany={text('company text', '')}
                typeDeMission={text('company text', '')}
                duree={text('duree text', '')}
                start={text('date start text', '')}
                end={text('date end text', '')}
                contact={text('contact text', '')}
                phone={text('phone text', '')}
                mail={text('mail text', '')}
                adress={text('adress text', '')}
                postal={text('postal text', '')}
                ville={text('ville text', '')}
                pays={text('pays text', '')}
            />
        </div>
    );
};
