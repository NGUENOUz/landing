'use client';
import Image from "next/image";
import '../style/layout.scss';

import logo from "../images/logoo.png";

import Link from 'next/link';
import ReactPlayer from "react-player";
// import Notifications from "./component/notification";

import Book from "../images/books.png"
import videoIcon from "../images/videoIcon.png"
import certification from "../images/certificatio.png"
import fileIcon from "../images/fileIcon.png"

import reseauIcon from "../images/reseauIcon.png"
import settingIcon from "../images/settingIcon.png"
import Bonus from "../images/bonus.png"
import MyComponent from "./component/bd";
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

// import BentoGridDemo from "./payement/page";
import BtnPay from "./component/payement";
import { ContainerScroll } from "./component/ui/container-scrool-animation";
import StarsIcon from '@mui/icons-material/Stars';
import ModulesFormations from "./component/modules";
import { AnimatedTestimonials } from "./component/temoignage";
import { testimonials } from "./component/bd/temoigne";
import Countdown from "./component/countDown";
import Faq from "./component/faq";
import dynamic from 'next/dynamic';


const PixelInitializer = dynamic(() => import('../app/lib/usePixel'), { ssr: false });



export default function Home() {


 
  return (
    <main>
      

      <section className="Acceuil">
      <header>
        <span>
         <Image src={logo} alt="logo" className="logo"/>
        </span>

        <nav>
          <ul>
            <Link href="#Modules"className="link">Les Modules</Link>
            <Link href="#Demo" className="link">Voir la Demo</Link>
            <Link href="#Bonus"className="link">Nos Bonus</Link>
          </ul>
        </nav>

        
        <BtnPay texte="Acceder à la formation"/>
          
          
      </header>

      <div className="acceuil__container">
        <span className="sous__title"><span className="asterice">*</span>Formation 100% pratique<span className="asterice">*</span></span>

        <h1>
            Devenez <span className="tips">un expert </span>des outils bureautiques et <span className="tips">boostez </span>votre carrière !
        </h1>

        <div className="btn__container">
          <button className="btn btn-one" ><Link href="#Modules"className="link">Voir Le programme </Link>
            <span><ArrowDropDownIcon  className="icon"/></span>
          </button>
          <button className="btn btn2"> <Link href="#Demo" className="link">Exemples concrets</Link></button>
        </div>
        <span className="chiffre">Plus de 300 000 Africains ont déjà suivi cette formation avec succès !</span>
      </div>

        
      </section>

      <section className="bann">
         <MyComponent/>
      </section>

      <section className="demo">
        <h1 className="demoTitre">A qui s&#39;adresse <span className="tips">cette formation ?</span></h1>
        <h2>Que vous soyez étudiant, professionnel ou entrepreneur, la maîtrise de la suite Microsoft Office est une compétence incontournable pour booster votre productivité et vos opportunités professionnelles.</h2>
        <div className="atout">
           <Image src={Book} alt="" className="bookImage"   data-aos="zoom-in"/>

           <div className="atout__description">
            <h1>Cette formation est idéale si vous voulez :</h1>

            <div className="items">
              <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche"/>
               </span>
                <span><b>Maîtriser Word </b> pour créer des documents professionnels impeccables. </span>
              </span>

              <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche"/>
               </span>
                <span><b>Exploiter Excel </b> afin d&#39;analyser et organiser vos données efficacement</span>
              </span>

              <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche"/>
               </span>
                <span><b>Créer des présentations percutantes</b> avec PowerPoint pour captiver votre audience.</span>
              </span>

              <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche"/>
               </span>
                <span> <b>Gérer vos e-mails et votre emploi du temps</b> avec Outlook comme un pro.</span>
              </span>

              <span className="item">
              
                <span>Peu importe votre niveau actuel, notre formation vous guide pas à pas vers une maîtrise complète des outils bureautiques ! 🚀</span>
              </span>
            </div>
           </div>
        </div>
       
      </section>

      <section className="demoVideo" id="Demo">
      
        <ContainerScroll titleComponent={<h1>La <span className="tips">Demo</span> de la formation</h1>}>
        
           <div className="video__container">
                      
                            <ReactPlayer
                              url="https://vimeo.com/1070162920/c94e5063fd?share=copy"
                              controls // Affiche les contrôles de lecture
                                // Hauteur de la vidéo
                  
                                className="react-player"
                             />
                             
          </div> 

                 
        </ContainerScroll>
 
      </section>

      <section className="objectif">
        <h1>Deviens <span className="tips">un pro</span> sur Office !</h1>

        <h2>Programme d&#39;accompagnement en ligne, développe une compétence monétisable</h2>

        <div className="cart__container">
          <div className="cart" data-aos="zoom-in">
            <Image src={videoIcon} alt="" className="icons"/>

            <span >+20 Heures de vidéos à suivre a ton rythme</span>
          </div>
          <div className="cart" data-aos="zoom-in">
            <Image src={fileIcon} alt="" className="icons"/>

            <span>+60 Chapitres repartie en 4 Modules</span>
          </div>
          <div className="cart" data-aos="zoom-in">
            <Image src={reseauIcon} alt="" className="icons"/>

            <span>Rejoins la communauté des expert</span>
          </div>
          <div className="cart" data-aos="zoom-in">
            <Image src={settingIcon} alt="" className="icons"/>

            <span>+ Un tuto de cas pratique chaque mois</span>
          </div>
          <div className="cart">
            <Image src={settingIcon} alt="" className="icons" />

            <span>+ Accompagnement personnaliser  chaque 2 semaines</span>
          </div>
        </div>

        <BtnPay texte="Je veux la formation"/>
      </section>


      {/* <section className="portfolio">
         <BentoGridDemo/>
         <BtnPay texte="Je veux la formation"/>
      </section> */}

      
      <section className="modules">

      </section>

     <section className="moduleFormations" id="Modules">
     

     <h1>les <span className="tips">Modules</span> de la  formation</h1>
     <h2>Voici le programme de la formation que vous allez recevoir après votre inscription </h2>
        <div className="faq__container">
        <ModulesFormations/>
        <BtnPay texte="Je veux la formation"/>

        </div>
     </section>

     <section className="bonus" id="Bonus">

       <div className="bonus__container">
          <Image src={Bonus} alt="" className="bonusIcon"/>
          <h2>En plus de la formation , vous aurez droit à :</h2>
         <div className="bonus__box">
         
          <span className="bonusItem">
          <span className="bunusIcon"><StarsIcon/></span>
            <span>Un accompagnement personnalisé pour répondre à vos questions</span>
          </span>

          <span className="bonusItem">
          <span className="bunusIcon"><StarsIcon/></span>
            <span>Plus de 1000 livres audio couvrant des sujets tels que l&apos;entrepreneuriat, le développement personnel, la spiritualité et plus encore</span>
          </span>

          <span className="bonusItem">
            <span className="bunusIcon"><StarsIcon/></span>
            <span>Vous aurez accès à un groupe privé d&apos;hommes issus de la formation, avec qui vous pourrez nouer des relations, évoluer dans le monde professionnel, travailler ensemble sur des projets et bien plus encore.</span>
          </span>

          
         </div>
         <BtnPay texte="Je veux la formation"/>
       </div>
        
     </section>

     <section className="temoignage">
      <h1>Temoignage</h1>
      <h2><span className="asterice">* </span>Ecoute ce que les autres disent de cette formation<span className="asterice">*</span> </h2>

      <div className="temoignage__container">
        <AnimatedTestimonials testimonials={testimonials} autoplay={false}/>
      </div>
     </section>

     <section className="price">
      <div className="priceLeft">
         <div className="title">
          <h1>Rejoind la formation Maintenant</h1>
          <h2>Le combo complet pour faire de vous un pro</h2>
         </div>

         <span className="lastPrice"><s>75 000 XAF</s></span>
         <span className="newPrice">1500 XAF</span>
         <div className="priceItems">
            <span className="Item">
              <span><CheckCircleRoundedIcon/></span>
              <span>Programme d&apos;accompagnement en ligne</span>
            </span>

            <span className="Item">
              <span><CheckCircleRoundedIcon/></span>
              <span>Développe une compétence monétisable</span>
            </span>
           
            <span className="Item">
              <span><CheckCircleRoundedIcon/></span>
              <span>+20 Heures de vidéos à suivre a ton rythme</span>
            </span>


            <span className="Item">
              <span><CheckCircleRoundedIcon/></span>
              <span>+40 Chapitre repartie en 4 modules</span>
            </span>

            <span className="Item">
              <span><CheckCircleRoundedIcon/></span>
              <span>Rejoind la communauté des miniamaker sur Telegram</span>
            </span>
            
            <span className="Item">
              <span><CheckCircleRoundedIcon/></span>
              <span>+ Un tuto de plus au cas pratique chaque mois</span>
            </span>


            <span className="Item">
              <span><CheckCircleRoundedIcon/></span>
              <span>+ Des exercices  à réaliser</span>
            </span>

         </div>
        
         <BtnPay texte="Je veux la formation"/>

         <div>
         <Countdown initialTime={24 * 3600 + 13 * 3600 + 12 * 60 + 60} />
         </div>

      </div>

      <div className="priceRight">
       <div className="container">
       <Image src={certification} alt="" className="certification"/>
        <h1>Garentie</h1>

        <p>Si après avoir suivi l&apos;intégralité de la formation et appliqué toutes les étapes, vous ne parvenez pas à atteindre vos objectifs , nous vous rembouserons intégralement. Votre réussite est notre priorité !</p>
       </div>
      </div>
     </section>


     <section className="faq">
      <h1>Questions fréquemment posées :</h1>
        <Faq/>
     </section>


     {/* <section className="notif">
          <Notifications/>
     </section> */}

     <section className="footer">
     <Image src={logo} alt="logo" className="logo" width={0} height={0}/>
     <div className="footer_content">

    
          <h1>
          © 2025 Dreno
          </h1>
          <p>Tous droits réservés. | Mentions légales | Politique de confidentialité | Ce site n est pas affilié à Microsoft ou Facebook.</p>
        </div>

     </section> 

     <PixelInitializer />
    </main>
  );
}
