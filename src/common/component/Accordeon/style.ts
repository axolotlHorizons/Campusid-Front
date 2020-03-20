import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import CSS from 'csstype';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: '75%',
      },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
  }),
);

export default useStyles;