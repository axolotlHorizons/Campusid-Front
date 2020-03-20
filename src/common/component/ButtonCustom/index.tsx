import React from 'react';
import Button from '@material-ui/core/Button';

function ButtonCustom(props : any) {  
  return (<Button variant={props.typeButton}>{props.valueButton}</Button>);
}

export default ButtonCustom;
