'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import '../../style/modules.scss';


export default function Faq() {

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className='faq__Group'>
      <Accordion 
      
       className='panels'
       expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
  
       >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='panel'
        >
          <Typography component="span" className='titre__content'>
            <span className='titre'>
              <span className='t'>Introduction</span>
             
            </span>
           
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
      <Accordion 
      
      className='panels'
      expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
 
      >
       <AccordionSummary
         expandIcon={<ExpandMoreIcon/>}
         aria-controls="panel1bh-content"
         id="panel1bh-header"
         className='panel'
       >
         <Typography component="span" className='titre__content'>
           <span className='titre'>
             <span className='t'>Introduction</span>
            
           </span>
          
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

     <Accordion 
      
       className='panels'
       expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
  
       >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='panel'
        >
          <Typography component="span" className='titre__content'>
            <span className='titre'>
              <span className='t'>Introduction</span>
             
            </span>
           
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
