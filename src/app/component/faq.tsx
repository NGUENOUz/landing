"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "../../style/modules.scss";

export default function Faq() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="faq__Group">
      <Accordion
        className="panels"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="panel"
        >
          <Typography component="span" className="titre__content">
            <span className="titre">
              <span className="t">
                Apr&egrave;s paiement, comment j&apos;acc&egrave;de &agrave; la
                formation ?
              </span>
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq__description">
            <span>
              Apr&egrave;s votre paiement, vous &ecirc;tes automatiquement
              redirig&eacute; vers le dossier de formation sur Google Drive,
              avec toutes les vid&eacute;os, les ressources et les prompts
              disponibles imm&eacute;diatement.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="panels"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="panel"
        >
          <Typography component="span" className="titre__content">
            <span className="titre">
              <span className="t">
                Sous quel format se pr&eacute;sente la formation ?
              </span>
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq__description">
            <span>
              La formation est compos&eacute;e de vid&eacute;os, de prompts
              pr&ecirc;ts &agrave; l&apos;emploi, et de documents PDF. Vous
              pouvez les regarder en ligne ou les t&eacute;l&eacute;charger pour
              un acc&egrave;s hors connexion.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="panels"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="panel"
        >
          <Typography component="span" className="titre__content">
            <span className="titre">
              <span className="t">
                Y a-t-il des frais suppl&eacute;mentaires apr&egrave;s le
                paiement&nbsp;?
              </span>
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq__description">
            <span>
              Aucun frais cach&eacute;. Vous payez une seule fois et vous avez
              acc&egrave;s &agrave; la formation &agrave; vie, ainsi qu&apos;au
              groupe WhatsApp priv&eacute; et aux futures mises &agrave; jour.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="panels"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="panel"
        >
          <Typography component="span" className="titre__content">
            <span className="titre">
              <span className="t">
                Est-ce que je peux t&eacute;l&eacute;charger les vid&eacute;os ?
              </span>
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq__description">
            <span>
              Oui, vous pouvez t&eacute;l&eacute;charger toutes les
              vid&eacute;os, prompts et documents pour les garder sur votre
              t&eacute;l&eacute;phone, ordinateur ou cl&eacute; USB.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="panels"
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="panel"
        >
          <Typography component="span" className="titre__content">
            <span className="titre">
              <span className="t">
                Puis-je acheter la formation m&ecirc;me si je ne suis pas
                disponible maintenant&nbsp;?
              </span>
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="faq__description">
            <span>
              Oui, l&apos;acc&egrave;s est &agrave; vie. Vous pouvez payer
              aujourd&apos;hui, commencer dans une semaine, un mois ou
              m&ecirc;me dans six mois, selon votre disponibilit&eacute;.
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
