
import Image from "next/image";
import '../style/layout.scss';
import mockup from "../images/video.png";
import User from "../images/User.png";
import logo from "../images/logoD.png";
import Modules from "./component/modules";
import PayCart from "./component/payCart";


export default function Home() {
  return (
    <main>
      <header>
        <Image src={logo} alt="logo" width={100} height={100}/>
      </header>

      <section className="Acceuil">
        <h2>Ne laisser plus la peurs de la manipulation des données vous tourmenter ! </h2>
        <h1>Devenez <span className="tips">Expert</span> Dans <span className="tips">Excel</span></h1>
        <h3>Grace à cette formation 100% pratique accéssible par tous </h3>
        <Image src={mockup} alt="logo"  className="video"/>
        
        <button className="btn-grad">Commencer</button>
        
      </section>

     <section className="bannier">
        
     </section>

     <section className="cible">
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
        <button className="btn-grad">Je profite de l&#39; offre</button>
        <span>Offre valable pour 24h</span>
        
     </section>

     <section className="modules">
      <h1>Ce que <span className="tips">vous</span> allez apprendre</h1>

      <div className="modules__content">
          
                <Modules/>

                <PayCart/>

                <div className="payCartMobile">
                        <Image src={mockup} alt="preview" className="preview" />
                        <h2>Formation 100% pratique</h2>
                        <p>Voici un apperçu du contenu de cette formation qu&apos;il vous faut !!!</p>
                        <p>Ne manquez pas cette opportunité de vous faire former dans Excel</p>
                        <button className="btn-grad">Je profite de l&apos;offre</button>
                 </div>
                
      </div>
     </section>


     <section className="plus">
     <h1>Rien à perdre mais tout  <span className="tips">à gagner</span> </h1>

     <div className="plus__content">
    

      <div className="plus__description">
        <p>Ne ne vous offrons pas seulement la formation !</p>
        <p>En plus de la formation , vous aurez egalement accès à un groupe whatsapp privée des personnes passionner par les nouvelles technologies , avec qui vous poriez echangier par rapport aux difficulter que vous recntrer dans la mise en proatques des connaissances partager dans la formation , et pas seulement </p>
        <p>Vous aurez egalement droit à plus de 1000 livres audios qui traites des sujets utilies sur </p>
        <button className="btn-grad">
          Profiter de l&apos;offre
        </button>
     
        <span>Offre valable 24h</span>
     </div>

     <div className="plus__picture">
        <Image src={User} alt="previewPic" className="UserPic"/>
      </div>

     
     </div>
     </section>
    </main>
  );
}
