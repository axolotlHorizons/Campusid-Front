import React from 'react';
import ReduxExample from '../common/component/ReduxExemple';
import { Provider } from 'react-redux';

import store from '../store';

export default {
    title: 'ReduxExample',
    component: ReduxExample,
};

export const Redux = () => (
    <Provider store={store}>
        <ReduxExample />
    </Provider>
);
