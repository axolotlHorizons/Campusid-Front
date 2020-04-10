import React from 'react';

import { AppBar, Toolbar, IconButton, MenuItem, Menu, Typography, Avatar } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

import styles from './style';
import ButtonCustom from '../ButtonCustom';

const Header = () => {
    const classes = styles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const disconnected = () => {
        console.log("Disconnected");
    };

    return (
        <div className={classes.container}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <CardMedia
                        className={classes.logoCampus}
                        image={require("./campusIdLogo.png")}
                        title="Campus ID"
                    />
                    {auth && (
                        <div className={classes.profileIcon}>
                            <Typography variant="h6" component="h6" className={classes.userName}>
                                Nom Prénom
                            </Typography>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu  PaperProps={{
                                style: {
                                    width: "250px",
                                    height: '250px',
                                    background: 'rgba(183, 0, 0, 0.5)',
                                    color: "white"
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
                                <MenuItem onClick={handleClose} style={{background: 'rgba(183, 0, 0, 0.7)', display:"block"}}>
                                    <Avatar style={{margin:"auto", "height": "75px", "width": "75px"}} alt="Nom Prénom">NP</Avatar>
                                    <Typography variant="h6" component="h6" style={{textAlign: "center"}}>
                                        Nom Prénom
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <div style={{margin: 'auto', marginTop: '35px'}}>
                                        <Link to="/" style={{textDecoration: "none" }}>
                                            <ButtonCustom callBack={disconnected}
                                                          typeButton="contained"
                                                          valueButton="Deconnexion">
                                            </ButtonCustom>
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
