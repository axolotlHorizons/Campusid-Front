import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomInput from "../../common/component/CustomInput";
import ButtonCustom from "../../common/components/ButtonCustom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


export default function FormDialog() {
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        //setOpen(false);
    };

    const callBackButton = (event: any) => {
        console.log('event');
        console.log(event);
    };

    const inputMailComputed = (value : any) => {
        console.log("Value ID : ");
        console.log(value.target.value);
    };

    const inputPasswordComputed = (value : any) => {
        console.log("value Password : ");
        console.log(value.target.value);
    };
    
    return (
        <div >
            <Dialog style={{backgroundImage: "url('https://thumbs.gfycat.com/NeedyFalseGosling-size_restricted.gif')", backgroundSize: "cover"}} open={open} onClose={handleClose} PaperProps={{style: {backgroundColor: '#870D0D', boxShadow: 'none',}, }} aria-labelledby="form-dialog-title">
                <DialogTitle style={{textAlign:"center",backgroundColor: 'white'}} id="form-dialog-title" >Connexion</DialogTitle>
                <DialogContent>
                    <CustomInput
                        id ="outlined-required"
                        variant ="outlined"
                        name="N°IDBoard"
                        type="ID"
                        style ={{ margin: 20, backgroundColor: 'white'}}
                        size="medium"
                        callBack={inputMailComputed}
                        hasIcon={false}
                    />
                
                    <CustomInput
                         id ="outlined-required"
                         variant ="outlined"
                        name="Mot de passe"
                        type="password"
                        style ={{ margin: 20, backgroundColor: 'white'}}
                        size ="medium"
                        callBack={inputPasswordComputed}
                        hasIcon={false}
                    />
                </DialogContent>
                <FormControlLabel  value="Save"
                control={<Radio />}                         
                style ={{ margin: 20,  backgroundColor: '870D0D'}}
                label="Se souvenir de moi"
                />

                <DialogActions style={{display: 'flex'}}>
                    <Link to="/index" style={{textDecoration: "none" }}>
                        <div style ={{ margin:"auto", backgroundColor: 'white'  }} >
                            <ButtonCustom
                            callBack={callBackButton}
                            typeButton="contained"
                            valueButton="Se connecter"
                             />
                        </div>
                    </Link>
                </DialogActions>
                </Dialog>
            </div>
        );


      
    }
