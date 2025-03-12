
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../style/modules.scss';

export default function Modules() {
  return (
    <div>
      <Accordion defaultExpanded className='panels'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='panel'
        >
          <Typography component="span" className='titre__content'>
            <span className='titre'>Module 1 : Les bases incontournables d&#39;Excel</span>

            <span className="time">
                <AccessAlarmIcon/>
                <span>2 Heures</span>
            </span>
            
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='module__description'>
          <span>Dans ce module , vous allez apprendre : </span>
            <ul>
                <li>Les bases d&#39;Excel</li>
                <li>Les formules de base</li>
                <li>Les raccourcis clavier</li>
                <li>Les astuces pour gagner du temps</li>
            </ul>    
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className='panels'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='panel'
        >
          <Typography component="span" className='titre__content'>
            <span className='titre'>Module 1 : Les bases incontournables d&#39;Excel</span>

            <span className="time">
                <AccessAlarmIcon/>
                <span>2 Heures</span>
            </span>
            
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='module__description'>
          <span>Dans ce module , vous allez apprendre : </span>
            <ul>
                <li>Les bases d&#39;Excel</li>
                <li>Les formules de base</li>
                <li>Les raccourcis clavier</li>
                <li>Les astuces pour gagner du temps</li>
            </ul>    
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className='panels'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='panel'
        >
          <Typography component="span" className='titre__content'>
            <span className='titre'>Module 1 : Les bases incontournables d&#39;Excel</span>

            <span className="time">
                <AccessAlarmIcon/>
                <span>2 Heures</span>
            </span>
            
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='module__description'>
          <span>Dans ce module , vous allez apprendre : </span>
            <ul>
                <li>Les bases d&#39;Excel</li>
                <li>Les formules de base</li>
                <li>Les raccourcis clavier</li>
                <li>Les astuces pour gagner du temps</li>
            </ul>    
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className='panels'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='panel'
        >
          <Typography component="span" className='titre__content'>
            <span className='titre'>Module 1 : Les bases incontournables d&#39;Excel</span>

            <span className="time">
                <AccessAlarmIcon/>
                <span>2 Heures</span>
            </span>
            
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='module__description'>
          <span>Dans ce module , vous allez apprendre : </span>
            <ul>
                <li>Les bases d&#39;Excel</li>
                <li>Les formules de base</li>
                <li>Les raccourcis clavier</li>
                <li>Les astuces pour gagner du temps</li>
            </ul>    
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className='panels'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className='panel'
        >
          <Typography component="span" className='titre__content'>
            <span className='titre'>Module 1 : Les bases incontournables d&#39;Excel</span>

            <span className="time">
                <AccessAlarmIcon/>
                <span>2 Heures</span>
            </span>
            
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='module__description'>
          <span>Dans ce module , vous allez apprendre : </span>
            <ul>
                <li>Les bases d&#39;Excel</li>
                <li>Les formules de base</li>
                <li>Les raccourcis clavier</li>
                <li>Les astuces pour gagner du temps</li>
            </ul>    
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
