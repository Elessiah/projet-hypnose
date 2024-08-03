import React, { useState } from 'react';
import './PagePerso.css';
import YouTubeEmbed from './YoutubeEmbed';
import { Avatar, Button, Paper, Divider, IconButton} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

function Houssin() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Suite au dépistage d'un cancer et d'une opération avec complications lors de la période de la COVID-19; je remercie Céline HOUSSIN de m'avoir aidé à atténuer mes angoisses, à surmonter les épreuves traversées lors de mon rétablissement. Grâce à une écoute bienveillante et sans jugement, elle a su trouver les mots qui m'ont apaisé et m'ont redonné le goût à la vie.",
      author: "Didier"
    },
    {
      quote: "Etant aingoissée à l'approche de mon intervention d'une pose de prothèse totale du genou. Ces séances m'ont énormément apporté, car elles m'ont permis de visualiser serainement les différentes étapes de mon hospitalisation. Avec l'écoute, le calme et le professionnalisme de Mme Houssin, je n'hésiterais pas à recommander à d'autres personnes cette approche. C'est tellement rassurant de pouvoir mettre des mots sur toutes ces angoisses. Merci beaucoup de m'avoir aidé.",
      author: "Colette"
    },
    {
      quote: "Je me suis faite opérée des dents de sagesse en 2016, sans anesthésie générale. À l’approche de l’opération, étant un peu inquiète, Céline m’a proposé des méthodes pour me détendre. Nous nous sommes vues quelques fois, avant le jour j, et la préparation que nous avions faite ensemble m’a permis de trouver les clés pour me détendre et me rassurer au moment de l’opération.",
      author: "Elionore"
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="Perso">
      <header className="Perso-header">
        <div className='headerBG'>
          <img src="headHoussin.jpg" alt="Photo de Gwladys ROBERT, Céline HOUSSIN (mise en avant), et Laurence DERIEUX"/>
          <IconButton onClick={(evt) => navigate('/')} id='HomeButton'>
            <HomeIcon id='HomeButtonIcon'/>
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
                      alt="Photo de Céline HOUSSIN"
                      src="AvatarCeline256.jpg"
                      sx={{ width: 150, height: 150
                      }}
                    />
                  <div className='Info'>
                    <h2>Céline HOUSSIN</h2>
                    <h3>Tel : <a href='tel:+33660561277'>06.60.56.12.77</a></h3>
                  </div>
                </div>
              </Paper>
            </div>
            <div className='Perso-text'>
              <h3>Céline HOUSSIN</h3>
              <p>Je suis Manipulatrice au scanner et IRM, passionnée par mon métier et par l’envie d’<strong>apporter du bien-être</strong> à tous mes patients depuis 25 ans.</p>
            </div>
          </div>
          <div className='Perso-content'>
            <div className='Perso-text'>
              <p>J’ai découvert l’hypnose en 2015 lors d’un congrès, cette rencontre a changé ma vision du monde médical et ma pratique au quotidien. En effet, on peut apporter tellement de <strong>réconfort et de sécurité</strong> aux patients juste avec la communication thérapeutique, pour donner une perception des choses <strong>plus positive et confortable</strong>.</p>
            </div>
            <div id='Perso-illu-parcours'>
                <img src="SchtroupmfIRM.jpg" alt="Dessin d'une salle d'IRM sous forme d'un village de Schtroumpf" className='imgIllu' />
            </div>
          </div>
          <div className='Perso-content'>
            <div className='Perso-text'>
              <p>Dès lors, <a href="https://www.campus-hypnoses.com/trouver-un-praticien-en-hypnose-ou-un-institut/mme-celine-houssin-manipulateur-d-electroradiologie-medicale-erm">j’ai suivi le cursus de formation</a> à l’hypnose Ericksonienne avec l’institut Emergences à Rennes pendant 3 ans.</p>
            </div>
            <div id='Perso-illu-emergence'>
              <a href="https://www.campus-hypnoses.com/trouver-un-praticien-en-hypnose-ou-un-institut/mme-celine-houssin-manipulateur-d-electroradiologie-medicale-erm">
                <img src="Logo-Emergence.png" alt="Logo de l'institution Emergence" className='imgIllu'/>
              </a>
            </div>
          </div>
          <div className='Perso-content'>
          <div className='Perso-illu'>
              <YouTubeEmbed videoId="odg17odd1Kk?si=_9crCwTFgKierY2n"/>
            </div>
            <div className='Perso-text'>
		<p>Ayant la volonté d’offrir une continuité dans les soins pour les patients avec cet outil, j’ai réalisé plusieurs conférences (<a href="https://www.hypnose-ericksonienne.org/Inversion-Radicale-d-un-Moment-IRM_a976.html">Inversion Radicale d'un Moment IRM</a> et <a href="https://www.hypnose-ericksonienne.org/Et-pourquoi-pas-une-hysterectomie-avec-hypnose_a1007.html">Et pourquoi pas une hysterectomie avec hypnose ?</a>) et des formations en interne dans mon établissement sur la communication à une grande partie des soignants.</p>
              <p>L’hypnose est devenue un <strong>outil indispensable</strong> dans mon travail et dans ma vie. De nombreux patients ont pu ainsi <strong>dépasser leurs peurs et leurs douleurs</strong> pour réaliser leurs examens d’IRM ou de scanner.</p>
            </div>            
          </div>
        <div className='ImportantContainer'>
          <p><b className='Important'>Je l'ai fait sur moi !</b></p>
        </div>
        <div className='Perso-content'>
          <div className='Perso-text'>
            <p>Convaincue par la force de cet outil et des bienfaits de l’hypnose; j’ai moi même utilisé l’auto-hypnose pour me préparer et avoir une hystérectomie avec une péridurale.</p>
            <p>J’ai travaillé pour moi-même comme si j’étais mon propre patient, adapté tous les outils dont j’avais besoin personnellement pour cette épreuve. Résultats, je suis allée sereinement à mon intervention, j’ai réussi à <strong>gérer confortablement la douleur</strong>. J’ai cicatrisé et récupéré très vite.</p>
            <p>Cette intervention est une épreuve pour les femmes puisqu’on nous ôte une partie de notre féminité et le pouvoir de donner la vie. <strong>L’hypnose aide à faire ce deuil et à accepter ce passage de la vie</strong>.</p>
          </div>
          <div id='Perso-illu-le-chat'>
            <img src='illuLeChat.png' alt="" className='imgIllu'/>
          </div>
        </div>
        <div className='ImportantContainer'>
          <p><b>Cette épreuve et bien d’autres encore sont pour moi une force</b></p>
          <p><b>Car je sais ce qu’on ressent lorsqu’on est de l’autre coté et qu’on devient patient.</b></p>
        </div>
        <div className='Perso-content'>
          <div className='carousel'>
            <Paper elevation={5} id='ContentCarousel'>
              <div className='contentTestimonial'>
                <p className='testimonialCitation'>"{testimonials[currentIndex].quote}"</p>
                  <Divider/>
                  <p><b>{testimonials[currentIndex].author}</b></p>
              </div>
            </Paper>
            <div className='carousel-controls'>
                <div className='bttn-controls-carousel'>
                  <Button variant='outlined' color='secondary' onClick={handlePrevClick}>Précédent</Button>
                </div>
                <div className='bttn-controls-carousel'>
                  <Button variant='outlined' color='secondary' onClick={handleNextClick}>Suivant</Button>
                </div>
              </div>
          </div>
        </div>
        <div className='Perso-content'>
          <div id='photoSouriante'>
            <img src='photoSouriante600.jpg' alt="Céline HOUSSIN souriante" className='imgIllu' />
          </div>
          <div className='Perso-text'>
            <p>Mon expérience, enrichie depuis 10 ans, avec l'hypnose me pousse à sortir de mon cadre de manipulatrice au scanner et à l'IRM pour pouvoir apporter une aide à toute personne devant une intervention.</p>
            <p>L'hypnose ne remplace pas les médicaments mais elle aide à <strong>mieux tolérer les évènements et rester maître de son soin</strong>.</p>
          </div>
        </div>
        <div className='Perso-content'>
            <p id="ConclusionCeline"><b>Douce et à l'écoute, je me ferai un plaisir de vous accompagner dans vos épreuves en trouvant les outils et l'approche adaptés personnellement à vos besoins, pour vivre en toute sécurité ce moment délicat.</b></p>
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

export default Houssin;
