import React from 'react';
import CustomInput from '../common/component/CustomInput/index';
import { withKnobs, text, select } from '@storybook/addon-knobs';




export default {
    title: 'CustomInput',
    decorators: [withKnobs],
};

export const customInputPassword = () => {
    let inputComputed = (value : any) => {
        console.log("value");
        console.log(value.target.value);
    };
    return (
        <div className="customInput">
        <CustomInput
         name="Enter your password"
         type="password"
         callBack={inputComputed}
        />
        </div>
    );
};

export const customInputMail = () => {
    let inputComputed = (value : any) => {
      console.log("value");
      console.log(value.target.value);
    };
    return (
        <div className="customInput">
        <CustomInput
         name="Enter your mail"
         type="mail"
         callBack={inputComputed}
        />
        </div>
    );
};
