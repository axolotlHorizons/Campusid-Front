import React, { useState } from 'react'; //import de modules en premier
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


import styles from './style'; //import relatifs en dernier
import { Button } from '@material-ui/core';

  
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
  }),
);

export default function ImageAvatars() {
  const classes = imgInformations();

  return (
    <div className={classes.root}>
      <Avatar alt="Etudiant CampusID" src="https://www.nautiljon.com/images/manga_persos/00/57/guts_175.jpg" className={classes.large} />
      <Button variant="contained" color="primary" disableElevation>
        Message
      </Button>
    </div>
  );
}

