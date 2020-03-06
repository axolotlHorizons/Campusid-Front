import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './common/login';
import ContentPage from './common/contentPage';

import styles from './style';

const App: React.FC = () => {
    const classes = styles();

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                    <Route path="/pages" exact>
                        <ContentPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
