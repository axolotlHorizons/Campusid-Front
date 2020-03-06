import React from 'react';

import ReduxExemple from './common/component/ReduxExemple';
import './App.css';
import ImgInformations from './common/component/ImgInformation';
import Button from '@material-ui/core/Button';


const App: React.FC = () => {
    let listEleve = ["", "",""];
    return (
        <div className="App">
            {listEleve.map((eleve) => {
                return <ImgInformations></ImgInformations>
            })}
        </div>
    );
};

export default App;
