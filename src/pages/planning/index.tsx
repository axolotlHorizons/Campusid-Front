import React from 'react';
import styles from './style';
import PlanningComp from '../../common/components/Planning/index';

const Planning = () => {
    const classes = styles();

    return (
        <div className={classes.containerPlanning}>
            <PlanningComp />
        </div>
    );
};

export default Planning;
