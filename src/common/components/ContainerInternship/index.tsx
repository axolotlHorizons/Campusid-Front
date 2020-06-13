import React, { useState, useEffect } from 'react';
import ImageCard from '../Card/ImageCard/index';
import styles from './style';
import { getInternship } from '../../../api/index';
import moment from 'moment';
import 'moment/locale/fr';

function ContainerInternship(props: any) {
    const [test, setTest] = useState([]);

    let data: any = [];

    useEffect(() => {
        getInternship().then((res: any) => {
            Object.entries(res).forEach(function(internship: any, index: any) {
                data.push({
                    mission: internship[1].missionSummary,
                    value: internship[1].title,
                    companyName: internship[1].companyName,
                    typeDeMission: internship[1].typeDefaultValue,
                    duree: internship[1].duration,
                    start: moment(internship[1].dateStart).format('ll'),
                    end: moment(internship[1].dateEnd).format('ll'),
                    text: internship[1].companyName,
                    contact: internship[1].contact,
                    phone: internship[1].contactPhone,
                    mail: internship[1].contactMail,
                    adress: internship[1].addressOne,
                    postal: internship[1].postalCode,
                    ville: internship[1].city,
                    pays: internship[1].country,
                });
            });
            setTest(data);
        });
    }, []);

    const classes = styles();

    console.log(test);
    return test.length > 0 ? (
        <>
            {test.map((item: any) => (
                <div className="cardInternship">
                    <ImageCard
                        image={
                            'https://studandglobe.com/wp-content/uploads/2019/01/ALERTE-STAGE_Plan-de-travail-1-copie-01.jpg'
                        }
                        title={item.value}
                        text={' Desciption de la mission : ' + item.mission}
                        textCompany={
                            "Nom de l'entreprise : " + item.companyName
                        }
                        hasButton={false}
                        buttonText={'détails'}
                        altImage={'image offre de stage'}
                        typeDeMission={
                            'Type de contrat : ' + item.typeDeMission
                        }
                        duree={'Durée de la mission : ' + item.duree}
                        start={'Date de début : ' + item.start}
                        end={'Date de fin : ' + item.end}
                        contact={'Contact : ' + item.contact}
                        phone={'Téléphone : ' + item.phone}
                        mail={'Email : ' + item.mail}
                        adress={'Lieu : ' + item.adress}
                        postal={item.postal}
                        ville={item.ville}
                        pays={item.pays}
                    />
                </div>
            ))}
        </>
    ) : (
        <> </>
    );
}

export default ContainerInternship;
