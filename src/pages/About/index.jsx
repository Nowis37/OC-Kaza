import React from "react";
import Collapse from "../../components/Collapse";

import bannerImg from "../../assets/banner-about.png";

const About = () => {
  return (
    <main className="about">
        <div className="about__banner">
            <img src={ bannerImg } alt="Paysages de montagne parcemer de neige"/>
        </div>
        <div className="about__informations">
            <Collapse categorie="about" title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
            <Collapse categorie="about" title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            <Collapse categorie="about" title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
            <Collapse categorie="about" title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
    </main>
  );
};

export default About;