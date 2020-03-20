import React from 'react';

import './App.css';
import CallButtonCustom from './common/component/ButtonCustom/CallButtonCustom';

const App: React.FC = () => {
    return (
        <div className="App">
            <CallButtonCustom value="BOUTON"></CallButtonCustom>
        </div>
    );
};

export default App;
