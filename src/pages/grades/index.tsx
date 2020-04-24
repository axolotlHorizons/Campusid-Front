import React from 'react';
import styles from './style';
import TabCustom from 'common/components/TabCustom';
import Accordeon from 'common/components/Accordeon';

const Grades = () => {
    let matieres = [
        {
            id: 0,
            name: 'JavaScript',
            icon: '',
            credit: 4,
            valid: true,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },{
                    name: 'default-name',
                    type: 'default-type',
                    note: 9,
                    coeficient: 1,
                    moyenneClasse: 15,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 1,
            name: 'C++',
            icon: '',
            credit: 4,
            valid: false,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 9,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                }
            ],
        },
        {
            id: 2,
            name: 'PHP',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 3,
            name: 'Java',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 4,
            name: 'Algorithmique',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 5,
            name: 'Ambassadeur',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 6,
            name: 'Anglais',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 7,
            name: 'Droit',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 8,
            name: 'Domotique',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 9,
            name: 'Experience Professionnelle',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 10,
            name: 'IdLabs',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 11,
            name: 'Langage C-CPP',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 12,
            name: 'Langage CSharp',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 13,
            name: 'Methodologie',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 14,
            name: 'Sciences Appliquees',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
        {
            id: 15,
            name: 'Python',
            icon: '',
            credit: 4,
            results: [
                {
                    name: 'test',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name: 'default-name',
                },
            ],
        },
    ];
    const getComponentAccordeon = () => {
        return <Accordeon matieres={matieres} />;
    };

    let tabArray = [
        { name: 'Note', component: getComponentAccordeon },
        { name: 'Graph', component: 'Ici ce sera les charts' },
    ];
    const classes = styles();

    return <TabCustom onglets={tabArray}></TabCustom>;
};

export default Grades;
