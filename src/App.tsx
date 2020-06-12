import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useCurrentUser } from 'common/hooks';
import Login from 'pages/login';
import AdminLayout from 'pages/adminLayout';
import Layout from 'pages/layout';
import ErrorPage from 'pages/errorPage';

const App: React.FC = () => {
    const currentUser = useCurrentUser();
    return (
        <>
            <BrowserRouter>
                <Switch>
                    {!currentUser && (
                        <Route path="/" exact render={() => <Login />} />
                    )}

                    <Route
                        path="/"
                        render={() => {
                            if (!currentUser) {
                                return <ErrorPage />;
                            }
                            return currentUser.role === 'admin' ? (
                                <AdminLayout />
                            ) : (
                                <Layout />
                            );
                        }}
                    />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
