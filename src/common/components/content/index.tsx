import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Configuration from 'pages/configuration';
import ExternalLinks from 'pages/external-links';
import Grades from 'pages/grades';
import News from 'pages/news';
import Planning from 'pages/planning';
import Trombinoscope from 'pages/trombinoscope';

import styles from './style';

const Content = () => {
    const classes = styles();

    return (
        <div className={classes.container}>
            <Switch>
                <Route path="/configuration" children={<Configuration />} />
                <Route path="/external-links" children={<ExternalLinks />} />
                <Route path="/grades" children={<Grades />} />
                <Route path="/news" children={<News />} />
                <Route path="/planning" children={<Planning />} />
                <Route path="/trombinoscope" children={<Trombinoscope/>} />
            </Switch>
        </div>
    );
};

export default Content;
