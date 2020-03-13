import React from 'react';

import ReduxExemple from './common/component/ReduxExemple';
import Accordeon from './common/component/Accordeon';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Accordeon note="Default-Note" matiere="Default-Matiere" />
        </div>
    );
};

export default App;
