import React from 'react';
import Accordeon from '../common/component/Accordeon';
import { Provider } from 'react-redux';

import store from '../store';

export default {
    title: 'Accordeon component',
    component: Accordeon,
};

export const AccordeonComponent = () => {
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
        },
        {
            "id" : 1,
            "name" : "C++",
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
        },
        {
            "id" : 2,
            "name" : "PHP",
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
        },
        {
            "id" : 3,
            "name" : "Java",
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
        },
        {
            "id" : 4,
            "name" : "Algorithmique",
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
        },
        {
            "id" : 5,
            "name" : "Ambassadeur",
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
        },
        {
            "id" : 6,
            "name" : "Anglais",
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
        },
        {
            "id" : 7,
            "name" : "Droit",
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
        },
        {
            "id" : 8,
            "name" : "Domotique",
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
        },
        {
            "id" : 9,
            "name" : "Experience Professionnelle",
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
        },
        {
            "id" : 10,
            "name" : "IdLabs",
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
        },
        {
            "id" : 11,
            "name" : "Langage C-CPP",
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
        },
        {
            "id" : 12,
            "name" : "Langage CSharp",
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
        },
        {
            "id" : 13,
            "name" : "Methodologie",
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
        },
        {
            "id" : 14,
            "name" : "Sciences Appliquees",
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
        },
        {
            "id" : 15,
            "name" : "Python",
            "icon" : "https://c7.uihere.com/files/780/695/593/javascript-comment-html-logo-international-conference-on-missions-node-js-icon.jpg",
            "credit" : 4,
            "results" : [
                {
                    "name" : "test",
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
    <Accordeon matieres={matieres} />
)};
