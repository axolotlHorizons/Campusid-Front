import React from 'react';
import { Link } from 'react-router-dom';

import { MenuList, MenuItem, Typography } from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import ScheduleIcon from '@material-ui/icons/Schedule';
import GradeIcon from '@material-ui/icons/Grade';
import LinkIcon from '@material-ui/icons/Link';

import styles from './style';

const Sidebar = () => {
    const classes = styles();

    return (
        <MenuList className={classes.container}>
            <Link to="/configuration" className={classes.link}>
                <MenuItem>
                    <SettingsIcon />
                    <Typography classes={{ root: classes.label }}>
                        Configuration
                    </Typography>
                </MenuItem>
            </Link>

            <hr />
            <Link to="/news" className={classes.link}>
                <MenuItem>
                    <SpeakerNotesIcon />
                    <Typography className={classes.label}>
                        Actualités
                    </Typography>
                </MenuItem>
            </Link>

            <hr />
            <Link to="/planning" className={classes.link}>
                <MenuItem>
                    <ScheduleIcon />
                    <Typography className={classes.label}>Planning</Typography>
                </MenuItem>
            </Link>

            <hr />
            <Link to="/grades" className={classes.link}>
                <MenuItem>
                    <GradeIcon />
                    <Typography className={classes.label}>Notes</Typography>
                </MenuItem>
            </Link>

            <hr />
            <Link to="/external-links" className={classes.link}>
                <MenuItem>
                    <LinkIcon />
                    <Typography className={classes.label}>
                        Liens externes
                    </Typography>
                </MenuItem>
            </Link>
        </MenuList>
    );
};

export default Sidebar;
