import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '@storybook/addon-knobs/register'; 



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }),
);

export default function CustomInput(props : any) {
  let type = props.type;
  let label = props.name;
  let callBack = props.callBack;
  const classes = useStyles();
  return (
    <div>
     
      <div className="inputText">
        <TextField
          required
          id="outlined-required"
          label={label}
          defaultValue="valeur par défaut"
          variant="outlined"
          size="small"
          type={type}
          onChange={(value) => callBack(value)}
        />
      </div>

    </div>


    
  );
}



