import React from 'react';

import Header from '../components/header';
import Sidebar from '../components/sidebar';

import Footer from '../components/footer';
import Content from '../components/content';

import styles from './style';

const ContentPage = () => {
    const classes = styles();

    return (
        <>
            <Header />
            <div className={classes.container}>
                <Sidebar />
                <div className={classes.contentContainer}>
                    <Content />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContentPage;
