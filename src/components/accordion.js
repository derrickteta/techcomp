import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height:'100%',
  },
 
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><b>listes unités</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul Style="list-style:none; text-align:left;">
            <li Style=" margin-bottom:5%;">pédiatrie <button Style="border:none; background-color:transparent;position:absolute;right:0"> <i class="fa fa-trash"></i></button> </li>
            <li Style="margin-bottom:5%;">soins intensif <button Style="border:none; background-color:transparent;position:absolute;right:0"> <i class="fa fa-trash"></i></button> </li>
            <li Style="margin-bottom:5%;">soins intensif <button Style="border:none; background-color:transparent;position:absolute;right:0"> <i class="fa fa-trash"></i></button> </li>
        </ul>  
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><b>listes équipements</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul Style="list-style:none; text-align:left;">
            <li Style="margin-bottom:5%;">oxygen bottle<button Style=" border:none; background-color:transparent;position:absolute;right:0"> <i class="fa fa-trash"></i></button> </li>
            <li Style="margin-bottom:5%;">seringue automatique <button Style="border:none; background-color:transparent; position:absolute;right:0"> <i class="fa fa-trash"></i></button> </li>
            <li Style="margin-bottom:5%;">seringue minutieuse <button Style=" border:none; background-color:transparent;position:absolute;right:0"> <i class="fa fa-trash"></i></button> </li>
        </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
