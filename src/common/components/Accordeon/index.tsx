import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './style';

function Accordeon(props: any) {
    const classes = useStyles();
    let matieres = props.matieres;
    return (
        <>
            <div className={classes.root}>
                {matieres.map(function(matiere: any, index: any) {
                    return (
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>
                                    {matiere.name} {matiere.icon}{' '}
                                    {matiere.credit}
                                </Typography>
                            </ExpansionPanelSummary>

                            {matiere.results.map(function(
                                note: any,
                                indexB: any
                            ) {
                                return (
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            {note.name} {note.type}{' '}
                                            {note.coeficient} {note.note}{' '}
                                            {note.moyenneClasse}{' '}
                                            {note.commentaire}
                                        </Typography>
                                    </ExpansionPanelDetails>
                                );
                            })}
                        </ExpansionPanel>
                    );
                })}
            </div>
        </>
    );
}

export default Accordeon;
