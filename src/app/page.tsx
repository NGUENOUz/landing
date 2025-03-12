import Image from "next/image";
import '../style/layout.scss';
import mockup from "../images/video.png";
import logo from "../images/logoD.png";
import Modules from "./component/modules";


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
           <div className="partie1">
            
             <div className="modules__content__item">
                <Modules/>
             </div>
        
      </div>

           <div className="partie2"></div>
      </div>
     </section>
    </main>
  );
}
