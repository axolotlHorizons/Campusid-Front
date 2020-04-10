import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from 'pages/login';
import Layout from 'pages/layout';




const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                    <Route path="/">
                        <Layout />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
