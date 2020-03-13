import React, { useState } from 'react'; //import de modules en premier
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './style'; //import relatifs en dernier

function Accordeon(props : any) {
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>{props.matiere}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        {props.note}
                    </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                    <Typography>
                        {props.note}
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography className={classes.heading}>{props.matiere}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        {props.note}
                    </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                    <Typography>
                        {props.note}
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                    <Typography className={classes.heading}>{props.matiere}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        {props.note}
                    </Typography>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails>
                    <Typography>
                        {props.note}
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </>
    );
};

export default Accordeon;
