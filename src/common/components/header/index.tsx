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
    Avatar,
    Dialog,
} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { getUser } from 'common/state/selectors';

import styles from './style';
import ButtonCustom from '../ButtonCustom';
import { Button, Grid, GridSpacing,Container, Card, DialogTitle, List, ListItemAvatar, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';

type User = {
    name: string;
    firstname: string;
    idboard: string;
    avatar?: string;
};
const Header = () => {
    const classes = styles();
    const auth = !!localStorage.getItem('id_token');
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const user: User = useSelector(getUser);
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
        localStorage.removeItem('id_token');
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
                    {auth && (
                        <div className={classes.profileIcon}>
                            <Typography
                                variant="h6"
                                component="h6"
                                className={classes.userName}
                            >
                                {user
                                    ? `${user.name} ${user.firstname}`
                                    : 'Nom Prénom'}
                            </Typography>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                {user?.avatar ? (
                                    <img
                                        width="60px"
                                        height="60px"
                                        style={{borderRadius: "50%"}}
                                        src={user.avatar}
                                        alt="avatar"
                                    />
                                ) : (
                                    <AccountCircle />
                                )}
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
                                    onClick={handleClose}
                                    style={{
                                        background: 'rgba(183, 0, 0, 0.7)',
                                        display: 'block',
                                    }}
                                >
                                    <Avatar
                                        style={{
                                            margin: 'auto',
                                            height: '75px',
                                            width: '75px',
                                        }}
                                        alt="Nom Prénom"                                        
                                    >
                                        {user?.avatar ? (
                                            <img
                                                width="100%"
                                                src={user.avatar}
                                                alt="avatar"
                                            />
                                        ) : (
                                            'NP'
                                        )}
                                    </Avatar>
                                    <Typography
                                        variant="h6"
                                        component="h6"
                                        style={{ textAlign: 'center' }}
                                    >
                                        {user
                                            ? `${user.name} ${user.firstname}`
                                            : 'Nom Prénom'}
                                            <br></br>
                                            {user
                                            ? `${user.idboard}`
                                            : 'N°IDBOARD'}
                                            
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
