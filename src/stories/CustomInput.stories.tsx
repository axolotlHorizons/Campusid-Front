import React from 'react';
import CustomInput from '../common/component/CustomInput/index';
import { withKnobs, text, select } from '@storybook/addon-knobs';




export default {
    title: 'CustomInput',
    decorators: [withKnobs],
};

export const customInput = () => {
   

    return (
        <div className="customInput">
        <CustomInput
        // title={text('Title', 'searchBar')}
        />
        </div>
    );
};
