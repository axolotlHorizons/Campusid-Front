import React from 'react';
import styles from './style';
import TabCustom from 'common/components/TabCustom';
import Accordeon from 'common/components/Accordeon';
import GraphsContainer from 'common/components/GraphsContainer';

const Grades = () => {
    let matieres = [
        {
            id: 0,
            name: 'ALGORITHMIQUE',
            icon: 'https://image.flaticon.com/icons/png/512/1551/1551209.png',
            credit: 1,
	        valid: true,
            results: [
                {
                    name: 'ALGO-POO-2 : Algorithmique - La programmation orientée objets - Partie 1',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 12.5,
                    commentaire: 'Travail assez bon',
                },
                {
                    name: 'ALGO-POO-2 : Algorithmique - La programmation orientée objets - Partie 1',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 12.5,
                    commentaire: 'Travail assez bon',
                },
            ],
        },
        {
            id: 1,
            name: 'AMBASSADEUR',
            icon: 'https://www.promoliege.com/wp-content/uploads/2016/05/ambassador_icon.png',
            credit: 2,
            valid: true,
            results: [
                {
                    name: 'AMBID-B2 : AMBASSADEUR B2',
                    type: 'Contrôle continu',
                    note: 12,
                    coeficient: 1,
                    moyenneClasse: 6.7,
                    commentaire: "Merci d'avoir participé",
                },
                {
                    name: 'AMBID-B2 : AMBASSADEUR B2',
                    type: 'Contrôle continu',
                    note: 12,
                    coeficient: 1,
                    moyenneClasse: 6.7,
                    commentaire: "Merci d'avoir participé",
                },
            ],
        },
        {
            id: 2,
            name: 'ANGLAIS',
            icon: 'https://test.linguaphone.fr/wp-content/uploads/2018/10/drapeau-anglais-300x300.png',
            credit: 2,
            results: [
                {
                    name: 'Anglais:Anglais',
                    type: 'Ecrit N°1',
                    note: 15.5,
                    coeficient: 1,
                    moyenneClasse: 14,
                    commentaire: "Bon niveau d'anglais !",
                },
                {
                    name: 'Anglais:Anglais',
                    type: 'Ecrit N°2',
                    note: 11.5,
                    coeficient: 1,
                    moyenneClasse: 14,
                    commentaire: "Bon niveau d'anglais !",
                },
            ],
        },
        {
            id: 3,
            name: 'DROIT',
            icon: 'https://image.flaticon.com/icons/png/512/39/39850.png',
            credit: 1.5,
            valid: true,
            results: [
                {
                    name: 'DRT-PROTECT-1 : Droit - La protection Juridique des outils et des productions numériques',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bonne compréhension',
                },
                {
                    name: 'DRT-PROTECT-1 : Droit - La protection Juridique des outils et des productions numériques',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bonne compréhension',
                },
            ],
        },
        {
            id: 4,
            name: 'ELECTRONIQUE',
            icon: 'https://image.flaticon.com/icons/png/512/99/99465.png',
            credit: 1,
            valid: true,
            results: [
                {
                    name: 'ELEC-MOTEUR-1 : Electronique - Le contrôle des moteurs',
                    type: 'Ecrit N°1',
                    note: 15,
                    coeficient: 1,
                    moyenneClasse: 10.5,
                    commentaire: 'Bien joué',
                },
                {
                    name: 'ELEC-MOTEUR-1 : Electronique - Le contrôle des moteurs',
                    type: 'Ecrit N°1',
                    note: 15,
                    coeficient: 1,
                    moyenneClasse: 10.5,
                    commentaire: 'Bien joué',
                },
            ],
        },
        {
            id: 5,
            name: 'EXPERIENCE PROFESSIONNELLE',
            icon: 'https://www.privacytech.fr/wp-content/uploads/professional_life.png',
            credit: 10,
            valid: true,
            results: [
                {
                    name: 'STAGE : STAGE',
                    type: 'Contrôle continu',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 8,
                    commentaire: 'Un bon commencement en entreprise, bravo',
                },
                {
                    name: 'STAGE : STAGE',
                    type: 'Contrôle continu',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 8,
                    commentaire: 'Un bon commencement en entreprise, bravo',
                },
            ],
        },
        {
            id: 6,
            name: 'LANGAGE JAVA',
            icon: 'https://getdrawings.com/free-icon-bw/java-icon-17.png',
            credit: 6.5,
            valid: true,
            results: [
                {
                    name: 'JAVA-BASE : Java - Les bases',
                    type: 'Ecrit N°1',
                    note: 10,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Moyen, mais une compréhension est présente',
                },
                {
                    name: 'JAVA-BASE : Java - Les bases',
                    type: 'Ecrit N°1',
                    note: 10,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Moyen, mais une compréhension est présente',
                },
            ],
        },
        {
            id: 7,
            name: 'LANGAGE JAVASCRIPT',
            icon: 'https://cdn.iconscout.com/icon/free/png-512/javascript-20-555998.png',
            credit: 2.5,
            valid: true,
            results: [
                {
                    name: 'JSCRIPT-POO-2 : Javascript - La programmation orientée objets',
                    type: 'Ecrit N°1',
                    note: 17,
                    coeficient: 1,
                    moyenneClasse: 14,
                    commentaire: 'Une très bonne compréhension !',
                },
                {
                    name: 'JSCRIPT-POO-2 : Javascript - La programmation orientée objets',
                    type: 'Ecrit N°1',
                    note: 17,
                    coeficient: 1,
                    moyenneClasse: 14,
                    commentaire: 'Une très bonne compréhension !',
                },
            ],
        },
        {
            id: 8,
            name: 'LANGAGE SQL',
            icon: 'https://cdn2.iconfinder.com/data/icons/programming-50/64/206_programming-sql-data-database-512.png',
            credit: 0.5,
            valid: true,
            results: [
                {
                    name: 'SQL-BDDR-GEST : SQL - Langage de gestion des données',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bon travail.',
                },
                {
                    name: 'SQL-BDDR-GEST : SQL - Langage de gestion des données',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bon travail.',
                },
            ],
        },
        {
            id: 9,
            name: 'LES LOGICIELS',
            icon: 'https://cdn1.iconfinder.com/data/icons/software-development-blue/64/development-software-engineering-preference-setting-512.png',
            credit: 2.5,
            valid: true,
            results: [
                {
                    name: "SOFT-COLLAB-GIT : Outils logiciels - Versionning et collaboration avec Git",
                    type: 'Ecrit N°1',
                    note: 20,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Parfaitement prêt pour son utilisation !!',
                },
                {
                    name: "SOFT-COLLAB-GIT : Outils logiciels - Versionning et collaboration avec Git",
                    type: 'Ecrit N°1',
                    note: 20,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Parfaitement prêt pour son utilisation !!',
                },
            ],
        },
        {
            id: 10,
            name: 'METHODOLOGIE',
            icon: 'https://static.thenounproject.com/png/300489-200.png',
            credit: 2,
            valid: true,
            results: [
                {
                    name: 'METH-MER2-MERISE2 : Méthodologie - Merise/2 appliquée aux bases de données relationnelles',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Pas mal pour un débutant.',
                },
                {
                    name: 'METH-MER2-MERISE2 : Méthodologie - Merise/2 appliquée aux bases de données relationnelles',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Pas mal pour un débutant.',
                },
            ],
        },
        {
            id: 11,
            name: 'PROJET',
            icon: 'https://static.thenounproject.com/png/72583-200.png',
            credit: 10,
            valid: true,
            results: [
                {
                    name: 'PRJ-B2-ENC : Projet individuel de 2ème année',
                    type: 'Oral N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 11,
                    commentaire: 'Projet interessant.',
                },
                {
                    name: 'PRJ-B2-ENC : Projet individuel de 2ème année',
                    type: 'Oral N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 11,
                    commentaire: 'Projet interessant.',
                },
            ],
        },
        {
            id: 12,
            name: 'ECONOMIE',
            icon: 'https://static.thenounproject.com/png/1424050-200.png',
            credit: 1,
            valid: false,
            results: [
                {
                    name: "ECO-ENT-SI : Economie - Le système d'information (SI) et les processus de l'organisation (décisionnel, opérationnel)",
                    type: 'Ecrit N°1',
                    note: 8,
                    coeficient: 1,
                    moyenneClasse: 12,
                    commentaire: 'Dommage ! Tu étais bien parti',
                },
                {
                    name: "ECO-ENT-SI : Economie - Le système d'information (SI) et les processus de l'organisation (décisionnel, opérationnel)",
                    type: 'Ecrit N°1',
                    note: 8,
                    coeficient: 1,
                    moyenneClasse: 12,
                    commentaire: 'Dommage ! Tu étais bien parti',
                },
            ],
        },
        {
            id: 13,
            name: 'LANGAGE C ET CPP',
            icon: 'https://seeklogo.com/images/C/c-programming-language-logo-9B32D017B1-seeklogo.com.png',
            credit: 6.5,
            valid: false,
            results: [
                {
                    name: 'CCPP-STR-IMPL-2 : C - Les structures de données complexes et les conteneurs - Implémentation - Partie 2',
                    type: 'Ecrit N°1',
                    note: 4,
                    coeficient: 1,
                    moyenneClasse: 7.5,
                    commentaire: 'Grosse chute, dommage.',
                },
                {
                    name: 'CCPP-STR-IMPL-2 : C - Les structures de données complexes et les conteneurs - Implémentation - Partie 2',
                    type: 'Ecrit N°1',
                    note: 4,
                    coeficient: 1,
                    moyenneClasse: 7.5,
                    commentaire: 'Grosse chute, dommage.',
                },
            ],
        },
        {
            id: 14,
            name: 'LANGAGE C#',
            icon: 'https://www.pinclipart.com/picdir/big/124-1248748_c-sharp-logo-png.png',
            credit: 6,
            valid: false,
            results: [
                {
                    name: 'CSHARP-STR : C# - Les structures de données complexes et les conteneurs',
                    type: 'Ecrit N°1',
                    note: 4,
                    coeficient: 1,
                    moyenneClasse: 6,
                    commentaire: 'Mauvaise exécution, peu de code.',
                },
                {
                    name: 'CSHARP-STR : C# - Les structures de données complexes et les conteneurs',
                    type: 'Ecrit N°1',
                    note: 4,
                    coeficient: 1,
                    moyenneClasse: 6,
                    commentaire: 'Mauvaise exécution, peu de code.',
                },
            ],
        },
        {
            id: 15,
            name: 'Python',
            icon: 'https://f0.pngfuel.com/png/266/560/python-computer-icons-programmer-javascript-programming-language-python-logo-png-clip-art.png',
            credit: 4,
            valid: false,
            results: [
                {
                    name: 'PYTHON-RPI-GPIO : Python - Utilisatoin du GPIO du Raspberry Pi',
                    type: 'Ecrit N°1',
                    note: 0,
                    coeficient: 1,
                    moyenneClasse: 8,
                    commentaire: "Aucun fonctionnement, code incorrecte, vraiment dommage.",
                },
                {
                    name: 'PYTHON-RPI-GPIO : Python - Utilisatoin du GPIO du Raspberry Pi',
                    type: 'Ecrit N°1',
                    note: 0,
                    coeficient: 1,
                    moyenneClasse: 8,
                    commentaire: "Aucun fonctionnement, code incorrecte, vraiment dommage.",
                },
            ],
        },
    ];
    const getComponentAccordeon = () => {
        return <Accordeon matieres={matieres} />;
    };

    const getComponentGraphs = () => {
        let matiereAverage = [];
        for (let y = 0; y < matieres.length; y++){
            let objToPush = {name: matieres[y].name, average: 0};
            if (matieres[y].results.length > 0){
                for (let i = 0; i < matieres[y].results.length; i++){
                    objToPush.average += matieres[y].results[i].note;
                }
                objToPush.average = objToPush.average / matieres[y].results.length;
            }
            matiereAverage.push(objToPush);
        }
      return <GraphsContainer dataAverage={matiereAverage}/>
    };

    let tabArray = [
        { name: 'Note', component: getComponentAccordeon },
        { name: 'Graph', component: getComponentGraphs },
    ];
    const classes = styles();

    return <TabCustom onglets={tabArray}></TabCustom>;
};

export default Grades;
