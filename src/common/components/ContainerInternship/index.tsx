import React, { useState, useEffect } from 'react';
import ImageCard from '../Card/ImageCard/index';
import styles from './style';

function ContainerInternship(props: any) {
    const [internships, setInternships] = useState([]);
    useEffect(() => {
        setInternships(props.internship);
    }, [props.internship]);

    const classes = styles();
    return (
        <div>
            {internships.map((internship: any, index: any) => {
                return (
                    <div className="containerInternship" key={index}>
                        <ImageCard
                            image={internship.image}
                            title={internship.title}
                            text={internship.text}
                            hasButton={internship.hashButton}
                            buttonText={internship.buttonText}
                            altImage={internship.altImage}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default ContainerInternship;
