import React from 'react';
import NuclearExplosionLogo from './static/Nuclear_Explosion.svg';

import styles from './style';

const ErrorPage = () => {
    const classes = styles();
    return (
        <div className={classes.container}>
            <div>
                <img src={NuclearExplosionLogo} alt="NuclearExplosion" />
                <h1 className={classes.errorText}>ERREUR 404</h1>
            </div>
        </div>
    );
};

export default ErrorPage;
