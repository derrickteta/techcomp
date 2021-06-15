import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Buttons() {
  const classes = useStyles();

  return (
    <div className={classes.root} Style="position:absolute; right:1%; top:1%; margin-bottom:2%;">
      <Button variant="contained">ADD Service</Button>
    </div>
  );
}