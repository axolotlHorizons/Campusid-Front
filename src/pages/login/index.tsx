import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Snackbar } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { setUser } from 'common/state/actions';
import { getUser } from 'api';

const Login = () => {
    const dispatch = useDispatch();
    const authentication_key = 'toto';
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem('id_token')
    );
    const onClick = () => {
        getUser(1).then(res => dispatch(setUser(res)));
        localStorage.setItem('id_token', authentication_key);
        setIsAuthenticated(!!localStorage.getItem('id_token'));
    };

    return (
        <>
            <div>
                <Button onClick={onClick} variant="outlined">
                    Send user info to redux + auth key to localestorage
                </Button>
            </div>
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={true}
                    message={
                        isAuthenticated ? (
                            <span>
                                "You are logged !
                                <Link style={{ color: 'red' }} to="/idboard">
                                    Click here to go to the IDboard
                                </Link>
                            </span>
                        ) : (
                            <span>
                                "You are not logged !
                                <Link style={{ color: 'red' }} to="/idboard">
                                    Click here to go to the IDboard
                                </Link>
                            </span>
                        )
                    }
                />
            </div>
        </>
    );
};

export default Login;
