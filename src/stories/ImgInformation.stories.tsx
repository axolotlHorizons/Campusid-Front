import React from 'react';
import ImgInformation from 'common/components/ImgInformation';

import { Grid } from '@material-ui/core';

export default {
    title: 'ImgInformation',
    component: ImgInformation,
};

export const ImgInformations = () => {
    const TabEtudiant = [
        {
            id: 1,
            name: 'Jean',
            lastName: 'Yves',
            img: 'https://thispersondoesnotexist.com/image',
        },
        {
            id: 1,
            name: 'Marc',
            lastName: 'Henry',
            img: 'https://thispersondoesnotexist.com/image',
        },
        {
            id: 1,
            name: 'Paul',
            lastName: 'Jacques',
            img: 'https://thispersondoesnotexist.com/image',
        },
        {
            id: 1,
            name: 'Pierre',
            lastName: 'Paul',
            img: 'https://thispersondoesnotexist.com/image',
        },
        {
            id: 1,
            name: 'Prince',
            lastName: 'Mickael',
            img: 'https://thispersondoesnotexist.com/image',
        },
        {
            id: 1,
            name: 'Remy',
            lastName: 'Lannyere',
            img: 'https://thispersondoesnotexist.com/image',
        },
        {
            id: 1,
            name: 'Jerry',
            lastName: 'Dou',
            img: 'https://thispersondoesnotexist.com/image',
        },
        {
            id: 1,
            name: 'Phillipe',
            lastName: 'Row',
            img: 'https://thispersondoesnotexist.com/image',
        },
        {
            id: 1,
            name: 'Black',
            lastName: 'Berry',
            img: 'https://thispersondoesnotexist.com/image',
        },
        {
            id: 1,
            name: 'Sam',
            lastName: 'Sung',
            img: 'https://thispersondoesnotexist.com/image',
        },
    ];

    return (
        <div>
            <Grid container spacing={2}>
                {TabEtudiant.map(eleve => {
                    return <ImgInformation eleve={eleve}></ImgInformation>;
                })}
            </Grid>
        </div>
    );
};
