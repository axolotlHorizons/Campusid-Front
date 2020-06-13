import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Drawer, makeStyles, Theme, createStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SettingsIcon from '@material-ui/icons/Settings';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import GradeIcon from '@material-ui/icons/Grade';
import LinkIcon from '@material-ui/icons/Link';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PeopleIcon from '@material-ui/icons/People';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            background: '#B70000',
            color: 'white',
            top: 'unset',
            position: 'unset',
            boxShadow: 'inset 0px -2px 2px 0px rgba(0,0,0,0.15)'
        },
        root: {
            display: 'flex',
            height: '100%',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

const Sidebar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                        [classes.paper]: true,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerOpen}>
                        {!open ? (
                            <ChevronRightIcon
                                style={{ fontSize: 30, color: 'white' }}
                            ></ChevronRightIcon>
                        ) : (
                            <ChevronLeftIcon
                                style={{ fontSize: 40, color: 'white' }}
                            ></ChevronLeftIcon>
                        )}
                    </IconButton>
                </div>
                <List>
                    <Link to="/planning" style={{ textDecoration: 'none' }}>
                        <ListItem
                            button
                            divider={true}
                            style={{
                                marginTop: '10px',
                                paddingTop: '25px',
                                paddingBottom: '25px',
                                fontWeight : "bold"
                            }}
                        >
                            <ListItemIcon>
                                <QueryBuilderIcon
                                    style={{ fontSize: 30, color: 'white' }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                style={{ fontSize: 30, color: 'white' }}
                                primary={'Planning'}
                            />
                        </ListItem>
                    </Link>
                    <Link to="/grades" style={{ textDecoration: 'none' }}>
                        <ListItem
                            button
                            divider={true}
                            style={{
                                paddingTop: '25px',
                                paddingBottom: '25px',
                                fontWeight : "bold"
                            }}
                        >
                            <ListItemIcon>
                                <GradeIcon
                                    style={{ fontSize: 30, color: 'white' }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                style={{ fontSize: 30, color: 'white' }}
                                primary={'Vie étudiante'}
                            />
                        </ListItem>
                    </Link>
                    <Link to="/trombinoscope" style={{ textDecoration: 'none' }}>
                        <ListItem
                            button
                            divider={true}
                            style={{
                                paddingTop: '25px',
                                paddingBottom: '25px',
                                fontWeight : "bold"
                            }}
                        >
                            <ListItemIcon>
                                <PeopleIcon
                                    style={{ fontSize: 30, color: 'white' }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                style={{ fontSize: 30, color: 'white' }}
                                primary={'Trombinoscope'}
                            />
                        </ListItem>
                    </Link>
                    <Link to="/news" style={{ textDecoration: 'none' }}>
                        <ListItem
                            button
                            divider={true}
                            style={{
                                paddingTop: '25px',
                                paddingBottom: '25px',
                                fontWeight : "bold"
                            }}
                        >
                            <ListItemIcon>
                                <SpeakerNotesIcon
                                    style={{ fontSize: 30, color: 'white' }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={'Actualités'}
                                style={{ fontSize: 30, color: 'white'}}
                            />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </div>
    );
};

export default Sidebar;
