import React, { useState } from 'react'; //import de modules en premier
import { createUseStyles } from 'react-jss'; //import de modules en premier
import { useDispatch, useSelector } from 'react-redux'; //import de modules en premier

import { setLocale } from '../../state/actions';
import { setBackgroundColor } from '../../state/actions';
import { getLocale, getBackgroundColor } from '../../state/selectors';

import styles from './style'; //import relatifs en dernier

const ReduxExemple = () => {
    // This hook is used to dispatch actions to the Reducer
    const dispatch = useDispatch();

    /********* To access JSS inside component ***********/
    const useStyles = createUseStyles(styles);
    const classes = useStyles();
    /****************************************************/

    const [color, setColor] = useState([0, 0, 0]);
    const [speed, setSpeed] = useState(1000);
    // We access to the locale stored in the Redux Store with a selector
    const locale = useSelector(getLocale);

    const changeLocale = (locale: string) => {
        // We dispatch an action to the Reducer
        // Here, we are checking if the locale in the Redux store is = to 'en' or 'fr'
        // Then we dispatch the action setLocale(<PAYLOAD>) to the Reducer
        if (locale === 'fr') dispatch(setLocale('en'));
        if (locale === 'en') dispatch(setLocale('fr'));
    };

    const randomBackgroundColor: () => number[] = () => {
        const randomColor = [
            Math.floor(Math.random() * Math.floor(255)),
            Math.floor(Math.random() * Math.floor(255)),
            Math.floor(Math.random() * Math.floor(255)),
        ];
        dispatch(setBackgroundColor(randomColor));
        return randomColor;
    };
    return (
        <>
            <div
                /*Thanks to webpack, React can use the object provided by the const classes
            useStyle(styles) <== styles = style.ts imported at the top of the file */
                className={classes.container}
                style={{
                    backgroundColor: `rgba(${color[0]},${color[1]},${color[2]}, 1.0 )`,
                }}
            >
                <button
                    onClick={e => {
                        e.preventDefault();
                        changeLocale(locale);
                    }}
                >
                    Change locale
                </button>
                <button
                    onClick={e => {
                        e.preventDefault();
                        setInterval(() => {
                            setColor(randomBackgroundColor);
                        }, speed);
                    }}
                >
                    Change Background
                </button>
                <div className={classes.backgroundText}>
                    background set to rgba(
                    {useSelector(getBackgroundColor)})
                </div>
            </div>
            <div className={classes.locale}>
                Locale:&nbsp;{locale.toUpperCase()}
            </div>
        </>
    );
};

export default ReduxExemple;
