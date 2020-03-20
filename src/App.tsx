import React from 'react';

import ReduxExemple from './common/component/ReduxExemple';
import Accordeon from './common/component/Accordeon';
import './App.css';

const App: React.FC = () => {
    let matieres = [
        {
            "id" : 0,
            "name" : "JavaScript",
            "icon" : "https://c7.uihere.com/files/780/695/593/javascript-comment-html-logo-international-conference-on-missions-node-js-icon.jpg",
            "credit" : 4,
            "results" : [
                {
                    "name" : "ANG-SECTINFO-NIV5 -1 : Anglais – Niveau 5 (acquisition du niveau C2 et préparation au BULAT)",
                    "type" : "Ecrit N°1",
                    "note" : 14,
                    "coeficient" : 1,
                    "moyenneClasse" : 10,
                    "commentaire" : "Bla bla bla"
                },
                {
                    "name" : "ANG-SECTINFO-NIV5 -1 : Anglais – Niveau 5 (acquisition du niveau C2 et préparation au BULAT)"
                }
            ]
        }
    ];
    return (
        <div className="App">
            <Accordeon matieres={matieres} />
        </div>
    );
};

export default App;
