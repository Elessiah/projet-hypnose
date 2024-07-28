import React from 'react';
import './PagePerso.css';
import { Avatar, Paper} from '@mui/material';

function Robert() {
  return (
    <div className="Perso">
      <header className="Perso-header">
        <div className='headerBG'>
          <img src="headRobert.jpg" alt="photo des trois thérapeutes"/>
        </div>
        <h1>Cabinet d'hypnose thérapeutique créative et médicale</h1>
      </header>
      <div className='Perso-bg-content'>
        <div className='Perso-content'>
          <div className='Perso-illu'>
            <Paper elevation={5} className='Icon'>
              <div className='Presentation'>
                <Avatar
                alt="Photo de Gwladys ROBERT"
                src="AvatarGladys.jpg"
                sx={{ width: 150, height: 150}}
                />
                <div className='Info'>
                  <h2>Gwladys ROBERT</h2>
                  <h3>Tel : <a href='tel:+33699269703'>06.99.26.97.03</a></h3>
                </div>
              </div>
            </Paper>
          </div>
          <div className='Perso-text'>
            <h3>Gwladys ROBERT</h3>
            <p>Infirmière anesthésiste et practicienne en hypnose, j'ai toujours été sensible à la technicité de ma profession tout en étant consciente que prendre soin c'est aussi <strong>accompagner, rassurer, et sécuriser </strong>la personne que l'on soigne.</p>
          </div>
        </div>
        <div className='Perso-content'>
          <div className='Perso-text'>
            <p>Dans un premier temps la communication positive et thérapeutique m'a permis <b>d'améliorer la qualité</b> de mes prises en charge en constatant ses bienfaits.</p>
            <p>J'ai ensuite reçu une solide formation certifiante en hypnose. Et cette discipline a totalement modifié ma pratique professionelle.</p>
            <p>J'observe, j'ose plus, et je fais participer mes patients pour qu'ils soient en mouvement et qu'ils mobilisent leurs ressources intérieures et inconscientes.</p>
          </div>
          <div id='travailRobert2'>
            <img src='PhotoRobertTravail2.jpg' className='imgIllu'/>
          </div>
        </div>
        <div className='Perso-content'>
          <div id='travailRobert3'>
            <img src='PhotoRobertTravail3.jpg' className='imgIllu'/>
          </div>
          <div className='Perso-text'>
            <p>L'hypnose est un <strong>puissant outil</strong> que j'utilise au quotidien pour la <strong>gestion du stress</strong>, <strong>les phobies</strong>, <strong>les douleurs aiguës</strong> ainsi que <strong>dans la préparation</strong> à une chirurgie et une anesthésie.</p>
            <p>Pour chaque problématique, nous <strong>avons tous les réponses en nous</strong>, mais parfois nous avons besoin d'une tierce personne pour <strong>nous guider</strong>.</p>
            <p>Je peux être celle-ci, celle qui vous aidera avec bienveillance à trouver les solutions pour un mieux être, pour appréhender certaines difficultés de la vie plus serainement.</p>
          </div>
        </div>
        <div className='ImportantContainer'>
          <p><strong>Vous êtes le principal acteur ! Je serais votre guide !</strong></p>
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