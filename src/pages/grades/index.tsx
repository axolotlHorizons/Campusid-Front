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
            icon: 'https://image.flaticon.com/icons/svg/1925/1925128.svg',
            credit: 1,
            valid: true,
            results: [
                {
                    name:
                        'ALGO-POO-2 : Algorithmique - La programmation orientée objets - Partie 1',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 12.5,
                    commentaire: 'Travail assez bon',
                    aspect: 'Théorique',
                    domain: 'C',
                },
                {
                    name:
                        'ALGO-POO-2 : Algorithmique - La programmation orientée objets - Partie 1',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 12.5,
                    commentaire: 'Travail assez bon',
                    aspect: 'Théorique',
                    domain: 'C',
                },
            ],
        },
        {
            id: 1,
            name: 'AMBASSADEUR',
            icon: 'https://image.flaticon.com/icons/svg/1999/1999218.svg',
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
                    aspect: 'Autre',
                    domain: 'Autre',
                },
                {
                    name: 'AMBID-B2 : AMBASSADEUR B2',
                    type: 'Contrôle continu',
                    note: 12,
                    coeficient: 1,
                    moyenneClasse: 6.7,
                    commentaire: "Merci d'avoir participé",
                    aspect: 'Autre',
                    domain: 'Autre',
                },
            ],
        },
        {
            id: 2,
            name: 'ANGLAIS',
            icon: 'https://image.flaticon.com/icons/svg/1377/1377975.svg',
            credit: 2,
            results: [
                {
                    name: 'Anglais:Anglais',
                    type: 'Ecrit N°1',
                    note: 15.5,
                    coeficient: 1,
                    moyenneClasse: 14,
                    commentaire: "Bon niveau d'anglais !",
                    aspect: 'Pratique',
                    domain: 'Anglais',
                },
                {
                    name: 'Anglais:Anglais',
                    type: 'Ecrit N°2',
                    note: 11.5,
                    coeficient: 1,
                    moyenneClasse: 14,
                    commentaire: "Bon niveau d'anglais !",
                    aspect: 'Pratique',
                    domain: 'Anglais',
                },
            ],
        },
        {
            id: 3,
            name: 'DROIT',
            icon: 'https://image.flaticon.com/icons/svg/1208/1208198.svg',
            credit: 1.5,
            valid: true,
            results: [
                {
                    name:
                        'DRT-PROTECT-1 : Droit - La protection Juridique des outils et des productions numériques',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bonne compréhension',
                    aspect: 'Théorique',
                    domain: 'Droit',
                },
                {
                    name:
                        'DRT-PROTECT-1 : Droit - La protection Juridique des outils et des productions numériques',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bonne compréhension',
                    aspect: 'Théorique',
                    domain: 'Droit',
                },
            ],
        },
        {
            id: 4,
            name: 'ELECTRONIQUE',
            icon: 'https://image.flaticon.com/icons/svg/2861/2861557.svg',
            credit: 1,
            valid: true,
            results: [
                {
                    name:
                        'ELEC-MOTEUR-1 : Electronique - Le contrôle des moteurs',
                    type: 'Ecrit N°1',
                    note: 15,
                    coeficient: 1,
                    moyenneClasse: 10.5,
                    commentaire: 'Bien joué',
                    aspect: 'Pratique',
                    domain: 'Electronique',
                },
                {
                    name:
                        'ELEC-MOTEUR-1 : Electronique - Le contrôle des moteurs',
                    type: 'Ecrit N°1',
                    note: 15,
                    coeficient: 1,
                    moyenneClasse: 10.5,
                    commentaire: 'Bien joué',
                    aspect: 'Pratique',
                    domain: 'Electronique',
                },
            ],
        },
        {
            id: 5,
            name: 'EXPERIENCE PROFESSIONNELLE',
            icon: 'https://image.flaticon.com/icons/svg/1063/1063196.svg',
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
                    aspect: 'Pratique',
                    domain: 'Expérience professionnelle',
                },
                {
                    name: 'STAGE : STAGE',
                    type: 'Contrôle continu',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 8,
                    commentaire: 'Un bon commencement en entreprise, bravo',
                    aspect: 'Pratique',
                    domain: 'Expérience professionnelle',
                },
            ],
        },
        {
            id: 6,
            name: 'LANGAGE JAVA',
            icon: 'https://image.flaticon.com/icons/svg/2721/2721271.svg',
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
                    aspect: 'Programmation',
                    domain: 'Java',
                },
                {
                    name: 'JAVA-BASE : Java - Les bases',
                    type: 'Ecrit N°1',
                    note: 10,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Moyen, mais une compréhension est présente',
                    aspect: 'Programmation',
                    domain: 'Java',
                },
            ],
        },
        {
            id: 7,
            name: 'LANGAGE JAVASCRIPT',
            icon: 'https://image.flaticon.com/icons/svg/2721/2721272.svg',
            credit: 2.5,
            valid: true,
            results: [
                {
                    name:
                        'JSCRIPT-POO-2 : Javascript - La programmation orientée objets',
                    type: 'Ecrit N°1',
                    note: 17,
                    coeficient: 1,
                    moyenneClasse: 14,
                    commentaire: 'Une très bonne compréhension !',
                    aspect: 'Programmation',
                    domain: 'JS',
                },
                {
                    name:
                        'JSCRIPT-POO-2 : Javascript - La programmation orientée objets',
                    type: 'Ecrit N°1',
                    note: 17,
                    coeficient: 1,
                    moyenneClasse: 14,
                    commentaire: 'Une très bonne compréhension !',
                    aspect: 'Programmation',
                    domain: 'JS',
                },
            ],
        },
        {
            id: 8,
            name: 'LANGAGE SQL',
            icon: 'https://image.flaticon.com/icons/svg/2721/2721297.svg',
            credit: 0.5,
            valid: true,
            results: [
                {
                    name:
                        'SQL-BDDR-GEST : SQL - Langage de gestion des données',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bon travail.',
                    aspect: 'Programmation',
                    domain: 'SQL',
                },
                {
                    name:
                        'SQL-BDDR-GEST : SQL - Langage de gestion des données',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Bon travail.',
                    aspect: 'Programmation',
                    domain: 'SQL',
                },
            ],
        },
        {
            id: 9,
            name: 'LES LOGICIELS',
            icon: 'https://image.flaticon.com/icons/svg/2828/2828879.svg',
            credit: 2.5,
            valid: true,
            results: [
                {
                    name:
                        'SOFT-COLLAB-GIT : Outils logiciels - Versionning et collaboration avec Git',
                    type: 'Ecrit N°1',
                    note: 20,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Parfaitement prêt pour son utilisation !!',
                    aspect: 'Logiciel',
                    domain: 'GIT',
                },
                {
                    name:
                        'SOFT-COLLAB-GIT : Outils logiciels - Versionning et collaboration avec Git',
                    type: 'Ecrit N°1',
                    note: 20,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Parfaitement prêt pour son utilisation !!',
                    aspect: 'Logiciel',
                    domain: 'GIT',
                },
            ],
        },
        {
            id: 10,
            name: 'METHODOLOGIE',
            icon: 'https://image.flaticon.com/icons/svg/2620/2620853.svg',
            credit: 2,
            valid: true,
            results: [
                {
                    name:
                        'METH-MER2-MERISE2 : Méthodologie - Merise/2 appliquée aux bases de données relationnelles',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Pas mal pour un débutant.',
                    aspect: 'Théorique',
                    domain: 'Méthodologie',
                },
                {
                    name:
                        'METH-MER2-MERISE2 : Méthodologie - Merise/2 appliquée aux bases de données relationnelles',
                    type: 'Ecrit N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 10,
                    commentaire: 'Pas mal pour un débutant.',
                    aspect: 'Théorique',
                    domain: 'Méthodologie',
                },
            ],
        },
        {
            id: 11,
            name: 'PROJET',
            icon: 'https://image.flaticon.com/icons/svg/2837/2837044.svg',
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
                    aspect: 'Programmation',
                    domain: 'Projet',
                },
                {
                    name: 'PRJ-B2-ENC : Projet individuel de 2ème année',
                    type: 'Oral N°1',
                    note: 14,
                    coeficient: 1,
                    moyenneClasse: 11,
                    commentaire: 'Projet interessant.',
                    aspect: 'Programmation',
                    domain: 'Projet',
                },
            ],
        },
        {
            id: 12,
            name: 'ECONOMIE',
            icon: 'https://image.flaticon.com/icons/svg/845/845703.svg',
            credit: 1,
            valid: false,
            results: [
                {
                    name:
                        "ECO-ENT-SI : Economie - Le système d'information (SI) et les processus de l'organisation (décisionnel, opérationnel)",
                    type: 'Ecrit N°1',
                    note: 8,
                    coeficient: 1,
                    moyenneClasse: 12,
                    commentaire: 'Dommage ! Tu étais bien parti',
                    aspect: 'Théorique',
                    domain: 'Economie',
                },
                {
                    name:
                        "ECO-ENT-SI : Economie - Le système d'information (SI) et les processus de l'organisation (décisionnel, opérationnel)",
                    type: 'Ecrit N°1',
                    note: 8,
                    coeficient: 1,
                    moyenneClasse: 12,
                    commentaire: 'Dommage ! Tu étais bien parti',
                    aspect: 'Théorique',
                    domain: 'Economie',
                },
            ],
        },
        {
            id: 13,
            name: 'LANGAGE C ET CPP',
            icon:
                'https://seeklogo.com/images/C/c-programming-language-logo-9B32D017B1-seeklogo.com.png',
            credit: 6.5,
            valid: false,
            results: [
                {
                    name:
                        'CCPP-STR-IMPL-2 : C - Les structures de données complexes et les conteneurs - Implémentation - Partie 2',
                    type: 'Ecrit N°1',
                    note: 4,
                    coeficient: 1,
                    moyenneClasse: 7.5,
                    commentaire: 'Grosse chute, dommage.',
                    aspect: 'Programmation',
                    domain: 'C',
                },
                {
                    name:
                        'CCPP-STR-IMPL-2 : C - Les structures de données complexes et les conteneurs - Implémentation - Partie 2',
                    type: 'Ecrit N°1',
                    note: 4,
                    coeficient: 1,
                    moyenneClasse: 7.5,
                    commentaire: 'Grosse chute, dommage.',
                    aspect: 'Programmation',
                    domain: 'C',
                },
            ],
        },
        {
            id: 14,
            name: 'LANGAGE C#',
            icon:
                'https://www.pinclipart.com/picdir/big/124-1248748_c-sharp-logo-png.png',
            credit: 6,
            valid: false,
            results: [
                {
                    name:
                        'CSHARP-STR : C# - Les structures de données complexes et les conteneurs',
                    type: 'Ecrit N°1',
                    note: 4,
                    coeficient: 1,
                    moyenneClasse: 6,
                    commentaire: 'Mauvaise exécution, peu de code.',
                    aspect: 'Programmation',
                    domain: 'C#',
                },
                {
                    name:
                        'CSHARP-STR : C# - Les structures de données complexes et les conteneurs',
                    type: 'Ecrit N°2',
                    note: 4,
                    coeficient: 1,
                    moyenneClasse: 6,
                    commentaire: 'Mauvaise exécution, peu de code.',
                    aspect: 'Programmation',
                    domain: 'C#',
                },
            ],
        },
        {
            id: 15,
            name: 'Python',
            icon: 'https://image.flaticon.com/icons/svg/2721/2721287.svg',
            credit: 4,
            valid: false,
            results: [
                {
                    name:
                        'PYTHON-RPI-GPIO : Python - Utilisatoin du GPIO du Raspberry Pi',
                    type: 'Ecrit N°1',
                    note: 0,
                    coeficient: 1,
                    moyenneClasse: 8,
                    commentaire:
                        'Aucun fonctionnement, code incorrecte, vraiment dommage.',
                    aspect: 'Programmation',
                    domain: 'Python',
                },
                {
                    name:
                        'PYTHON-RPI-GPIO : Python - Utilisatoin du GPIO du Raspberry Pi',
                    type: 'Ecrit N°1',
                    note: 0,
                    coeficient: 1,
                    moyenneClasse: 8,
                    commentaire:
                        'Aucun fonctionnement, code incorrecte, vraiment dommage.',
                    aspect: 'Programmation',
                    domain: 'Python',
                },
            ],
        },
    ];

    let resultsTotale =
        {
            "inProgress": {
            name: "En cours de validation",
            icon: "https://image.flaticon.com/icons/svg/325/325211.svg"
            },
        
            "validated": {
            name: "Validé",
            icon: "https://image.flaticon.com/icons/svg/390/390973.svg"
            },
        
            "failed": {
            name: "Echoué",
            icon: "https://image.flaticon.com/icons/svg/594/594864.svg"
            },
        
            "obtainedCredits": {
            name: "Crédits obtenu",
            icon: "https://image.flaticon.com/icons/svg/794/794625.svg"
            }
        }

    const getComponentAccordeon = () => {
        return <Accordeon resultsTotale = {resultsTotale} matieres={matieres} />;
    };

    const getAspectAverage = (notes: []) => {
        let average = 0;
        notes.map(note => {
            average += note;
        });

        return average / notes.length;
    };

    const getComponentGraphs = () => {
        let matiereAverage = [];
        let coursesAverage = [];
        let aspectAverages: any = [];
        let finalAspectAverage: any = [];

        for (let y = 0; y < matieres.length; y++) {
            let objToPush = {
                name: matieres[y].name,
                average: 0,
            };

            if (matieres[y].results.length > 0) {
                for (let i = 0; i < matieres[y].results.length; i++) {
                    objToPush.average += matieres[y].results[i].note;

                    let courseAverage = {
                        name: matieres[y].results[i].name,
                        average: matieres[y].results[i].note,
                    };

                    if (!aspectAverages[matieres[y].results[i].aspect as any]) {
                        aspectAverages[
                            matieres[y].results[i].aspect as any
                        ] = [];
                        aspectAverages[
                            matieres[y].results[i].aspect as any
                        ].push(matieres[y].results[i].note);
                    } else {
                        aspectAverages[
                            matieres[y].results[i].aspect as any
                        ].push(matieres[y].results[i].note);
                    }
                    coursesAverage.push(courseAverage);
                }

                objToPush.average =
                    objToPush.average / matieres[y].results.length;
            }
            matiereAverage.push(objToPush);
        }

        Object.entries(aspectAverages).forEach(function(aspect, y) {
            let notes: any = aspect[1];
            let finalAverage = getAspectAverage(notes);

            finalAspectAverage.push({
                name: aspect[0],
                average: finalAverage,
            });
        });

        console.log(finalAspectAverage);

        return (
            <GraphsContainer
                dataAverage={matiereAverage}
                aspectAverage={finalAspectAverage}
                coursesAverage={coursesAverage}
            />
        );
    };

    let tabArray = [
        { name: 'Note', component: getComponentAccordeon },
        { name: 'Graph', component: getComponentGraphs },
    ];

    return <TabCustom onglets={tabArray}></TabCustom>;
};

export default Grades;
