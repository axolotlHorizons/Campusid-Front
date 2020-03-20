import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

type Props = {
    title: string;
    text: string;
    type : string;
    // image: string;
    hasButton: boolean;
    // buttonText: string;
};


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
export default function CustomInput() {
  
  const classes = useStyles();

  //  const useStyles = createUseStyles(styles);
  //  const classes: Record<string, string> = useStyles();

//     const handleClick = () => {
//         alert('Button clicked ');
//     };

   //const { image, title,type, hasButton, text = '' } = props;




  return (
    <form className={classes.root} noValidate autoComplete="off">
     
      <div className="inputText">
        <TextField
          required
          id="outlined-required"
          label="CustomInput"
          defaultValue="valeur par défaut"
          variant="outlined"
        />
      </div>
    </form>
  );
}



