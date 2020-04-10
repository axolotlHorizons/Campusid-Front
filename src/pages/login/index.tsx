import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
import { setUser } from 'common/state/actions';
import { getUser } from 'api';

export default function FormDialog() {
    const dispatch = useDispatch();
    const authentication_key = 'toto';
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem('id_token')
    );

    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        //setOpen(false);
    };

    const callBackButton = (event: any) => {
        console.log('event');
        console.log(event);
        ////////DB TEST TO REMOVE
        getUser(1).then(res => dispatch(setUser(res)));
        localStorage.setItem('id_token', authentication_key);
        setIsAuthenticated(!!localStorage.getItem('id_token'));
        ///////
    };

    const inputMailComputed = (value: any) => {
        console.log('Value ID : ');
        console.log(value.target.value);
    };

    const inputPasswordComputed = (value: any) => {
        console.log('value Password : ');
        console.log(value.target.value);
    };

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
                    <Link to="/index" style={{ textDecoration: 'none' }}>
                        <div
                            style={{ margin: 'auto', backgroundColor: 'white' }}
                        >
                            <ButtonCustom
                                callBack={callBackButton}
                                typeButton="contained"
                                valueButton="Se connecter"
                            />
                        </div>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}
