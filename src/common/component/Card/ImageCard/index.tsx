import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type Props = {
    title: string;
    text: string;
    image: string;
    hasButton: boolean;
    buttonText: string;
    altImage: string;
};

export default function ImageCard(props: Props) {
    const handleClick = () => {
        alert('Button clicked ! :D');
    };

    const { image, title, hasButton, buttonText, altImage, text = '' } = props;

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            content: {
                padding: theme.spacing(2),
                margin: '0',
            },
            img: {
                margin: 'auto',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
            },

            buttonContainer: {
                alignSelf: 'flex-end',
            },
        })
    );

    const classes = useStyles();

    return (
        <Card>
            <Grid container direction="row">
                <Grid item container justify="center" md={4} xs={12}>
                    <img
                        className={classes.img}
                        src={image}
                        alt={altImage}
                    ></img>
                </Grid>

                <Grid item md={6} xs={12} className={classes.content}>
                    <CardContent>
                        <Typography variant="h5">{title}</Typography>
                    </CardContent>

                    <span>{text}</span>
                </Grid>
                {hasButton ? (
                    <Grid
                        className={classes.buttonContainer}
                        item
                        md={2}
                        xs={12}
                    >
                        <CardActions>
                            <Button
                                size="medium"
                                onClick={handleClick}
                                variant="outlined"
                                color="secondary"
                            >
                                {buttonText}
                            </Button>
                        </CardActions>
                    </Grid>
                ) : null}
            </Grid>
        </Card>
    );
}
