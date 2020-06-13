import React from 'react';
import Button from '@material-ui/core/Button';

function ButtonCustom(props : any) {
  let callBack = props.callBack;
  let icon = props.icon;

  return (<div>{ icon == null ? (<Button variant={props.typeButton} onClick={callBack}>{props.valueButton}</Button>) : 
  (<Button variant={props.typeButton} startIcon={props.icon} onClick={callBack}>{props.valueButton}</Button>)}</div>);

}

export default ButtonCustom;
