import React from 'react';
import Button from '@material-ui/core/Button';

function ButtonCustom(props : any) {
  let callBack = props.callBack;
  return <Button variant={props.typeButton} onClick={callBack}>{props.valueButton}</Button>;
}

export default ButtonCustom;
