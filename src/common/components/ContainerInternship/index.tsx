import React, { useState, useEffect } from 'react';
import ImageCard from '../Card/ImageCard/index';
import styles from './style';
import { getInternship } from '../../../api/index';

function ContainerInternship(props: any) {
    const [test, setTest] = useState([]);

    let toto: any = [];

    useEffect(() => {
        getInternship().then((res: any) => {
            Object.entries(res).forEach(function(internship: any, index: any) {
                toto.push({
                    mission: internship[1].missionSummary,
                    value: internship[1].title,
                    companyName: internship[1].companyName,
                });
            });
            setTest(toto);
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
                        text={item.mission}
                        textCompany={item.companyName}
                        hasButton={false}
                        buttonText={'détails'}
                        altImage={'image offre de stage'}
                    />
                </div>
            ))}
        </>
    ) : (
        <> </>
    );
}

export default ContainerInternship;
