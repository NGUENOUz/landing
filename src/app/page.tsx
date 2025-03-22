'use client';
import Image from "next/image";
import '../style/layout.scss';
// import mockup from "../images/video.png";
// import User from "../images/User.png";
import logo from "../images/logoo.png";
// import felicitation from "../images/felicitation.gif"; 
// import Modules from "./component/modules";
// import PayCart from "./component/payCart";
// import Temoignage from "./component/temoignage";
 import Faq from "./component/faq";
import Link from 'next/link';
import ReactPlayer from "react-player";
import Notifications from "./component/notification";
// import BtnPay from "./component/payement";
import Book from "../images/book.png"
import videoIcon from "../images/videoIcon.png"
import fileIcon from "../images/fileIcon.png"
import reseauIcon from "../images/reseauIcon.png"
import settingIcon from "../images/settingIcon.png"

import MyComponent from "./component/bd";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
// import { BentoGrid } from "./component/ui/bendo-grid";
import BentoGridDemo from "./payement/page";
import BtnPay from "./component/payement";


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
           <Image src={Book} alt="" className="bookImage"/>

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
        <div className="video">
          <ReactPlayer
            url="https://youtu.be/PrqVcCSIVdk?si=kh3r1ZyP-a2uvNiP"
            controls // Affiche les contrôles de lecture
              // Hauteur de la vidéo

              className="react-player"
           />
           
             <button className="btn btn-one"><span>Voir le programme</span> 
            <span><ArrowDropDownIcon  className="icon"/></span>
          </button>
        </div>
      </section>

      <section className="objectif">
        <h1>Deviens <span className="tips">un pro</span> du No-code !</h1>

        <h2>Programme d&#39;accompagnement en ligne, développe une compétence monétisable</h2>

        <div className="cart__container">
          <div className="cart">
            <Image src={videoIcon} alt="" className="icons"/>

            <span>+20 Heures de vidéos à suivre a ton rythme</span>
          </div>
          <div className="cart">
            <Image src={fileIcon} alt="" className="icons"/>

            <span>+40 Chapitre repartie en 7 modules</span>
          </div>
          <div className="cart">
            <Image src={reseauIcon} alt="" className="icons"/>

            <span>Rejoins la communauté des miniamaker</span>
          </div>
          <div className="cart">
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



      

   

     {/* <section className="cible">
        <h2><span className="tips">Pour qui </span>est cette formation ? </h2>
        <div className="cible__content">
          <div className="cible__content__item">
            <h3>#1 Etudiants</h3>
            <p>Vous êtes étudiants et vous avez besoin de maitriser Excel pour vos études ?</p>
          </div>
          <div className="cible__content__item cible2">
            <h3>#2 Professionnels</h3>
            <p>Vous êtes professionnels et vous avez besoin de maitriser Excel pour votre travail ?</p>
          </div>
          <div className="cible__content__item">
            <h3>#1 Entrepreneurs</h3>
            <p>Vous êtes entrepreneurs et vous avez besoin de maitriser Excel pour votre entreprise ?</p>
          </div>
        </div>

        <h1>
          Profitez de cette offre unique dès maintenant !
        </h1>

        <p>2500 XAf seulement au lieux de </p>
        <span className="price">12 500 Xaf</span>
        <BtnPay texte="Profiter Maintenant"/>
        <span>Offre valable pour 24h</span>
        
     </section>

     <section className="modules">
      <h1>Ce que <span className="tips">vous</span> allez apprendre</h1>

      <div className="modules__content">
          
                <Modules/>

                <PayCart/>

                <div className="payCartMobile">
                        <Image src={mockup} alt="preview" className="preview" width={0} height={0}/>
                        <h2>Formation 100% pratique</h2>
                        <p>Voici un apperçu du contenu de cette formation qu&apos;il vous faut !!!</p>
                        <p>Ne manquez pas cette opportunité de vous faire former dans Excel</p>
                        <button className="btn-grad">Je profite de l&apos;offre</button>
                 </div>
                
      </div>
     </section> */}

{/* 
     <section className="plus">
     <h1>Rien à perdre mais tout  <span className="tips">à gagner</span> </h1>

     <div className="plus__content">
    
     <div className="plus__picture">
        <Image src={User} alt="previewPic" className="UserPic" width={0} height={0}/>
      </div>
      <div className="plus__description">
        <p>Ne ne vous offrons pas seulement la formation !</p>
        <p>En plus de la formation , vous aurez egalement accès à un groupe whatsapp privée des personnes passionner par les nouvelles technologies , avec qui vous poriez echangier par rapport aux difficulter que vous recntrer dans la mise en proatques des connaissances partager dans la formation , et pas seulement </p>
        <p>Vous aurez egalement droit à plus de 1000 livres audios qui traites des sujets utilies sur </p>
        <button className="btn-grad">
          Profiter de l&apos;offre
        </button>
     
        <span>Offre valable 24h</span>
     </div>

     

     
     </div>
     </section> */}
{/* 
     <section className="felicitation">
      <h1>Un mot de plus <span className="tips">pour toi</span> ! </h1>
       <div className="felicitaion__container">
        <span>Je voulais juste te feciliter , car je suis sur que tu ne laissera pas cette offre unique te passer par la porte . alors n&apos;attend plus , passe à l&apos;action maintenant , et profite de la promo , d&apos;une formaton de qualité , d&apos;un accompagnement à vie pendant et après ta formations et obtiens bien d&apos;autres bonus </span>
        <Image src={felicitation}   alt="" className="felicit" width={0} height={0}/>
       </div>
     </section> */}

     {/* <section className="temoins">
       <Temoignage/>
     </section> */}

     <section className="faq">
      <h1>Les <span className="tips">questions</span> les plus courantes</h1>
      <Faq/>
     </section>


     <section className="notif">
          <Notifications/>
     </section>
{/* 
     <section className="footer">
     <div className="footer_content">
          <h1>
          © 2025 Dreno
          </h1>
          <p>Tous droits réservés. | Mentions légales | Politique de confidentialité | Ce site n est pas affilié à Microsoft ou Facebook.</p>
        </div>
        <Image src={logo} alt="logo" className="logo" width={0} height={0}/>

     </section> */}
    </main>
  );
}
