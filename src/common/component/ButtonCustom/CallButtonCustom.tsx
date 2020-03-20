/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import ButtonCustom from '.';

function CallButtonCustom(props : any)
{
    var valueBtn = ""

    function SetValue(e : string)
    {
        console.log("On click button")
        valueBtn = e
    }

    return <div>
        <ButtonCustom typeButton="contained" onClick={SetValue(props.value)} valueButton={valueBtn}></ButtonCustom>
    </div>
}

export default CallButtonCustom;
