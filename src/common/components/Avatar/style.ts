import { createUseStyles } from 'react-jss';

export default createUseStyles({
    avatar: {
        background: '#e5c2dc',
        color: 'rgba(#202020, 0.65)',
    },

    responsive: {
        height: '48px !important',
        width: '48px !important',
        fontSize: 32,
    },

    large: {
        height: '70px !important',
        width: '70px !important',
        fontSize: 76,
        border: '4px solid white',
        boxShadow:
            '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 2px rgba(0, 0, 0, 0.12)',
    },
});
