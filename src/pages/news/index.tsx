import React from 'react';
import styles from './style';
import TabCustom from 'common/components/TabCustom';
//import Card from 'common/components/Card/ImageCard';
import ContainerInternship from 'common/components/ContainerInternship';
import ContainerEvent from 'common/components/ContainerEvent';

const News = () => {
    const classes = styles();

    const getComponentInternship = () => {
        let data = [
            {
                image:
                    'https://cdn.1min30.com/wp-content/uploads/2018/06/logo-Capgemini-1.jpg ',
                title: ' Stage Développeur',
                text:
                    'Le stage consiste à concevoir et développer application interactive web back-office et tablette destinée aux équipes de recrutements des candidats Capgemini DEMS System & Digital Engineering',
                hasButton: true,
                buttonText: 'détails',
                altImage: 'offre de stage',
            },
            {
                image:
                    'https://media.glassdoor.com/sqll/6940/amadeus-it-group-squarelogo-1391506657604.png',
                title: ' Internship',
                text:
                    'As an intern, you will contribute to: support the various teams involved in the full software development life cycle of the Amadeus e - Retail application front - end, by using SCRUM agile methodology',
                hasButton: true,
                buttonText: 'détails',
                altImage: 'offre de stage',
            },
        ];
        return <ContainerInternship internship={data} />;
    };
    const getComponentEvent = () => {
        return <ContainerEvent />;
    };

    let tabArray = [
        { name: 'Offre de stage', component: getComponentInternship },
        { name: 'Evénements', component: getComponentEvent },
    ];

    return <TabCustom onglets={tabArray}></TabCustom>;
};

export default News;
