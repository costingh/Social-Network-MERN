import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PeopleIcon from '@material-ui/icons/People';
import {format} from 'timeago.js'
import { styles } from './infoAccordionStyle';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';

function InfoAccordion({classes, contact}) {
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
            <MailOutlineIcon className={classes.icon}/> {contact ? contact.email : 'john.doe@gmail.com'}
          </Typography>
          <Typography className={classes.typography}>
            <PeopleIcon className={classes.icon}/> {`${contact ? contact.followers.length : 0} followers`}
          </Typography>
          <Typography className={classes.typography}>
            <LocationCityIcon className={classes.icon}/> {contact ? (contact.city ? contact.city : 'Unknow') : 'Not available'}
          </Typography>
          <Typography className={classes.typography}>
            <WatchLaterIcon className={classes.icon}/> {contact ? format(contact.createdAt) : '-'}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default withStyles(styles)(InfoAccordion);