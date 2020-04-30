import React, { useState } from 'react'; //import de modules en premier
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';

import styles from './style'; //import relatifs en dernier
import { Button, Grid, GridSpacing,Container, Card, Dialog, DialogTitle, List, ListItemAvatar, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        avatar: {
            backgroundColor: blue[100],
            color: blue[600],
        },
    }),
);

const imgInformations = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
        avatar: {
            backgroundColor: blue[100],
            color: blue[600],
        },
    }),
);

export default function ImageAvatars(props:any) {
    const classes = imgInformations();
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const [open, setOpen] = React.useState(false);
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
            avatar: {
                backgroundColor: blue[100],
                color: blue[600],
            },
        }),
    );

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const returnDialog = () => {
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{props.eleve.name} {props.eleve.lastName}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            scolarite@campusid.com
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Fermé
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )};


    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={12}  container justify="center" alignItems="center" >
                    <Paper className={classes.root} style={{boxShadow: "none"}}> <Avatar alt="Etudiant CampusID" src={props.eleve.img} className={classes.large}/> </Paper>
                </Grid>
                <Grid item xs={12}  container justify="center" alignItems="center">
                    <Paper className={classes.root} style={{boxShadow: "none"}}>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <ListItem>
                                <ListItemText style={{marginRight: "4px"}} primary={props.eleve.name} />
                                <ListItemText primary={props.eleve.lastName} />
                            </ListItem>
                            <Button variant="contained" color="primary" disableElevation onClick={handleClickOpen}
                            >
                                Message
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>


            </React.Fragment>

        );
    }

    return (
        <div className={classes.root} style={{width: "250px"}}>
            <Card>
                <Grid container spacing={0}>
                    <FormRow />
                </Grid>
            </Card>
            {returnDialog()}
        </div>

    );




}

