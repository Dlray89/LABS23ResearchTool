import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: "white",
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel style={{background: "linear-gradient(to right, #4b6cb7, #182848)", color:"white", margin:"2% auto"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon  style={{color:"white"}} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Mission Control</Typography>
          <Typography className={classes.secondaryHeading}>Vision</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
               
                        Commercial airline pilots require a carefully designed interface to monitor and control the complex machinery that allow modern aircraft to safely navigate the globe. This interface provides the information pilots need, when they need it, in order to keep the aircraft flying safely. <br /> <br />

Behind this interface, aircraft systems are heavily automated, with sensors ingesting data and driving precise changes to various systems to relieve the human pilots of the thousands of adjustments that need to be made every minute to keep the aircraft stable. <br /> <br />

Much like the operation of a modern aircraft, Lambda Labs is a fast paced, constantly changing and evolving environment. The Labs Cycle, while routine at a high level, is filled with many detailed actions that need to be executed efficiently and accurately to keep the program running smoothly. In addition, there are many different inputs that require attention, but relatively few human pilots to respond. <br /> <br />

The Lambda Labs Control Plane is a system for allowing a small number Labs Staff to run Labs smoothly even when faced with a complexity and scale. Much like the systems in a modern aircraft, the Lambda Labs Control Plane is made up of a user interface, sensors and an automation system.<br /> <br />

The cockpit of a modern aircraft has an interface that is carefully designed to provide just enough real-time information to pilots so they can focus on the most critical aspects of controlling the aircraft. Too little information, too much information or the wrong information at the wrong time are all crucial design considerations that can affect a pilot's ability to control the complex machinery.<br /> <br />

Mission Control is the Lambda Labs equivalent of an aircraft cockpit user interface. It provides a heads up view of the critical information Labs Staff needs to keep the Labs Cycle rolling ahead smoothly. Mission Control also provides the necessary input mechanisms to allow Labs Staff to control the Labs Cycle as it progresses from Labs Kickoff (takeoff) to Labs Demo Day (landing).
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
      
     
    </div>
  );
}