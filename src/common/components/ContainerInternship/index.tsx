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
                <ImageCard
                    image={''}
                    title={item.value}
                    text={item.mission}
                    hasButton={false}
                    buttonText={'fdfd'}
                    altImage={'test'}
                />
            ))}
        </>
    ) : (
        <>'toto' </>
    );
}

export default ContainerInternship;
