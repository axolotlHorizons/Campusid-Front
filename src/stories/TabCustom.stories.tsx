import React from 'react';
import TabCustom from 'common/components/TabCustom';

export default {
    title: 'TabCustom',
    component: TabCustom,
};

export const TabCustoms = () => {
    let tabArray = ['Note', 'Admin', 'Perso'];

    return (
        <div>
            <TabCustom onglets={tabArray}></TabCustom>
        </div>
    );
};
