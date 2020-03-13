import React from 'react';
import Button from '@material-ui/core/Button';

function ButtonCustom(props : any) {

  return (
    <div>
      {/* type button = text, contained or outlined */}
      {/* value = value  button */}
      <Button variant={props.typeButton}>{props.value}</Button>
    </div>
  );
}

export default ButtonCustom;
