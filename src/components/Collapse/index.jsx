import React from "react";

import arrowDown from "../../assets/arrowDown.svg";


const Collapse = ({ categorie, title, content }) => {
  const stateClick = (e) => {

    if (!e.target.nextSibling.classList.contains("show")) {
      e.target.nextSibling.classList.add("show"); // nextSibling = card__info
      e.target.lastChild.classList.add("rotate"); // lastChild = icon
    } else {
      e.target.nextSibling.classList.remove("show");
      e.target.lastChild.classList.remove("rotate");
    }

  };

  return (
    <div className={`${categorie}__informations__card`}>

		<div className={`${categorie}__informations__card__title`} onClick={stateClick}>
        	{title}  
        	<img src={ arrowDown } alt="Dérouler le menu" />
        </div>
		
        {Array.isArray(content) ? ( // Si c'est un objet = équipement
          <>
            <ul className={`${categorie}__informations__card__info`}>
              {content.map((equipment, index) => (
                <li key={index} className={`${categorie}__informations__card__equipment`}>
                  {equipment}
                </li>
              ))}
            </ul>
          </>
        ) : ( // le reste
          <>
            <p className={`${categorie}__informations__card__info`}>{content}</p>
          </>
        )}
    </div>
  );
};

export default Collapse;