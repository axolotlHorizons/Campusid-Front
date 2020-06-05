import { createUseStyles } from 'react-jss';

export default createUseStyles({
    container: {
        height: '100%',
        maxWidth: 240,
        backgroundColor: 'Firebrick',
        color: 'white',
    },
    link: {
        textDecoration: 'none',
        color: '#FFF',
    },
    label: {
        marginLeft: '12px !important',
    },
    '& .MuiListItem-divider' : {
        borderBottom: "1px solid #EDEDED !important"
    }
});
