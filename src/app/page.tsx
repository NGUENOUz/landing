"use client";
import Image from "next/image";
import "../style/layout.scss";

import logo from "../images/logoo.png";

import Link from "next/link";
import ReactPlayer from "react-player";
// import Notifications from "./component/notification";

import Book from "../images/lere.png";
import videoIcon from "../images/videoIcon.png";
import certification from "../images/certificatio.png";
import fileIcon from "../images/fileIcon.png";

import reseauIcon from "../images/reseauIcon.png";
import settingIcon from "../images/settingIcon.png";
import Bonus from "../images/bonus.png";
import MyComponent from "./component/bd";
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

// import BentoGridDemo from "./payement/page";
import BtnPay from "./component/payement";
import { ContainerScroll } from "./component/ui/container-scrool-animation";
import StarsIcon from "@mui/icons-material/Stars";
import ModulesFormations from "./component/modules";
import { AnimatedTestimonials } from "./component/temoignage";
import { testimonials } from "./component/bd/temoigne";
import Countdown from "./component/countDown";
import Faq from "./component/faq";
import dynamic from "next/dynamic";

const PixelInitializer = dynamic(() => import("../app/lib/usePixel"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <section className="Acceuil">
        <header>
          <span>
            <Image src={logo} alt="logo" className="logo" />
          </span>

          <nav>
            <ul>
              <Link href="#Modules" className="link">
                Les Modules
              </Link>
              <Link href="#Demo" className="link">
                Voir la Demo
              </Link>
              <Link href="#Bonus" className="link">
                Nos Bonus
              </Link>
            </ul>
          </nav>

          <BtnPay texte="Acceder à la formation" />
        </header>

        <div className="acceuil__container">
          <span className="sous__title">
            <span className="asterice">*</span>Formation 100% pratique
            <span className="asterice">*</span>
          </span>

          <h1>
            Deviens <span className="tips">un expert </span>En génération
            d&apos;image avec L&apos;IA et{" "}
            <span className="tips">Monétise </span>Cette compétence!
          </h1>

          <div className="btn__container">
            <button className="btn btn-one">
              <Link href="#Modules" className="link">
                Voir Le programme{" "}
              </Link>
              <span>
                <ArrowDropDownIcon className="icon" />
              </span>
            </button>
            <button className="btn btn2">
              {" "}
              <Link href="#price" className="link">
                Profiter de l&apos;offre
              </Link>
            </button>
          </div>
          <span className="chiffre">
            Plus de 52 000 personnes me suivent sur ma page et profitent de mes
            formations !
          </span>
        </div>
      </section>

      <section className="bann">
        <MyComponent />
      </section>

      <section className="demo">
        <div>
          <h1 className="demoTitre">
            A qui s&#39;adresse <span className="tips">cette formation ?</span>
          </h1>
          <h2>
            Que vous soyez &eacute;tudiant, entrepreneur, freelance,
            cr&eacute;ateur de contenu ou professionnel, cette formation est
            con&ccedil;ue pour vous. La g&eacute;n&eacute;ration d&apos;images
            avec l&apos;IA est une comp&eacute;tence moderne, accessible et
            mon&eacute;tisable partout en Afrique et ailleurs.
          </h2>
        </div>
        <div className="atout">
          <Image src={Book} alt="" className="bookImage" data-aos="zoom-in" />

          <div className="atout__description">
            <h1>
              Pourquoi apprendre la g&eacute;n&eacute;ration d&apos;images avec
              l&apos;IA ?
            </h1>

            <div className="items">
              <p>
                Parce qu&apos;en 2025,{" "}
                <strong>les images IA sont partout</strong> : r&eacute;seaux
                sociaux, publicit&eacute;s, logos, affiches, e-commerce.
                Ma&icirc;triser cette comp&eacute;tence, c&apos;est gagner du
                temps, stimuler votre cr&eacute;ativit&eacute; et ouvrir de
                nouvelles opportunit&eacute;s de revenus. En plus, cela vous
                permet d&apos;&eacute;conomiser de l&apos;argent en
                cr&eacute;ant vous-m&ecirc;me vos visuels, sans payer de
                shooting photo ou de graphiste, tout en ayant des
                r&eacute;sultats professionnels. Vous pouvez ensuite proposer ce
                service aux autres et g&eacute;n&eacute;rer des revenus, ce qui
                fait de cette formation un investissement rentable et sans
                risque.
              </p>

              {/* <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche" />
                </span>
                <span>
                  <b>Maîtriser Word </b> pour créer des documents professionnels
                  impeccables.{" "}
                </span>
              </span>

              <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche" />
                </span>
                <span>
                  <b>Exploiter Excel </b> afin d&#39;analyser et organiser vos
                  données efficacement
                </span>
              </span>

              <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche" />
                </span>
                <span>
                  <b>Créer des présentations percutantes</b> avec PowerPoint
                  pour captiver votre audience.
                </span>
              </span>

              <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche" />
                </span>
                <span>
                  {" "}
                  <b>Gérer vos e-mails et votre emploi du temps</b> avec Outlook
                  comme un pro.
                </span>
              </span>

              <span className="item">
                <span>
                  Peu importe votre niveau actuel, notre formation vous guide
                  pas à pas vers une maîtrise complète des outils bureautiques !
                  🚀
                </span>
              </span> */}
            </div>
          </div>
        </div>

        <div className="promesse">
          <h2>En moins de 24H, vous serez capable de :</h2>
          <ul>
            <li>✨ Cr&eacute;er vos propres visuels avec l&apos;IA</li>
            <li>✨ R&eacute;aliser des affiches pour vos projets</li>
            <li>✨ Produire des logos, designs et illustrations</li>
            <li>✨ Comprendre comment vendre vos cr&eacute;ations</li>
          </ul>
        </div>
      </section>

      <section className="demoVideo" id="Demo">
        <ContainerScroll
          titleComponent={
            <h1>
              La <span className="tips">Demo</span> de la formation
            </h1>
          }
        >
          <div className="video__container">
            <ReactPlayer
              url="https://youtu.be/2Mf6gpRwfaA"
              controls // Affiche les contrôles de lecture
              // Hauteur de la vidéo

              className="react-player"
            />
          </div>
        </ContainerScroll>
      </section>

      <section className="objectif">
        <h1>
          Deviens <span className="tips">un pro</span> des IA !
        </h1>

        <h2>
          Programme d&#39;accompagnement en ligne, développe une compétence
          monétisable
        </h2>

        <div className="cart__container">
          <div className="cart" data-aos="zoom-in">
            <Image src={videoIcon} alt="" className="icons" />
            <span>Formation vidéo pratique et accessible à vie</span>
          </div>

          <div className="cart" data-aos="zoom-in">
            <Image src={fileIcon} alt="" className="icons" />
            <span>
              4 Modules complets avec ressources et prompts prêts à l’usage
            </span>
          </div>

          <div className="cart" data-aos="zoom-in">
            <Image src={reseauIcon} alt="" className="icons" />
            <span>Accès à la communauté privée Whatsapp</span>
          </div>

          <div className="cart" data-aos="zoom-in">
            <Image src={settingIcon} alt="" className="icons" />
            <span>
              Cas pratiques : création d’images professionnelles avec IA
            </span>
          </div>

          <div className="cart">
            <Image src={settingIcon} alt="" className="icons" />
            <span>Support et réponses à tes questions 7j/7</span>
          </div>
        </div>

        <BtnPay texte="Je veux la formation" />
      </section>

      {/* <section className="portfolio">
         <BentoGridDemo/>
         <BtnPay texte="Je veux la formation"/>
      </section> */}

      <section className="modules"></section>

      <section className="moduleFormations" id="Modules">
        <h1>
          les <span className="tips">Modules</span> de la formation
        </h1>
        <h2>
          Voici le programme de la formation que vous allez recevoir après votre
          inscription{" "}
        </h2>
        <div className="faq__container">
          <ModulesFormations />
          <BtnPay texte="Je veux la formation" />
        </div>
      </section>

      <section className="bonus" id="Bonus">
        <div className="bonus__container">
          <Image src={Bonus} alt="" className="bonusIcon" />
          <h2>En plus de la formation , vous aurez droit à :</h2>
          <div className="bonus__box">
            <span className="bonusItem">
              <span className="bunusIcon">
                <StarsIcon />
              </span>
              <span>
                <b>Packs de prompts inclus :</b> Templates adaptables &agrave;
                vos clients
              </span>
            </span>

            <span className="bonusItem">
              <span className="bunusIcon">
                <StarsIcon />
              </span>
              <span>
                <b>Ressources offertes :</b> Livres, guides PDF, liens et
                visuels d&eacute;j&agrave; pr&ecirc;ts
              </span>
            </span>

            <span className="bonusItem">
              <span className="bunusIcon">
                <StarsIcon />
              </span>
              <span>
                <b>Acc&egrave;s communaut&eacute; :</b> Groupe WhatsApp
                priv&eacute; pour suivi, partage et entraide
              </span>
            </span>
          </div>
          <BtnPay texte="Je veux la formation" />
        </div>
      </section>

      <section className="temoignage">
        <h1>Temoignage</h1>
        <h2>
          <span className="asterice">* </span>Ecoute ce que les autres disent de
          cette formation<span className="asterice">*</span>{" "}
        </h2>

        <div className="temoignage__container">
          <AnimatedTestimonials testimonials={testimonials} autoplay={false} />
        </div>
      </section>

      <section className="price" id="price">
        <div className="priceLeft">
          <div className="title">
            <h1>Rejoind la formation Maintenant</h1>
            <h2>Le combo complet pour faire de vous un pro</h2>
          </div>

          <span className="lastPrice">
            <s>25 000 XAF</s>
          </span>
          <span className="newPrice">7 500 FCFA (~12 $)</span>
          <div className="priceItems">
            <span className="Item">
              <span>
                <CheckCircleRoundedIcon />
              </span>
              <span>Formation 100% pratique et accessible &agrave; vie</span>
            </span>

            <span className="Item">
              <span>
                <CheckCircleRoundedIcon />
              </span>
              <span>
                Transforme ta cr&eacute;ativit&eacute; en source de revenus
              </span>
            </span>

            <span className="Item">
              <span>
                <CheckCircleRoundedIcon />
              </span>
              <span>Suis la formation &agrave; ton propre rythme</span>
            </span>

            <span className="Item">
              <span>
                <CheckCircleRoundedIcon />
              </span>
              <span>Acc&egrave;s imm&eacute;diat apr&egrave;s paiement</span>
            </span>

            <span className="Item">
              <span>
                <CheckCircleRoundedIcon />
              </span>
              <span>Int&egrave;gre notre communaut&eacute; VIP WhatsApp</span>
            </span>

            <span className="Item">
              <span>
                <CheckCircleRoundedIcon />
              </span>
              <span>Re&ccedil;ois des prompts exclusifs chaque semaine</span>
            </span>

            <span className="Item">
              <span>
                <CheckCircleRoundedIcon />
              </span>
              <span>
                D&eacute;veloppe ton r&eacute;seau et collabore avec
                d&apos;autres talents
              </span>
            </span>
          </div>

          <BtnPay texte="Je veux la formation" />

          <div>
            <Countdown initialTime={24 * 3600 + 13 * 3600 + 12 * 60 + 60} />
          </div>
        </div>

        <div className="priceRight">
          <div className="container">
            <Image src={certification} alt="" className="certification" />
            <h1>Garentie</h1>

            <p>
              Si après avoir suivi l&apos;intégralité de la formation et
              appliqué toutes les étapes, vous ne parvenez pas à atteindre vos
              objectifs , nous vous rembouserons intégralement. Votre réussite
              est notre priorité !
            </p>
          </div>
        </div>
      </section>

      <section className="faq">
        <h1>Questions : </h1>
        <Faq />
      </section>

      {/* <section className="notif">
          <Notifications/>
     </section> */}

      <section className="footer">
        <Image src={logo} alt="logo" className="logo" width={0} height={0} />
        <div className="footer_content">
          <h1>© 2025 Dreno | Wilfried Dzomeu</h1>
          <p>
            Tous droits réservés. | Mentions légales | Politique de
            confidentialité | Ce site n est pas affilié à Microsoft ou Facebook.
          </p>
        </div>
      </section>

      <PixelInitializer />
    </main>
  );
}
