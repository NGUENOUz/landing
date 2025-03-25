'use client';
import Image from "next/image";
import '../style/layout.scss';

import logo from "../images/logoo.png";

import Link from 'next/link';
import ReactPlayer from "react-player";
import Notifications from "./component/notification";

import Book from "../images/book.png"
import videoIcon from "../images/videoIcon.png"
import certification from "../images/certificatio.png"
import fileIcon from "../images/fileIcon.png"

import reseauIcon from "../images/reseauIcon.png"
import settingIcon from "../images/settingIcon.png"
import Bonus from "../images/bonus.png"
import MyComponent from "./component/bd";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

import BentoGridDemo from "./payement/page";
import BtnPay from "./component/payement";
import { ContainerScroll } from "./component/ui/container-scrool-animation";
import StarsIcon from '@mui/icons-material/Stars';
import ModulesFormations from "./component/modules";
import { AnimatedTestimonials } from "./component/temoignage";
import { testimonials } from "./component/bd/temoigne";
import Countdown from "./component/countDown";
import Faq from "./component/faq";


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
            <Link href=""className="link">Nos formations</Link>
            <Link href="" className="link">Qui sommes nous</Link>
            <Link href=""className="link">Se connecter</Link>
          </ul>
        </nav>

        <button className="btn-one btn-gra">
          <span>Acceder aux formations</span>
          <span>
                <ArrowRightIcon  className="icon"/>
          </span>
        </button>
      </header>

      <div className="acceuil__container">
        <span className="sous__title"><span className="asterice">*</span>Formation 100% pratique<span className="asterice">*</span></span>

        <h1>
            Devenez <span className="tips">un expert </span>en Creation d&#39;application <span className="tips">No-code</span> sans apprendre du code
        </h1>

        <div className="btn__container">
          <button className="btn btn-one"><span>Voir le programme</span> 
            <span><ArrowDropDownIcon  className="icon"/></span>
          </button>
          <button className="btn btn2">Exemples concrets</button>
        </div>
        <span className="chiffre">Plus de 3000 Africain ont suivent cette formation</span>
      </div>

        
      </section>

      <section className="bann">
         <MyComponent/>
      </section>

      <section className="demo">
        <div className="atout">
           <Image src={Book} alt="" className="bookImage"   data-aos="zoom-in"/>

           <div className="atout__description">
            <h1>Au cours de cette formation , je vais te montrer :</h1>

            <div className="items">
              <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche"/>
               </span>
                <span>Le precess complet pour créer une miniature </span>
              </span>

              <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche"/>
               </span>
                <span>Le precess complet pour créer une miniature </span>
              </span>

              <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche"/>
               </span>
                <span>Le precess complet pour créer une miniature </span>
              </span>

              <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche"/>
               </span>
                <span>Le precess complet pour créer une miniature </span>
              </span>

              <span className="item">
                <span>
                  <SubdirectoryArrowRightIcon className="icon-fleche"/>
               </span>
                <span>Le precess complet pour créer une miniature </span>
              </span>
            </div>
           </div>
        </div>
       
      </section>

      <section className="demoVideo">
      
        <ContainerScroll titleComponent={<h1>La <span className="tips">Demo</span> de la formation</h1>}>
        
           <div className="video__container">
                      
                            <ReactPlayer
                              url="https://youtu.be/PrqVcCSIVdk?si=kh3r1ZyP-a2uvNiP"
                              controls // Affiche les contrôles de lecture
                                // Hauteur de la vidéo
                  
                                className="react-player"
                             />
                             
          </div> 

                 
        </ContainerScroll>
 
      </section>

      <section className="objectif">
        <h1>Deviens <span className="tips">un pro</span> du No-code !</h1>

        <h2>Programme d&#39;accompagnement en ligne, développe une compétence monétisable</h2>

        <div className="cart__container">
          <div className="cart" data-aos="zoom-in">
            <Image src={videoIcon} alt="" className="icons"/>

            <span >+20 Heures de vidéos à suivre a ton rythme</span>
          </div>
          <div className="cart" data-aos="zoom-in">
            <Image src={fileIcon} alt="" className="icons"/>

            <span>+40 Chapitre repartie en 7 modules</span>
          </div>
          <div className="cart" data-aos="zoom-in">
            <Image src={reseauIcon} alt="" className="icons"/>

            <span>Rejoins la communauté des miniamaker</span>
          </div>
          <div className="cart" data-aos="zoom-in">
            <Image src={settingIcon} alt="" className="icons"/>

            <span>+ Un tuto de cas pratique chaque mois</span>
          </div>
          <div className="cart">
            <Image src={settingIcon} alt="" className="icons" />

            <span>+ Un tuto de cas pratique chaque mois</span>
          </div>
        </div>

        <BtnPay texte="Je veux la formation"/>
      </section>


      <section className="portfolio">
         <BentoGridDemo/>
         <BtnPay texte="Je veux la formation"/>
      </section>

      
      <section className="modules">

      </section>

     <section className="moduleFormations">
     

     <h1>les <span className="tips">Modules</span> de la  formation</h1>
     <h2>Voici le programme de la formation que vous allez recevoir après votre inscription </h2>
        <div className="faq__container">
        <ModulesFormations/>
        <BtnPay texte="Je veux la formation"/>

        </div>
     </section>

     <section className="bonus">

       <div className="bonus__container">
          <Image src={Bonus} alt="" className="bonusIcon"/>
          <h2>En plus de la formation , vous aurez droit à :</h2>
         <div className="bonus__box">
         
          <span className="bonusItem">
          <span className="bunusIcon"><StarsIcon/></span>
            <span>Un accompagnement personnaliser pour répondre à vos questions</span>
          </span>

          <span className="bonusItem">
          <span className="bunusIcon"><StarsIcon/></span>
            <span>Plus de 1000 livres audios qui traites des sujets comme l&apos;entreprenaria , le developpement personnel, la spiritualité et bien plus</span>
          </span>

          <span className="bonusItem">
            <span className="bunusIcon"><StarsIcon/></span>
            <span>Vous aurez accès à un groupe privée des menbres de la formations , avec qui vous pouriez tisser des liens , evoluer dans le monde professionels , travailler ensemble sur des projets et bien plus .</span>
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
          <h2>Le combo complet complet pour faire de toi un pro</h2>
         </div>

         <span className="lastPrice"><s>75 000 XAF</s></span>
         <span className="newPrice">8500 XAF</span>
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
              <span>+40 Chapitre repartie en 7 modules</span>
            </span>

            <span className="Item">
              <span><CheckCircleRoundedIcon/></span>
              <span>Rejoins la communauté des miniamaker sur Telegram</span>
            </span>
            
            <span className="Item">
              <span><CheckCircleRoundedIcon/></span>
              <span>+ Un tuto de plus au cas pratique chaque mois</span>
            </span>

            <span className="Item">
              <span><CheckCircleRoundedIcon/></span>
              <span>Mon pack de brushes & Assets</span>
            </span>

            <span className="Item">
              <span><CheckCircleRoundedIcon/></span>
              <span>+ Des exercices de miniatures à réaliser</span>
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

        <p>Si après avoir suivi l&apos;intégralité de la formation et appliqué toutes les étapes, tu ne parviens pas à créer des miniatures professionnelles et captivantes qui augmentent ton taux de clic, je te rembourse intégralement. Ta réussite est ma priorité !</p>
       </div>
      </div>
     </section>


     <section className="faq">
      <h1>Les questions frequament poser :</h1>
        <Faq/>
     </section>


     <section className="notif">
          <Notifications/>
     </section>

     <section className="footer">
     <Image src={logo} alt="logo" className="logo" width={0} height={0}/>
     <div className="footer_content">

    
          <h1>
          © 2025 Dreno
          </h1>
          <p>Tous droits réservés. | Mentions légales | Politique de confidentialité | Ce site n est pas affilié à Microsoft ou Facebook.</p>
        </div>

     </section> 
    </main>
  );
}
