import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  body: {
    background: 'linear-gradient(#DDDDDD, #EEEEEE)',
    display: 'table',
    height: '66vh'
  },
  inner: {
    display: 'table-cell',
    verticalAlign: 'middle'
  }
}));

export interface Props {
  caption: React.ReactNode;
  details: React.ReactNode;
}

const FC: React.FC<Props> = ({ caption, details }) => {
  const classes = useStyles();
  const children = (Array.isArray(details) ? details : [details]).map(
    detail => (
      <Typography
        variant="subtitle1"
        align="center"
        color="textPrimary"
        paragraph
      >
        {detail}
      </Typography>
    )
  );

  return (
    <Container className={classes.body} maxWidth={false}>
      <div className={classes.inner}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {caption}
        </Typography>
        {children}
      </div>
    </Container>
  );
};
FC.displayName = 'Hero';

export default FC;