import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { getUserData, getIsAdmin } from 'common/state/selectors';

import Login from 'pages/login';
import AdminLayout from 'pages/adminLayout';
import Layout from 'pages/layout';

const App: React.FC = () => {
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

                    <Route path="/">
                        {isAdmin && <AdminLayout />}
                        {!isAdmin && <Layout />}
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
