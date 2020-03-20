import React from 'react';
import ButtonCustom from 'common/components/ButtonCustom';

export default {
    title: 'CustomButton',
    component: ButtonCustom,
};

export const CustomButton = () => {
    let callBack = (event: any) => {
        console.log('event');
        console.log(event);
    };
    return (
        <ButtonCustom
            callBack={callBack}
            typeButton="contained"
            valueButton="confirmed"
        />
    );
};
