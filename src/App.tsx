//@ts-nocheck
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { fetchUser } from 'api';

import { setUser, setErrorPage } from 'common/state/actions';
import { getUserData, getErrorPage } from 'common/state/selectors';

import Login from 'pages/login';
import Layout from 'pages/layout';
import ErrorPage from 'pages/errorPage';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const userId = Number(localStorage.getItem('user_id'));
    const user = !!useSelector(getUserData);
    const error = !!useSelector(getErrorPage);

    return (
        <>
            <BrowserRouter>
                <Switch>
                    {!user && (
                        <Route path="/" exact>
                            <Login />
                        </Route>
                    )}

                    <Route
                        path="/"
                        onEnter={useEffect(() => {
                            dispatch(
                                setUser(
                                    JSON.parse(localStorage.getItem('user'))
                                )
                            );
                            dispatch(setErrorPage(false));
                        }, [dispatch, user, userId])}
                    >
                        {error ? <ErrorPage /> : <Layout />}
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
