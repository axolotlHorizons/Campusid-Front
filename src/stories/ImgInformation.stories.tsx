import React from 'react';
import ImgInformation from 'common/components/ImgInformation';
import { Provider } from 'react-redux';

import store from '../store';

export default {
    title: 'ImgInformation',
    component: ImgInformation,
};

export const ImgInformations = () => {
    let listEleve = ['', '', ''];
    return (
        <div>
            {listEleve.map(eleve => {
                return <ImgInformation></ImgInformation>;
            })}
        </div>
    );
};
