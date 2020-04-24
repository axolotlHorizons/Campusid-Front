import React from 'react';
import styles from './style';
import ImgInformation from '../../common/components/ImgInformation';
import { Grid } from '@material-ui/core';



const Trombinoscope = () => {
    const classes = styles();

    const TabEtudiant = [
        {id: 1, name: "Thierry", lastName: "Dupont", img: "https://" },{id: 1, name: "Thierry", lastName: "Dupont", img: "https://" },{id: 1, name: "Thierry", lastName: "Dupont", img: "https://" },{id: 1, name: "Thierry", lastName: "Dupont", img: "https://" },{id: 1, name: "Thierry", lastName: "Dupont", img: "https://" },{id: 1, name: "Thierry", lastName: "Dupont", img: "https://" },{id: 1, name: "Thierry", lastName: "Dupont", img: "https://" },{id: 1, name: "Thierry", lastName: "Dupont", img: "https://" },{id: 1, name: "Thierry", lastName: "Dupont", img: "https://" }]


    return (
        <div>
            <Grid container spacing={6}>
                {TabEtudiant.map(value =>
                    <Grid container item xs={4} spacing={2}>
                        <ImgInformation eleve={value}></ImgInformation>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

export default Trombinoscope;
