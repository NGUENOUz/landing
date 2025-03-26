'use client';

import * as React from 'react';
import Image from 'next/image';
import logoWord from '../../images/logoWords.png';
import logoExcel from '../../images/logoExcel.png';
import logoPowerpoint from '../../images/logoPowerPoint.png';
import logoOutlook from '../../images/logoOutlook.jpg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';


import '../../style/modules.scss';

export default function ModulesFormations() {

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
             <div className="Items">
              <span >
                <Image src={logoWord} alt="" className='moduleImage'/>
              </span>
             <span className='titre'>
              <span className='t'>📌 Module 1 :  Microsoft Word</span>
              <span className='time'>
                <AlarmAddIcon className='iconTime'/>
                <span> 6Heures | 10 vidéos</span>
              </span>
            </span>
             </div>
            {/* <span className='number'>Module 1</span> */}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq__description'>
        
          <h3>Apprenez à créer des documents professionnels avec Microsoft Word. De la mise en page avancée aux fonctionnalités de collaboration, ce module vous aidera à produire des documents structurés et efficaces.</h3>
          <br />
          <br />
          <span>✅ Contenu du module :</span>
                <li><b>Prise en main de Word :</b> Interface, ruban, raccourcis essentiels</li>
                <li><b>Mise en page et formatage :</b>Styles, alignements, interlignes, colonnes</li>
                <li><b>Gestion des documents :</b>Enregistrement, exportation et compatibilité</li>
                <li><b>Insertion d&#39;éléments :</b>Images, tableaux, graphiques, zones de texte</li>
                <li><b>Utilisation des styles et modèles :</b>Création de documents uniformes et professionnels</li>
                <li><b>Travail collaboratif :</b>Commentaires, suivi des modifications, partage de documents</li>
                <li><b>Table des matières et références :</b> Insertion automatique de sommaires, notes de bas de page, citations</li>
                <li><b>Automatisation avec les macros :</b>  Gagnez du temps en automatisant des tâches répétitives</li>
                <li><b>Sécurité et protection des documents :</b>  Protection par mot de passe, gestion des droits d'accès

</li>
       
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
            <div className="Items">
             <span >
               <Image src={logoExcel} alt="" className='moduleImage'/>
             </span>
            <span className='titre'>
             <span className='t'>📌 Module 2 :  Microsoft Excel</span>
             <span className='time'>
               <AlarmAddIcon className='iconTime'/>
               <span> 12Heures | 24 vidéos</span>
             </span>
           </span>
            </div>
           {/* <span className='number'>Module 1</span> */}
           </Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography className='faq__description'>
       
         <h3>Ce que vous allez apprendre dans ce module : <br/>
         Découvrez comment analyser, organiser et visualiser des données avec Excel. Ce module vous donne les clés pour travailler efficacement avec des feuilles de calcul et automatiser vos tâches.</h3>
         <br />
         <br />
         <span>✅ Contenu du module :</span>
               <li><b>Prise en main d&#39;Excel : </b> Interface, feuilles, cellules, raccourcis</li>
               <li><b>Saisie et gestion des données :  </b>Format des cellules, tri et filtrage</li>
               <li><b> Formules et fonctions essentielles : </b>SOMME, MOYENNE, SI, RECHERCHEV, INDEX, EQUIV</li>
               <li><b> Mise en forme conditionnelle :  </b>Mettre en valeur les données importantes</li>
               <li><b>Création de tableaux croisés dynamiques : </b>Analyse de grandes quantités de données</li>
               <li><b>Graphiques et visualisation des données : </b>Diagrammes, courbes, histogrammes</li>
               <li><b>Automatisation avec les macros et VBA : </b> Insertion automatique de sommaires, notes de bas de page, citations</li>
               <li><b>Automatisation avec les macros :</b>  Gagnez du temps sur les tâches répétitives</li>
               <li><b>Protection et partage des fichiers : </b>Sécuriser vos données et collaborer en ligne</li>
      
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
             <div className="Items">
              <span >
                <Image src={logoPowerpoint} alt="" className='moduleImage'/>
              </span>
             <span className='titre'>
              <span className='t'>📌 Module 3: Maîtriser Power Point</span>
              <span className='time'>
                <AlarmAddIcon className='iconTime'/>
                <span> 4Heures | 10 vidéos</span>
              </span>
            </span>
             </div>
            {/* <span className='number'>Module 1</span> */}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='faq__description'>
        
          <h3>Ce que vous allez apprendre dans ce module :<br/>
          Apprenez à concevoir des présentations dynamiques et impactantes avec PowerPoint. Maîtrisez les outils de mise en forme, d’animation et de storytelling visuel pour captiver votre audience.</h3>
          <br />
          <br />
          <span>✅ Contenu du module :</span>
                <li><b>Découverte de PowerPoint :</b> Interface et navigation</li>
                <li><b>Création de diapositives efficaces :</b>Organisation des contenus et hiérarchie visuelle</li>
                <li><b>Mise en forme et design : </b>Thèmes, couleurs, typographies, modèles prédéfinis</li>
                <li><b>Ajout d&#39;éléments visuels :</b>Images, tableaux, graphiques, zones de texte</li>
                <li><b>Animations et transitions :</b>Dynamiser vos présentations</li>
                <li><b>Gestion du diaporama : </b>Mode présentateur, minutage et répétition</li>
                <li><b>Techniques de storytelling visuel : </b> Structurer un discours convaincant</li>
                <li><b> Exportation et partage : </b>  Conversion en PDF, vidéo, partage en ligne</li>
                <li> Astuces pour des présentations mémorables</li>
       
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
            <div className="Items">
             <span >
               <Image src={logoOutlook} alt="" className='moduleImage'/>
             </span>
            <span className='titre'>
             <span className='t'>📌 Module 4 : Maîtriser OutLook</span>
             <span className='time'>
               <AlarmAddIcon className='iconTime'/>
               <span>5Heures | 10 vidéos</span>
             </span>
           </span>
            </div>
           {/* <span className='number'>Module 1</span> */}
           </Typography>
       </AccordionSummary>
       <AccordionDetails>
         <Typography className='faq__description'>
       
         <h3>Ce que vous allez apprendre dans ce module :<br/>
         Optimisez votre communication et votre organisation avec Outlook. Apprenez à gérer vos e-mails, votre calendrier et vos contacts de manière professionnelle.</h3>
         <br />
         <br />
         <span>✅ Contenu du module :</span>
               <li><b>Découverte de ls&#39;interface Outlook : </b> Navigation, dossiers, affichages</li>
               <li><b>Gestion des e-mails :</b>Envoi, réception, pièces jointes, signatures automatiques</li>
               <li><b>Organisation des messages : </b> Catégorisation, règles, filtres, archivage</li>
               <li><b>Planification et gestion du calendrier :</b>Création de rendez-vous, rappels, invitations</li>
               <li><b>Gestion des contacts et tâches :</b>Annuaire, liste de distribution, suivi des actions</li>
               <li><b>Gestion du diaporama : </b>Mode présentateur, minutage et répétition</li>
               <li><b>Automatisation et astuces avancées : </b>  Réponses automatiques, modèles d&#39;e-mails</li>
               <li><b>  Sécurité et confidentialité : </b>  Protection contre le phishing, gestion des permissions</li>
         
      
         </Typography>
       </AccordionDetails>
     </Accordion>
    

      
    </div> 
  );
}
