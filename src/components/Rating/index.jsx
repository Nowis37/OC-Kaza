import React from "react";

import redstar from "../../assets/redStar.svg";
import greystar from "../../assets/greyStar.svg";

/*

.map : Méthode qui retourne un tableau a partir d'un 1er tableau appelant
dans notre cas, le nombre de stars du rate défini le nombre d'étoile rouge (le reste en gris)

*/

const Rating = ({ rating }) => {
  	const stars = [1, 2, 3, 4, 5];

  	return (
		<div className="product__content__right__rate">
		{stars.map((star) => /* Boucle pour afficher les étoiles selon la note*/
			rating >= star ? (
			<img key={star.toString()} className="product__content__right__rate__icon" src={redstar} alt="Evaluation du logement" />
			) : (
			<img key={star.toString()} className="product__content__right__rate__icon" src={greystar} alt="Evaluation du logement" />
			)
		)}
		</div>
  	);
};

export default Rating;