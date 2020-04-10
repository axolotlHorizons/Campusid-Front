import React, { useState } from 'react'; //import de modules en premier
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './style'; //import relatifs en dernier
import { Button, Grid, GridSpacing, Container } from '@material-ui/core';

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
    })
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
    })
);

export default function ImageAvatars() {
    const classes = imgInformations();
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
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
        })
    );

    function FormRow() {
        return (
            <React.Fragment>
                <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Paper className={classes.root}>
                        {' '}
                        <Avatar
                            alt="Etudiant CampusID"
                            src="https://www.nautiljon.com/images/manga_persos/00/57/guts_175.jpg"
                            className={classes.large}
                        />{' '}
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Paper className={classes.root}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <ListItem button>
                                <ListItemText primary="Leguman Patate" />
                            </ListItem>
                            <Button
                                variant="contained"
                                color="primary"
                                disableElevation
                            >
                                Message
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Paper className={classes.root}>
                        {' '}
                        <Avatar
                            alt="Etudiant CampusID"
                            src="https://www.nautiljon.com/images/manga_persos/00/57/guts_175.jpg"
                            className={classes.large}
                        />{' '}
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                    alignItems="center"
                >
                    <Paper className={classes.root}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <ListItem button>
                                <ListItemText primary="Leguman Patate" />
                            </ListItem>
                            <Button
                                variant="contained"
                                color="primary"
                                disableElevation
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
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={6} spacing={1}>
                    <FormRow />
                </Grid>
                <Grid container item xs={6} spacing={1}>
                    <FormRow />
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid container item xs={6} spacing={1}>
                    <FormRow />
                </Grid>
                <Grid container item xs={6} spacing={1}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}
