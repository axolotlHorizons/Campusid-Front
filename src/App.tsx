//@ts-nocheck
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { setUser, setAdmin } from 'common/state/actions';
import { getUserData, getIsAdmin } from 'common/state/selectors';

import Login from 'pages/login';
import AdminLayout from 'pages/adminLayout';
import Layout from 'pages/layout';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const userId = Number(localStorage.getItem('user_id'));
    const isLogged = !!useSelector(getUserData);
    const isAdmin = !!useSelector(getIsAdmin);
    return (
        <>
            <BrowserRouter>
                <Switch>
                    {!isLogged && (
                        <Route path="/" exact>
                            <Login />
                        </Route>
                    )}

                    <Route
                        path="/"
                        onEnter={useEffect(() => {
                            const user = JSON.parse(
                                localStorage.getItem('user')
                            );
                            dispatch(setUser(user));
                            if (user?.role && user?.role === 'admin') {
                                dispatch(setAdmin(true));
                            }
                        }, [dispatch, isLogged, userId])}
                    >
                        {isAdmin && <AdminLayout />}
                        {!isAdmin && <Layout />}
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
