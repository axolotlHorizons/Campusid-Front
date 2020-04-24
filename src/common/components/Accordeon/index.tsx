import React, { useState } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './style';
import { Card, ExpansionPanelActions, Button, Divider, CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import CustomInput from '../CustomInput';

function Accordeon(props: any) {
    const classes = useStyles();
    let matieres = props.matieres;

    const [getMatieres, setMatieres] = useState(matieres.filter((matiere: any) => matiere.name !== ""));
    const matiereInProgress = matieres.map((matiere: any) => matiere.valid === undefined).length;
    const matiereValidation = matieres.map((matiere: any) => matiere.valid === true).length;
    const matiereCancelled = matieres.map((matiere: any) => matiere.valid === false).length;
    const getColorTypo = (matiere : any) => {
            return matiere.valid === true ? "primary" : matiere.valid === false ? "error" : "inherit";
    };
    const getBackgroundHeading = (matiere : any) => {
        return matiere.valid === true ? classes.backgroundValid : matiere.valid === false ? classes.backgroundInvalid : classes.heading;
    };
    const getClassOfNote = (note : any) => {
            return note.note >= 10 ? classes.details + " " + classes.backgroundValid : note.note < 10 ? classes.details + " " + classes.backgroundInvalid : classes.details;
    };
    let filtreText = (arr: any, requete: any) => {
        return arr.filter(function (el: any) {
            return el.name.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
        })
    };

    let inputComputed = (value: any) => {
        let name = value.target.value;
        if (name !== "")
            setMatieres(filtreText(matieres, name));
        else
            setMatieres(matieres.filter((matiere: any) => matiere.name !== ""))
    };

    return (
        <>
            <div className={classes.root}>
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent>
                            <Typography component="h6" variant="h6">
                                En cours de validation : {matiereInProgress}
                            </Typography>
                            <Typography component="h6" variant="h6">
                                Validé : {matiereValidation}
                            </Typography>
                            <Typography component="h6" variant="h6">
                                Echoué : {matiereCancelled}
                            </Typography>
                            <Typography component="h6" variant="h6">
                                Crédit obtenu : 45
                            </Typography>
                            <CustomInput
                                id="outlined-required"
                                //variant="outlined"
                                type="text"
                                style={{ margin: 20 }}
                                size="medium"
                                color="secondary"
                                placeholder="text"
                                hasIcon={true}
                                callBack={inputComputed}
                                name="Matiére"
                            />
                        </CardContent>
                    </div>
                </Card>

                {getMatieres.map(function(matiere: any, index: any) {
                    return (
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className={getBackgroundHeading(matiere)}
                            >
                                <div className={classes.column} style={{marginRight: "15px"}}>
                                    <CardMedia
                                        className={classes.logo}
                                        image={matiere.icon}
                                        title="Campus ID"
                                    />
                                </div>
                                <div className={classes.column + " " + classes.marginCenterY}>
                                    <strong>{matiere.name}</strong>
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
                                                        Date : <strong>24/04/2020</strong>
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
