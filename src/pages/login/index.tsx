//@ts-nocheck

import React, { useState, useEffect } from 'react';

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Radio,
    FormControlLabel,
} from '@material-ui/core';

import CustomInput from 'common/components/CustomInput';
import ButtonCustom from 'common/components/ButtonCustom';
import { allowAuthentication, fetchUser } from 'api';

export default function FormDialog() {
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
            allowAuthentication(email, password).then(response =>
                fetchUser(response)
                    .then(res => {
                        if (res[0]) {
                            localStorage.setItem(
                                'user',
                                JSON.stringify(res[0])
                            );
                            window.location.assign(`/planning`);
                        }
                    })
                    //remplacer le console log quand un système de logs sera en place !!!
                    .catch(console.log('une erreur est survenue'))
            );
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
                style={{
                    backgroundImage:
                        "url('https://thumbs.gfycat.com/NeedyFalseGosling-size_restricted.gif')",
                    backgroundSize: 'cover',
                }}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: { backgroundColor: '#870D0D', boxShadow: 'none' },
                }}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle
                    style={{ textAlign: 'center', backgroundColor: 'white' }}
                    id="form-dialog-title"
                >
                    Connexion
                </DialogTitle>
                <DialogContent>
                    <CustomInput
                        id="outlined-required"
                        variant="outlined"
                        name="N°IDBoard"
                        type="ID"
                        style={{ margin: 20, backgroundColor: 'white' }}
                        size="medium"
                        callBack={inputMailComputed}
                        hasIcon={false}
                    />

                    <CustomInput
                        id="outlined-required"
                        variant="outlined"
                        name="Mot de passe"
                        type="password"
                        style={{ margin: 20, backgroundColor: 'white' }}
                        size="medium"
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
