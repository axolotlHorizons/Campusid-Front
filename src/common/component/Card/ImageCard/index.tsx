import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createUseStyles } from 'react-jss';
import styles from './style';

type Props = {
    title: string;
    text: string;
    image: string;
    hasButton: boolean;
    buttonText: string;
};

export default function ImageCard(props: Props) {
    const useStyles = createUseStyles(styles);
    const classes: Record<string, string> = useStyles();

    const handleClick = () => {
        alert('Button clicked ! :D');
    };

    const { image, title, hasButton, buttonText, text = '' } = props;

    return (
        <Card classes={{ root: classes.customCard }}>
            <CardContent>
                <Typography variant="h3">{title}</Typography>
            </CardContent>

            <div className={classes.imgContainer}>
                <img src={image}></img>
            </div>

            <hr className={classes.hrStyle} />

            <span>{text}</span>

            {hasButton ? (
                <CardActions>
                    <Button
                        classes={{ text: classes.btn }}
                        size="small"
                        onClick={handleClick}
                    >
                        {buttonText}
                    </Button>
                </CardActions>
            ) : (
                ''
            )}
        </Card>
    );
}
