import React from 'react';
import { Link } from 'react-router-dom';

import { MenuList, MenuItem } from '@material-ui/core';

import styles from './style';

const Sidebar = () => {
    const classes = styles();

    return (
        <div className={classes.container}>
            <MenuList>
                <Link to="/pages/config" className={classes.link}>
                    <MenuItem>Configuration</MenuItem>
                </Link>
                <Link to="/pages/actu" className={classes.link}>
                    <MenuItem>Actualitées</MenuItem>
                </Link>
                <Link to="/pages/planning" className={classes.link}>
                    <MenuItem>Planning</MenuItem>
                </Link>
                <Link to="/pages/notes" className={classes.link}>
                    <MenuItem>Notes</MenuItem>
                </Link>
                <Link to="/pages/external" className={classes.link}>
                    <MenuItem>Liens externes</MenuItem>
                </Link>
                <MenuItem>Logout</MenuItem>
            </MenuList>
        </div>
    );
};

export default Sidebar;
