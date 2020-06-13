import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Configuration from 'pages/configuration';
import ExternalLinks from 'pages/external-links';
import Grades from 'pages/grades';
import News from 'pages/news';
import Planning from 'pages/planning';
import Trombinoscope from 'pages/trombinoscopes';

import styles from './style';
import Header from '../header';
import Footer from '../footer';

const Content = () => {
    const classes = styles();

    return (
        <div className={classes.container}>
            <div>
                <Header />
            </div>
            <div className={classes.containerContent}>
                <Switch>
                    <Route path="/grades" children={<Grades />} />
                    <Route path="/trombinoscope" children={<Trombinoscope />} />
                    <Route path="/news" children={<News />} />
                    <Route path="/planning" children={<Planning />} />
                    <Route path="/" children={<Planning />} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
};

export default Content;
