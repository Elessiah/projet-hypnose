import React, { useEffect, useState } from 'react';
import './MainPage.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, Divider } from '@mui/material';


function MainPage() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
  }, []);

  function navigateToTop(destination) {
    window.scrollTo({top: 0, behavior:'instant'});
    navigate(destination);
  }

  let imageHead;
  if (windowWidth > 600)
    imageHead = "headMainPage.jpg";
  else
    imageHead = "headPortrait600.jpg";

  return (
    <div className="MainPage">
      <header className="MainPage-header">
        <div className='headerBG'>
          <img src={imageHead} alt='Photo des trois thérapeutes' className='imgHeaderBG'/>
        </div>
      </header>
      <div className='MainPage-content'>
        <div className='groupTitle'>
          <img src='logo3PlumeMarron128.png' alt='Logo du site. 3 plumes volant au vent' />
          <div className='Title'>
            <h1>Intervention Chirurgicale - Harcèlement scolaire</h1>
            <h2>3 Plumes pour plus d'apaisement, de sérénité, de confiance en soi...</h2>
          </div>
          <img src='logo3PlumeMarron128.png' alt='Logo du site. 3 plumes volant au vent' className='reverseImg'/>
        </div>
        <Box className='MainPage-BoxDisplay'>
          <Paper elevation={15} className='MainPage-display' id='Gladys' onClick={(evt) => navigateToTop('/robert')} >
            <div className='MainPage-presentation'>
              <Avatar
                alt="Photo de Gwladys Robert"
                src="AvatarGladys128.jpg"
                sx={{ width: 100, height: 100 }}
                className='Avatar'
              />
              <div className='Info'>
                <h2>Gwladys MUELLE</h2>
                <h3>Tel : 07.61.74.42.94</h3>
              </div> 
            </div>
          </Paper>
          <Paper elevation={15} className='MainPage-display' id='Celine' onClick={(evt) => navigateToTop('/houssin')}>
            <div className='MainPage-presentation'>
                <Avatar
                  alt="Photo de Céline HOUSSIN"
                  src="AvatarCeline128.jpg"
                  sx={{ width: 100, height: 100 }}
                  className='Avatar'
                />
                <div className='Info'>
                  <h2>Céline HOUSSIN</h2>
                  <h3>Tel : 06.60.56.12.77</h3>
                </div>
            </div>
          </Paper>
          <Paper elevation={15} className='MainPage-display' id='Laurence' onClick={(evt) => navigateToTop('./derieux')}>
            <div className='MainPage-presentation'>
                <Avatar
                  alt="Photo de Laurence DERIEUX"
                  src="AvatarLaurence128.jpg"
                  sx={{ width: 100, height: 100 }}
                  className='Avatar'
                />
                <div className='Info'>
                  <h2>Laurence DERIEUX</h2>
                  <h3>Tel : 06.00.00.00.00</h3>
                </div>
            </div>
          </Paper>
        </Box>
        <div className='textSousPresentation'>
          <div className='Accompagnement'>
            <div className='SubDivAccompagnement'>
              <Paper elevation={5} className='PaperAccompagnement'><p>Une Anxiété ?</p></Paper>
              <div className='SubDivAccompagnement'>
                <Paper elevation={4} className='PaperAccompagnement'><p>Un stress ?</p></Paper>
                <div className='SubDivAccompagnement'>
                  <Paper elevation={3} className='PaperAccompagnement'><p>Appréhension pour un soin ?</p></Paper>
                  <div className='SubDivAccompagnement'>
                    <Paper elevation={2} className='PaperAccompagnement'><p>Appréhension pour un examen ?</p></Paper>
                    <div className='SubDivAccompagnement'>
                      <Paper elevation={1} className='PaperAccompagnement'><p>Appréhension pour une intervention ?</p></Paper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3><strong>Les 3 Plumes peuvent vous accompagner</strong></h3>
          </div>
          <div className='Accompagnement'>
            <div className='SubDivAccompagnement'>
              <Paper elevation={5} className='PaperAccompagnement'><p>Moqueries ?</p></Paper>
              <div className='SubDivAccompagnement'>
                <Paper elevation={4} className='PaperAccompagnement'><p>Renfermement ?</p></Paper>
                <div className='SubDivAccompagnement'>
                  <Paper elevation={3} className='PaperAccompagnement'><p>Perte de confiance en soi ?</p></Paper>
                  <div className='SubDivAccompagnement'>
                    <Paper elevation={2} className='PaperAccompagnement'><p>Harcèlement Scolaire ou Professionnel</p></Paper>
                  </div>
                </div>
              </div>
            </div>
            <h3><strong>Les 3 Plumes peuvent vous accompagner</strong></h3>
          </div>
        </div>
        <Box className='TherapieInfo'>
          <Paper elevation={15} className='InfoElem' onClick={(evt) => setOpen1(true)}>
            <img src="/garcondanslalune600.jpg" alt="Illustration de Qu'est-ce que l'Hypnose" className='InfoIllu'/>
            <h3>Qu'est-ce que l'hypnose ?</h3>
          </Paper>
          <Dialog onClose={(evt) => setOpen1(false)} open={open1}>
            <DialogTitle className='TitleDialog'><strong>Qu'est-ce que l'hypnose ?</strong></DialogTitle>
            <Divider/>
            <div className='contentInfoDialog'>
            <p>C'est un état de conscience particulier et naturel que tout le monde a déjà vécu sans savoir qu'il s'agissait d'hypnose.</p>
            <p>C'est comme être dans la lune, le corps est a un endroit et l'esprit à un autre.</p>
            <p>Cette capacité du cerveau nous permet de vivre des moments ennuyeux ou inconfortables de façon très agréable tout en ayant perdu la notion du temps.</p>
            </div>
          </Dialog>
          <Paper elevation={15} className='InfoElem' onClick={(evt) => setOpen2(true)}>
            <img src="/Hypnose_0008.jpg" alt="Illustration de l'hypnose pour quoi" className='InfoIllu' />
            <h3>L'hypnose pour quoi ?</h3>
          </Paper>
          <Dialog onClose={(evt) => setOpen2(false)} open={open2}>
              <DialogTitle className='TitleDialog'><strong>L'hypnose pour quoi ?</strong></DialogTitle>
              <Divider/>
              <div className='contentInfoDialog'>
                <h4>Pour avoir de nouveaux outils pour gérer la douleur ou des situations de stress : </h4>
                  <ul>
                    <li>Intervention chirurgicale</li>
                    <li>Douleurs post-opératoire</li>
                    <li>Préparation accouchement</li>
                    <li>Harcèlement</li>
                    <li>Anxiété lié à des épreuves scolaire ou médicale</li>
                  </ul>
              </div>
          </Dialog>
          <Paper elevation={15} className='InfoElem' onClick={(evt) => setOpen3(true)}>
            <img src="/Familie.jpg" alt="Illustration de l'hypnose pour qui" className='InfoIllu' id='FautQueCaRentre'/>
            <h3>L'hypnose pour qui ?</h3>
          </Paper>
          <Dialog onClose={(evt) => setOpen3(false)} open={open3}>
            <DialogTitle className='TitleDialog'><strong>L'hypnose pour qui ?</strong></DialogTitle>
            <Divider/>
            <div className='contentInfoDialog'>
              <p><strong>Pour toute personne motivée</strong> (enfants, adolescents, adultes, personnes agées) qui a la volonté de compléter sa boîte à outils pour être acteur de sa vie.</p>
            </div>
          </Dialog>
          <Paper elevation={15} className='InfoElem' onClick={(evt) => setOpen4(true)}>
            <img src="/hypnosePourquoi.jpeg" alt="Illustration de l'hypnose pour qui" className='InfoIllu'/>
            <h3>L'hypnose comment ça marche ?</h3>
          </Paper>
          <Dialog onClose={(evt) => setOpen4(false)} open={open4}>
            <DialogTitle className='TitleDialog'><strong>L'hypnose comment ça marche ?</strong></DialogTitle>
            <Divider/>
            <div className='contentInfoDialog'>
              <p><strong>La douleur = 80% ressentie émotionnelle</strong></p>
              <p>L'hypnose aide à modifier la perception des choses et transformer les émotions désagréables en quelque chose de plus confortable.</p>
            </div>
	  </Dialog>
          <Paper elevation={15} className='InfoElem' onClick={(evt) => setOpen5(true)}>
            <img src="/money.jpg" alt="Illustration Séances et Tarifs" className='InfoIllu'/>
            <h3>Séances et Tarifs</h3>
          </Paper>
          <Dialog onClose={(evt) => setOpen5(false)} open={open5}>
            <DialogTitle className='TitleDialog'><strong>Séances et Tarifs</strong></DialogTitle>
            <Divider/>
              <div className='contentInfoDialog'>
		  <p>Il faut en général <b>2 à 3 séances</b> pour acquérir les outils nécessaires pour être acteur de sa vie.</p>
		  <p>Tarif: 60€/séance</p>
            </div>
          </Dialog>

        </Box>
        <div className='Citation'>
          <Paper elevation={5} className='ContentCitation' id='Citation-Laurent-Gounelle'>
            <h3>L'homme qui voulait être heureux de Laurent Gounelle</h3>
            <p>« Une vie réussie est une vie que l'on a menée conformément à ses souhaits, en agissant toujours en accord avec ses valeurs, en donnant le meilleur de soi-même dans ce que l'on fait, en restant en harmonie avec qui l'on est, et, si possible, une qui nous a donné l'occasion de nous dépasser, de nous consacrer à l'humanité, même très humblement, même si c'est infime.</p>
            <p>Une petite plume d'oiseau confiée au vent.</p>
            <p>Un sourire pour les autres. »</p>
            <img src='MauvaiseInfluence.jpg' alt='Illustration de la citation'/>
          </Paper>
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

export default MainPage;
