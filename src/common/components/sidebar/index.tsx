import React from 'react';
import { Link } from 'react-router-dom';

import { MenuList, MenuItem } from '@material-ui/core';

import styles from './style';

const Sidebar = () => {
    const classes = styles();

    return (
        <div className={classes.container}>
            <MenuList>
                <Link to="/config" className={classes.link}>
                    <MenuItem>Configuration</MenuItem>
                </Link>
                <Link to="/actu" className={classes.link}>
                    <MenuItem>Actualitées</MenuItem>
                </Link>
                <Link to="/demande-admin" className={classes.link}>
                    <MenuItem>Demandes administratives</MenuItem>
                </Link>
                <Link to="/orga" className={classes.link}>
                    <MenuItem>Vie étudiante</MenuItem>
                </Link>
                <Link to="/external" className={classes.link}>
                    <MenuItem>Liens externes</MenuItem>
                </Link>
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </div>
    );
};

export default Sidebar;
