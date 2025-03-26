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
              <span className='t'>Après le paiement, comment j'accède au pack de formations ?</span>
             
            </span>
           
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq__description'>
          <span>
								Après votre paiement vous recevrez instantanément et de facon automatique dans votre boite mail, un message de 🏆 Félicitations avec un lien à l'interieur. Il vous suffira simplement de cliquer sur ce lien pour accéder à votre dossier de formation et commencer à vous former.
							</span>
          
       
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
             <span className='t'>Les formations sont sous quel format et comment les suivre ?</span>
            
           </span>
          
           </Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography className='faq__description'>
         <span>
								Les formations sont sous formes de vidéos et documents Pdf.

                <br/>
                <br/>
                
								Une fois dans le dossier de formation, vous pouvez suivre vos formations soit directement en ligne, soit télécharger pour regarder hors connexion ou bien mettre dans une clé USB le choix vous revient.
                <br/>
                <br/>
                
								Vous pouvez suivre vos formations à tout moment et depuis n'importe quel appareil "Telephone , ordinateur , tablet ..."								 </span>
         
      
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
              <span className='t'>Il y aura-t-il d&#39;autres frais après paiement ?</span>
             
            </span>
           
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq__description'>
          <span>
								Non, une fois que vous avez acheté la formation vous y avez accès à vie sans plus avoir à dépenser quoi que ce soit.
							</span>
          
        
       
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion 
      
       className='panels'
       expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
  
       >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='panel'
        >
          <Typography component="span" className='titre__content'>
            <span className='titre'>
              <span className='t'>Est-il possible de télécharger ces formations ?</span>
             
            </span>
           
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq__description'>
          <span>
								
          Oui vous avez la possibilité de télécharger ces formations sur vos differents appareils depuis votre dossier de formation.
							
							</span>
            
        
       
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion 
      
      className='panels'
      expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
 
      >
       <AccordionSummary
         expandIcon={<ExpandMoreIcon/>}
         aria-controls="panel1bh-content"
         id="panel1bh-header"
         className='panel'
       >
         <Typography component="span" className='titre__content'>
           <span className='titre'>
             <span className='t'>Puis-je prendre la formation même si je ne suis pas disponible maintenant ?</span>
            
           </span>
          
           </Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography className='faq__description'>
         <span>
               
        
         Oui vous le pouvez car cette formation est accessible à vie et depuis n'importe quel appareil ça veut dire que vous pouvez payer aujourd'hui et même vous former dans 06 mois selon votre disponibilité et à votre rythme que vous soyez sur ordinateur tablette ou téléphone. 
							
             
             </span>
           
       
      
         </Typography>
       </AccordionDetails>
     </Accordion>

      
    </div>
  );
}
