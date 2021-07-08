import React, {useState} from 'react';

import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

const styles = ({
  root: {
    width: '100%',
    borderRadius: '10px',
  },
  header: {
    background: '#1b2439',
    color: '#cdd1d9',
  },
  inner: {
    background: '#1b2439',
    color: '#a4a7b3',
    display: 'block'
  },
  heading: {
    fontSize: '17px',
    fontWeight: 400,
  },
  typography: {
    display: 'flex',
    width: '100%',
    marginBottom: '18px',
    fontSize: '17px',
  },
  icon: {
    marginRight: '15px',
    color: '#888',
    fontSize: '17px',
  },
  expandIcon: {
    color: '#cdd1d9',
  }
});

function InfoAccordion({classes}) {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.header}
        >
          <Typography className={classes.heading}>Personal Information</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.inner}>
          <Typography className={classes.typography}>
            <MailOutlineIcon className={classes.icon}/> john.doe@gmail.com
          </Typography>
          <Typography className={classes.typography}>
            <PhoneIcon className={classes.icon}/> +1 (786) 903 - 7331
          </Typography>
          <Typography className={classes.typography}>
            <WatchLaterIcon className={classes.icon}/> 04.05.2020
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default withStyles(styles)(InfoAccordion);