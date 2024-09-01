import React, { useState, useEffect } from 'react';
import './PagePerso.css';
import { Avatar, Paper, IconButton} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';


function Robert() {
    const navigate = useNavigate();
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let imageHead;
  
  if (windowWidth > 600)
    imageHead = "headRobert.jpg";
  else 
    imageHead =  "headRobert600.jpg";

  return (
    <div className="Perso">
      <header className="Perso-header">
        <div className='headerBG'>
          <img src={imageHead} alt="Photo de Gwladys MUELLE (mise en avant), Céline HOUSSIN, et Laurence DERIEUX"/>
          <IconButton onClick={(evt) => navigate('/')} id="HomeButton" >
            <HomeIcon id="HomeButtonIcon" />
          </IconButton>
        </div>
      </header>
      <div className='Perso-bg-content'>
        <div className='groupTitle'>
          <img src='logo3PlumeMarron64.png' alt='Logo du site. 3 plumes volant au vent'/>            
          <h1 className='Perso-title'>Cabinet d'hypnose thérapeutique créative et médicale</h1>
          <img src='logo3PlumeMarron64.png' alt='Logo du site. 3 plumes volant au vent' className='reverseImg'/>
        </div>
        <div className='Perso-content'>
          <div className='Perso-illu'>
            <Paper elevation={5} className='Icon'>
              <div className='Presentation'>
                <Avatar
                alt="Photo de Gwladys MUELLE"
                src="AvatarGladys256.jpg"
                sx={{ width: 150, height: 150}}
                />
                <div className='Info'>
                  <h2>Gwladys MUELLE</h2>
                  <h3>Tel : <a href='tel:+33699269703'>07.61.74.42.94</a></h3>
                </div>
              </div>
            </Paper>
          </div>
          <div className='Perso-text'>
            <h3>Gwladys MUELLE</h3>
            <p>Infirmière anesthésiste et practicienne en hypnose, j'ai toujours été sensible à la technicité de ma profession tout en étant consciente que prendre soin c'est aussi <strong>accompagner, rassurer, et sécuriser </strong>la personne que l'on soigne.</p>
          </div>
        </div>
        <div className='Perso-content'>
          <div className='Perso-text'>
            <p>Dans un premier temps la communication positive et thérapeutique m'a permis <b>d'améliorer la qualité</b> de mes prises en charge en constatant ses bienfaits.</p>
            <p>J'ai ensuite reçu une solide formation certifiante en hypnose. Cette discipline a totalement modifié ma pratique professionelle.</p>
            <p>J'observe, j'ose plus, et je fais participer mes patients pour qu'ils soient en mouvement et qu'ils mobilisent leurs ressources dont ils ne sont pas forcément conscients.</p>
            <p>L’esprit inconscient est notre partie savante!.</p>
          </div>
          <div id='travailRobert2'>
            <img src='PhotoRobertTravail2.jpg' alt="Photo de Gwladys MUELLE qui porte un enfant, en lui montrant un écran" className='imgIllu'/>
          </div>
        </div>
        <div className='Perso-content'>
          <div id='travailRobert3'>
            <img src='PhotoRobertTravail3.jpg' alt="Photo de Gwladys MUELLE qui accompagne un enfant avant une opération" className='imgIllu'/>
          </div>
          <div className='Perso-text'>
            <p>L'hypnose est un <strong>puissant outil</strong> que j'utilise au quotidien pour la <strong>gestion du stress</strong>, <strong>les phobies</strong>, <strong>les douleurs aiguës</strong> ainsi que <strong>dans la préparation</strong> à une chirurgie et une anesthésie.</p>
            <p>Pour chaque problématique nous <strong>avons tous les réponses en nous</strong>, mais parfois nous avons besoin d'une tierce personne pour <strong>nous guider</strong>.</p>
            <p>Je peux être celle-ci, celle qui vous aidera avec bienveillance à trouver les solutions pour un mieux être, pour appréhender certaines difficultés de la vie plus sereinement.</p>
          </div>
        </div>
        <div className='ImportantContainer'>
          <p><strong>Vous êtes le principal acteur ! Je serai votre guide !</strong></p>
        </div>
      </div>
      <div className='Bottom'>
        <h3>Où nous trouver ?</h3>
        <p>Le cabinet est situé au <b>2ème étage, 10 rue Jane Addams - 14280 ST CONTEST</b></p>
        <img src='ApercuCabinet.jpeg' alt='Photo du cabinet' className='PhotoCabinet'/>
        <img src='carte.png' alt='Carte avec la position géographique du cabinet' className='carteCabinet'/>
      </div>
    </div>
  );
}

export default Robert;
