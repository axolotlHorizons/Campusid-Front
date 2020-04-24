import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './style';
import { Card, ExpansionPanelActions, Button, Divider } from '@material-ui/core';
import { CardContent } from '@material-ui/core';

function Accordeon(props: any) {
    const classes = useStyles();
    let matieres = props.matieres;
    const getColorTypo = (matiere : any) => {
            return matiere.valid === true ? "primary" : matiere.valid === false ? "error" : "inherit";
    };
    const getBackgroundHeading = (matiere : any) => {
        return matiere.valid === true ? classes.backgroundValid : matiere.valid === false ? classes.backgroundInvalid : classes.heading;
    };
    const getClassOfNote = (note : any) => {
            return note.note >= 10 ? classes.details + " " + classes.backgroundValid : note.note < 10 ? classes.details + " " + classes.backgroundInvalid : classes.details;
    };

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
                                className={getBackgroundHeading(matiere)}
                            >
                                <div className={classes.details}>
                                    <Typography component="h6" variant="h6">
                                        <strong>{matiere.name} {matiere.icon}</strong>
                                    </Typography>
                                    <Typography component="h6" variant="h6">
                                        ECTS : <strong>{matiere.credit}</strong>
                                    </Typography>
                                </div>
                            </ExpansionPanelSummary>

                            {matiere.results.map(function(
                                note: any,
                                indexB: any
                            ) {
                                return (
                                    <ExpansionPanelDetails>
                                        <Card className={classes.root}>
                                            <div className={classes.details}>
                                                <CardContent className={getClassOfNote(note)} >
                                                    <Typography component="h6" variant="h6">
                                                        {note.name} / {note.type}
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        Note : <strong>{note.note}</strong>
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        Coef : <strong>{note.coeficient}</strong>
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        Moyenne de la classe : <strong>{note.moyenneClasse}</strong>
                                                    </Typography>
                                                    <Typography variant="subtitle1">
                                                        Commentaire : <strong>{note.commentaire}</strong>
                                                    </Typography>
                                                </CardContent>
                                            </div>
                                        </Card>
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
