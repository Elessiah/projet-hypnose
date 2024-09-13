import React, { useState, useEffect } from 'react';
import './PagePerso.css';
import { Paper, Avatar, Divider, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

function Derieux() {
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
    imageHead = "headDerieux.webp";
  else 
    imageHead =  "headDerieux600.jpg";

  return (
    <div className="Perso">
      <header className="Perso-header">
        <div className='headerBG'>
          <img src={imageHead} alt="Photo de Gwladys ROBERT, Céline HOUSSIN, et Laurence DERIEUX (mise en avant)"/>
          <IconButton onClick={(evt) => navigate('/')} id="HomeButton">
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
      <div className='ImportantContainer'>
        <p><strong className='Important'><i>« Je ne retomberai jamais en enfance, j'y suis toujours resté. » </i> Tristan Bernard</strong></p>
      </div>
        <div className='Perso-content'>
          <div className='Perso-illu'>
            <Paper elevation={5} className='Icon'>
              <div className='Presentation'>
                <Avatar 
                alt="Photo de Laurence DERIEUX"
                src="AvatarLaurence256.jpg"
                sx={{ width: 150, height: 150 }}
                />
                <div className='Info'>
                  <h2>Laurence DERIEUX</h2>
                  <h3>Tel : <a href='tel:+3344842249'>07.44.84.22.49</a></h3>
                </div>
              </div>
            </Paper>
          </div>
          <div className='Perso-text'>
            <h3>Laurence DERIEUX</h3>
            <p>Ophtalmologiste pédiatre depuis <b>plus de 25 ans</b> avec des enfants.</p>
          </div>
        </div>
        <div className='Perso-content'>
          <div className='Perso-text'>
            <h3>Mon expérience</h3>
            <p>J'ai côtoyé les enfants dans les moments plus ou moins stressant de leur vie, allant de la simple consultation déjà émotionnellenement difficile pour certains, jusqu'au bloc opératoire où je les opère.</p>
            <p>Je leur ai parlé, j'ai <b>appris à les comprendre</b> en fonction de leur vécu, de leur âge, de leurs antécédents, de leur milieu familial.</p>
          </div>
          <div id='travailDerieux1'>
            <img src='photoTravailDerieux1.png' alt="Photo d'une enfant qui joue avec une tablette dans un lit d'hôpital" className='imgIllu'/>
          </div>
        </div>
        <div className='Perso-content'>
          <div id='logoKidOBlock'>
            <img src='logoKidOBlock.png' alt="Logo de Kid'O Bloc" className='imgIllu'/>
          </div>
          <div className='Perso-text'>
            <h3>Mes travaux</h3>
            <p>Ayant toujours été <b>très sensible au bien être de tous mes patients</b>, j'ai élaboré des protocoles pour l'accueil des enfants au bloc opératoire : <i>Kid'o Bloc</i> et formé les équipes à la communication thérapeutique.</p>
          </div>
        </div>
        <div className='Perso-content'>
          <div className='Perso-text'>
            <h3>Mon parcours</h3>
            <p>Cette constante volonté que ces moments de soins soient vécus comme <strong>une expérience positive</strong> (oui c'est possible !) où ils en sortent <strong>plus forts et plus sereins</strong> m'a motivé à me former à l'hypnose médicale depuis 8 ans maintenant :<br/> Diplôme Universitaire d'hypnose médicale de la Pitié-Salpêtrière, <a href='https://www.campus-hypnoses.com/trouver-un-praticien-en-hypnose-ou-un-institut/dr-laurence-drieux-medecin-ophtalmologie-orthoptie'>la formation certifiante d'Emergence en hypnose Ericksonnienne</a> sur la douleur aiguës et anesthésie, les thérapies brèves et le harcèlement scolaire et bien d'autres thèmes.</p>
            <p>Je suis également formatrice au sein de cet institut.</p>
          </div>
            <Paper elevation={5} id='citationPauwels'>
              <p><i>« L'enfance trouve son paradis dans l'instant. Elle ne demande pas du bonheur. Elle est le bonheur. »</i></p>
              <Divider/>
              <p>Louis Pauwels</p>
            </Paper>
        </div>
        <div className='Perso-content'>
          <div id='TravailDerieux2'>
            <img src="photoTravailDerieux2.jpeg" alt="Enfant feuilletant un magazine Dysney avant une anésthésie" className='imgIllu'/>
          </div>
          <div className='Perso-text'>
            <h3>Mon objectif</h3>
            <p>Lors de mes rencontres, j'ai pu observer cette richesse que les enfants nous apportent avec un mot, un sourire un geste mais j'ai aussi pu lire dans leurs yeux la souffrance, la tristesse, la douleur, et cela est difficilement supportable.</p>
            <p>Ma formation permet de leur apprendre à <strong>lutter contre le harcèlement</strong>, qu'ils soient petits, adolescents, ou même vous adultes, d'appréhender au mieux leurs douleurs physiques ou morales et de renforcer leur confiance en eux. Leur permettre de trouver leurs ressources personnelles pour aller mieux, en autonomie.</p>
          </div>
        </div>
        <div className='ImportantContainer'>
          <p><strong className='Important'><i>« Tout enfant est en quelque façon un génie. Et tout génie est un enfant. » </i> Arthur Shopenhaueur</strong></p>
        </div>
      </div>
      <div className='Bottom'>
          <h3>Où nous trouver ?</h3>
          <p>Le cabinet est situé au <b>2ème étage, 10 rue Jane Addams - 14280 ST CONTEST</b></p>
          <img src='ApercuCabinet.jpeg' alt='Photo du cabinet' className='PhotoCabinet'/>
          <img src='carte550.webp' alt='Carte avec la position géographique du cabinet' className='carteCabinet'/>
      </div>
    </div>
  );
}

export default Derieux;
