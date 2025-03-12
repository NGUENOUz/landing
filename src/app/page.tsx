import Image from "next/image";
import '../style/layout.scss';
import mockup from "../images/mock.png";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export default function Home() {
  return (
    <main>
      
      <section className="Acceuil">
           <h1 className="titre">
           J'AIDE LES <span className="tips">COACHS</span> , <span className="tips">CONSULTANTS</span> ET LES <span className="tips">INFOPRENEURS</span> À OBTENIR DES <span className="tips">CLIENTS</span> DE MANIÈRE <span className="tips">PRÉDICTIBLE</span> GRÂCE AUX <span className="tips">TUNNELS DE VENTE MAGNIFIQUES</span>
           </h1>
           <h3 className="sousTitre">
           C'est le moment d'atteindre de nouveaux chiffres avec votre formation ou votre expertise de coach.
           </h3>

           <span className="btn">
              <AccessAlarmIcon fontSize="large" />
              <span>Prendre Rendez-vous </span>
           </span>

           <span className="mockup">
             <Image src={mockup} alt="mokup" />
           </span>
      </section>
    </main>
  );
}
