import { createUseStyles } from 'react-jss';
import { transparent } from 'material-ui/styles/colors';

export default createUseStyles({
    container: {
    },
    toolbar: {
        backgroundColor: "#2d3246",
        paddingLeft: "10px !important"
    },
    uselessIcons: {
        width: "100%",
        display: "flex",
        marginLeft: "5%"
    },
    MuiMenuPaper: {
      width: "450px !important",
      height: "450px !important"
    },
    logoCampus: {
      height: "50px",
      width: "237px",
      backgroundPosition: "top !important"
    },
    marginAuto: {
        margin: 'auto'
    },
    menuButton: {},
    title: {},
    profileIcon: {
        position: 'absolute',
        right: 0,
        color: "white"
    },
    userName: {
        display: 'inline-block',
        color: "white"
    },
    containerLogin: {

    '& .MuiButtonBase-root': {
        backgroundColor: 'transparent',
        color: 'White',
        borderRadius: '0px',
        margin: 'auto',
        padding:'20px',
        width: '250px',
        textAlign: 'center',
        textTransform: 'uppercase',
        alignSelf: 'center',
    },
},
    
});
