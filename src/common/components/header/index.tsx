import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    AppBar,
    Toolbar,
    IconButton,
    MenuItem,
    Menu,
    Typography,
    CardMedia,
} from '@material-ui/core';

import Avatar from 'common/components/Avatar';
import AvatarPicker from 'common/components/AvatarPicker';
import ButtonCustom from 'common/components/ButtonCustom';

import { getUserData, getProfileImage } from 'common/state/selectors';

import styles from './style';

type User = {
    lastname: string;
    firstname: string;
    role: string;
    avatar: { image: string | null };
};
const Header = () => {
    const classes = styles();
    const auth = !!localStorage.getItem('state');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const user: User = useSelector(getUserData);
    const src = useSelector(getProfileImage);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const disconnected = () => {
        localStorage.removeItem('state');
        window.location.assign(`/`);
    };

    return (
        <div className={classes.container}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <CardMedia
                        className={classes.logoCampus}
                        image={require('./campusIdLogo.png')}
                        title="Campus ID"
                    />
                    {auth && user && (
                        <div className={classes.profileIcon}>
                            <Typography
                                variant="h6"
                                component="h6"
                                className={classes.userName}
                            >
                                {user
                                    ? `${user.lastname} ${user.firstname}`
                                    : 'Nom Prénom'}
                            </Typography>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <Avatar src={src} nickname={user.firstname} />
                            </IconButton>
                            <Menu
                                PaperProps={{
                                    style: {
                                        width: '250px',
                                        height: '250px',
                                        background: 'rgba(183, 0, 0, 0.5)',
                                        color: 'white',
                                    },
                                }}
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem
                                    style={{
                                        background: 'rgba(183, 0, 0, 0.7)',
                                        display: 'block',
                                    }}
                                    disableGutters
                                >
                                    <AvatarPicker>
                                        <Avatar
                                            src={src}
                                            nickname={user.firstname}
                                            mode="large"
                                        />
                                    </AvatarPicker>

                                    <Typography
                                        variant="h6"
                                        component="h6"
                                        style={{ textAlign: 'center' }}
                                    >
                                        {user
                                            ? `${user.lastname} ${user.firstname}`
                                            : 'Nom Prénom'}
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <div
                                        style={{
                                            margin: 'auto',
                                            marginTop: '35px',
                                        }}
                                    >
                                        <Link
                                            to="/"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <ButtonCustom
                                                callBack={disconnected}
                                                typeButton="contained"
                                                valueButton="Deconnexion"
                                            ></ButtonCustom>
                                        </Link>
                                    </div>
                                </MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
