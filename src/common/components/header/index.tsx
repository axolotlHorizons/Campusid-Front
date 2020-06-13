import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import {
    AppBar,
    Toolbar,
    IconButton,
    MenuItem,
    Menu,
    Typography,
    Dialog,
    CardMedia,
} from '@material-ui/core';

import Avatar from 'common/components/Avatar';
import AvatarPicker from 'common/components/AvatarPicker';
import ButtonCustom from 'common/components/ButtonCustom';

import { useCurrentUser } from 'common/hooks';
import { getProfileImage } from 'common/state/selectors';

import styles from './style';
import { Button, Grid, GridSpacing,Container, Card, DialogTitle, List, ListItemAvatar, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';

type User = {
    name: string;
    firstname: string;
    idboard: string;
    avatar?: string;
};
const Header = () => {
    const classes = styles();
    const auth = !!localStorage.getItem('state');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const currentUser = useCurrentUser();

    const src = useSelector(getProfileImage);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        
    };
    const [openMail, setMail] = React.useState(false);
    const [openMdp, setMdp] = React.useState(false);
    const [openData, setData] = React.useState(false);
    
    const handleClickOpenMail = () => {
        setMail(true);
    };

    const handleCloseMail = () => {
        setMail(false);
    };

    const handleClickOpenMdp = () => {
        setMdp(true);
    };

    const handleCloseMdp = () => {
        setMdp(false);
    };


    const handleClickOpenData = () => {
        setData(true);
    };

    const handleCloseData = () => {
        setData(false);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const disconnected = () => {
        localStorage.removeItem('state');
        window.location.assign(`/`);
    };

    const returnDialogMail = () => {
        return (
            <div>
                <Dialog
                    open={openMail}
                    onClose={handleCloseMail}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title"></DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Demande administrative
                        </DialogContentText>
                    </DialogContent>
                    Mail:
                    <DialogActions>
                        <Button onClick={handleCloseMail} color="primary">
                            Fermé
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )};

        const returnDialogMdp = () => {
            return (
                <div>
                    <Dialog
                        open={openMdp}
                        onClose={handleCloseMdp}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title"></DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                scolarite@campusid.com
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseMdp} color="primary">
                                Fermé
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )};

            const returnDialogData = () => {
                return (
                    <div>
                        <Dialog
                            open={openData}
                            onClose={handleCloseData}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title"></DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    scolarite@campusid.com
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseData} color="primary">
                                    Fermé
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                )};

    return (
        <div className={classes.container}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <CardMedia
                        className={classes.logoCampus}
                        image={require('./campusIdLogo.png')}
                        title="Campus ID"
                    />
                    {auth && currentUser && (
                        <div className={classes.profileIcon}>
                            <Typography
                                variant="h6"
                                component="h6"
                                className={classes.userName}
                            >
                                {currentUser
                                    ? `${currentUser.lastname} ${currentUser.firstname}`
                                    : 'Nom Prénom'}
                            </Typography>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <Avatar
                                    src={src}
                                    nickname={currentUser?.firstname}
                                />
                            </IconButton>
                            <Menu
                                PaperProps={{
                                    style: {
                                        width: '250px',
                                        height: 'auto',
                                        background: 'rgba(183, 0, 0, 0.9)',
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
                                            nickname={currentUser.firstname}
                                            mode="large"
                                        />
                                    </AvatarPicker>

                                    <Typography
                                        variant="h6"
                                        component="h6"
                                        style={{ textAlign: 'center' }}
                                    >
                                        {currentUser
                                            ? `${currentUser.lastname} ${currentUser.firstname}`
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
                                        <div  className={classes.containerLogin}>
                                        <Link
                                            to="/"
                                            style={{ textDecoration: 'none' }}
                                            className={classes.containerLogin}

                                        >

                                        
                                            
                                        
                                            <ButtonCustom
                                                callBack={disconnected}
                                                typeButton="contained"
                                                valueButton="se déconnecter"
                                                icon = {< ExitToAppOutlinedIcon/>}
                                            ></ButtonCustom>
                                          </Link>

                                            <br></br>
                                              <ButtonCustom
                                                callBack={handleClickOpenMail}
                                                typeButton="contained"
                                                valueButton="Envoyer un mail"
                                                icon = {< MailOutlineOutlinedIcon/>}
                                            ></ButtonCustom>
                                            <br></br>
                                              <ButtonCustom
                                                callBack={handleClickOpenMdp}
                                                typeButton="contained"
                                                valueButton="Modifier le MDP"
                                                icon = {< VpnKeyOutlinedIcon/>}

                                            ></ButtonCustom>
                                            <br></br>
                                       
                                            <ButtonCustom
                                                callBack={handleClickOpenData}
                                                typeButton="contained"
                                                valueButton="Données personnelles"
                                                icon = {< StorageOutlinedIcon/>}
                                            ></ButtonCustom>
                        </div>
                                    </div>
                                </MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
                {returnDialogMail()}
                {returnDialogMdp()}
                {returnDialogData()}

            </AppBar>
        </div>
    );
};

export default Header;
