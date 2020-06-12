import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import HelpIcon from '@material-ui/icons/Help';
import BookIcon from '@material-ui/icons/Book';
import RowingIcon from '@material-ui/icons/Rowing';
import { CardMedia, Typography } from '@material-ui/core';

import styles from './style';

const Footer = () => {
    const classes = styles();

    return (
        <div className={classes.container}>

            <CardMedia
                className={classes.logoCampus}
                image={require('../header/CampusIdLogoPhone.png')}
                title="Campus ID"
            />

            <Typography style={{textAlign: "center", color: "white", paddingBottom: "15px", paddingTop: "35px"}}>
                <em>CampusID</em> La Grande Ecole de l'Institut Européen de l'Intelligence Digitale à Sophia Antipolis qui forme les <em>Experts Programmeurs de demain</em>.
            </Typography>
        </div>
    );
};

export default Footer;
