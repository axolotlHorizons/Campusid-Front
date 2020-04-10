import React from 'react';
import Accordeon from 'common/components/Accordeon';

export default {
    title: 'Accordeon component',
    component: Accordeon,
};

export const AccordeonComponent = () => {
    let matieres = [
        {
            id: 0,
            name: 'JavaScript',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 1,
            name: 'C++',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 2,
            name: 'PHP',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 3,
            name: 'Java',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 4,
            name: 'Algorithmique',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 5,
            name: 'Ambassadeur',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 6,
            name: 'Anglais',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 7,
            name: 'Droit',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 8,
            name: 'Domotique',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 9,
            name: 'Experience Professionnelle',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 10,
            name: 'IdLabs',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 11,
            name: 'Langage C-CPP',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 12,
            name: 'Langage CSharp',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 13,
            name: 'Methodologie',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 14,
            name: 'Sciences Appliquees',
            icon:
                '',
            credit: 4,
            results: [
                {
                    name:
                        'default-name',
                    type: 'default-type',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bla bla bla',
                },
                {
                    name:
                        'default-name',
                },
            ],
        },
        {
            id: 15,
            name: 'Python',
            icon:
                '',
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
                    name:
                        'default-name',
                },
            ],
        },
    ];
    return <Accordeon matieres={matieres} />;
};
