import Image from "next/image";
import '../style/layout.scss';
import mockup from "../images/video.png";
import logo from "../images/logoD.png";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

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
     </section>
    </main>
  );
}
