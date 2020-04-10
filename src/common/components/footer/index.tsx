import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import HelpIcon from '@material-ui/icons/Help';
import BookIcon from '@material-ui/icons/Book';
import RowingIcon from '@material-ui/icons/Rowing';
import { Typography } from '@material-ui/core';

import styles from './style';

const Footer = () => {
    const classes = styles();

    return (
        <div className={classes.container}>
            <div className={classes.uselessIcons}>
                <MailIcon className={classes.marginAuto}></MailIcon>
                <HelpIcon className={classes.marginAuto}></HelpIcon>
                <BookIcon className={classes.marginAuto}></BookIcon>
                <RowingIcon className={classes.marginAuto}></RowingIcon>
            </div>
            <Typography variant="h6" component="h6" style={{textAlign: "center", color: "white", paddingBottom: "15px"}}>
                CampusID La Grande Ecole de l'Institut Européen de l'Intelligence Digitale à Sophia Antipolis qui forme les Experts Programmeurs de demain.
            </Typography>
        </div>
    );
};

export default Footer;
