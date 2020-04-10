import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from 'pages/login';
import Layout from 'pages/layout';
import TabCustom from 'common/component/TabCustom'

var tabArray = ["Note", "Admin", "Perso"]

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
            <TabCustom onglets={tabArray}></TabCustom>
        </>
    );
};

export default App;
