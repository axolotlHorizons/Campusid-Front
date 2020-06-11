//@ts-nocheck

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Radio,
    FormControlLabel,
} from '@material-ui/core';

import { userLoginSuccess, userLoginError } from 'common/state/actions';

import CustomInput from 'common/components/CustomInput';
import ButtonCustom from 'common/components/ButtonCustom';
import { allowAuthentication, fetchUser } from 'api';

import styles from './style';

export default function FormDialog() {
    const dispatch = useDispatch();
    const classes = styles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem('id_token')
    );

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        // setOpen(false);
    };

    const callBackButton = () => {
        if (email && password) {
            allowAuthentication(email, password)
                .then(response => fetchUser(response))
                .then(res => {
                    dispatch(
                        userLoginSuccess({
                            lastname: res[0].lastname,
                            firstname: res[0].firstname,
                            avatar: res[0].avatar,
                            role: res[0].role,
                            id: res[0].id,
                        })
                    );
                })
                .then(res => {
                    if (res[0].role === 'admin') {
                        window.location.assign('/admin');
                    } else {
                        window.location.assign(`/planning`);
                    }
                })
                .catch(err => {
                    dispatch(userLoginError);
                });
        }
    };

    const inputMailComputed = (event: any) => {
        setEmail(event.target.value);
    };

    const inputPasswordComputed = (event: any) => {
        setPassword(event.target.value);
    };

    useEffect(() => {
        setIsAuthenticated(!!localStorage.getItem('id_token'));
    }, []);

    return (
        <div>
            <Dialog
                className={classes.containerLogin}
                style={{
                    backgroundImage:
                        "url('https://cdn2.scratch.mit.edu/get_image/gallery/5262616_170x100.png')",
                    backgroundSize: 'cover',
                }}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        backgroundColor: 'white',
                        boxShadow: 'none',
                    },
                }}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: '#B70000',
                        height: '17%',
                        paddingTop: '50px',
                    }}
                    id="form-dialog-title"
                >
                    Connexion
                </DialogTitle>
                <DialogContent>
                    <CustomInput
                        name="N°IDBoard"
                        type="ID"
                        style={{ margin: 20, backgroundColor: 'white' }}
                        size="medium"
                        color="secondary"
                        callBack={inputMailComputed}
                        hasIcon={false}
                    />

                    <CustomInput
                        name="Mot de passe"
                        type="password"
                        width="100%"
                        style={{ margin: 20, backgroundColor: 'white' }}
                        size="medium"
                        color="secondary"
                        callBack={inputPasswordComputed}
                        hasIcon={false}
                    />
                </DialogContent>
                <FormControlLabel
                    value="Save"
                    control={<Radio />}
                    style={{ margin: 20, backgroundColor: '870D0D' }}
                    label="Se souvenir de moi"
                />

                <DialogActions style={{ display: 'flex' }}>
                    <div style={{ margin: 'auto', backgroundColor: 'white' }}>
                        <ButtonCustom
                            disabled={!password || !email}
                            callBack={callBackButton}
                            typeButton="contained"
                            valueButton="Se connecter"
                        />
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
}
