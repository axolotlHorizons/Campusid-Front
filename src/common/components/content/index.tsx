import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Planning from '../planning';
import Notes from '../notes';

import styles from './style';
const Content = () => {
    const classes = styles();
    return (
        <div className={classes.container}>
            <Switch>
                <Route path="/pages/planning">
                    <Planning />
                </Route>
                <Route path="/pages/notes">
                    <Notes />
                </Route>
            </Switch>
        </div>
    );
};

export default Content;
