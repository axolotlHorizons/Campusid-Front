import React from 'react'
import './style.ts'


export default function CustomInput({ value, onChange }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="search"
      value={value}
      onChange={onChange}
    />
  )
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200
      }
    }
  })
);

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}