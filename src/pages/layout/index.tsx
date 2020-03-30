import React from 'react';

import Header from 'common/components/header';
import Sidebar from 'common/components/sidebar';
import Content from 'common/components/content';
import Footer from 'common/components/footer';

import styles from './style';

const Layout = () => {
    const classes = styles();

    return (
        <>
            <Header />
            <div className={classes.container}>
                <div>
                    <Sidebar />
                </div>
                <Content />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
