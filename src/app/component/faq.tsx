'use client';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../style/modules.scss';


export default function Faq() {
  return (
    <div className='faq__Group'>
      <Accordion defaultExpanded className='panels'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
          className='panel'
        >
          <Typography component="span" className='titre__content'>
            <span className='titre'>Module 1 : Les bases incontournables d&#39;Excel</span>
            
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq__description'>
          <span>Dans ce module , vous allez apprendre : </span>
          
          
                <li>Les bases d&#39;Excel</li>
                <li>Les formules de base</li>
                <li>Les raccourcis clavier</li>
                <li>Les astuces pour gagner du temps</li>
       
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
            
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq__description'>
          <span>Dans ce module , vous allez apprendre : </span>
          
           
                <li>Les bases d&#39;Excel</li>
                <li>Les formules de base</li>
                <li>Les raccourcis clavier</li>
                <li>Les astuces pour gagner du temps</li>
            
      
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
            
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq__description'>
          <span>Dans ce module , vous allez apprendre : </span>
        
           
                <li>Les bases d&#39;Excel</li>
                <li>Les formules de base</li>
                <li>Les raccourcis clavier</li>
                <li>Les astuces pour gagner du temps</li>
            
             
          </Typography>
        </AccordionDetails>
      </Accordion>

      
    </div>
  );
}
