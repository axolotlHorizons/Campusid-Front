import React from 'react';
import Button from '@material-ui/core/Button';

function ButtonCustom(props: any) {
    const { disabled, callBack } = props;
    return (
        <Button
            variant={props.typeButton}
            onClick={callBack}
            disabled={disabled}
        >
            {props.valueButton}
        </Button>
    );
}

export default ButtonCustom;
