import React from 'react';
import ButtonCustom from '../common/component/ButtonCustom';
import { Provider } from 'react-redux';

import store from '../store';

export default {
    title: 'CustomButton',
    component: ButtonCustom,
};

export const CustomButton = () => {
    let callBack = (event : any) => {
        console.log("event");
        console.log(event);
    };
    return(
    <Provider store={store}>
        <ButtonCustom callBack={callBack} typeButton="contained" valueButton="confirmed"/>
    </Provider>
)};
