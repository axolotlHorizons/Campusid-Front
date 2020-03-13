import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MenuList, MenuItem, Typography } from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import ScheduleIcon from '@material-ui/icons/Schedule';
import GradeIcon from '@material-ui/icons/Grade';
import LinkIcon from '@material-ui/icons/Link';

import { getSidebar } from '../../state/selectors';

import styles from './style';

const Sidebar = () => {
    const classes = styles();

    return (
        <div className={classes.container}>
            <MenuList>
                <MenuItem>
                    <Link to="/pages/config" className={classes.link}>
                        <SettingsIcon />
                        <Typography className={classes.label}>
                            Configuration
                        </Typography>
                    </Link>
                </MenuItem>
                <hr />

                <MenuItem>
                    <Link to="/pages/actu" className={classes.link}>
                        <SpeakerNotesIcon />
                        <Typography classes={{ root: classes.label }}>
                            Actualités
                        </Typography>
                    </Link>
                </MenuItem>
                <hr />

                <MenuItem>
                    <Link to="/pages/planning" className={classes.link}>
                        <ScheduleIcon />
                        <Typography className={classes.label}>
                            Planning
                        </Typography>
                    </Link>
                </MenuItem>
                <hr />

                <MenuItem>
                    <Link to="/pages/notes" className={classes.link}>
                        <GradeIcon />
                        <Typography className={classes.label}>Notes</Typography>
                    </Link>
                </MenuItem>
                <hr />

                <MenuItem>
                    <Link to="/pages/external" className={classes.link}>
                        <LinkIcon />
                        <Typography className={classes.label}>
                            Liens externes
                        </Typography>
                    </Link>
                </MenuItem>
            </MenuList>
        </div>
    );
};

export default Sidebar;
