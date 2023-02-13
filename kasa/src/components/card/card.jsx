import React from "react";
import { Link } from "react-router-dom";
import "../sass/cards.scss";

// Gestion du lien, de l'image et titre du logement
/**************************************************/
const Card = ({ cover, id, title }) => {
  return (
    <article className="card">
      <Link to={`accommodation/${id}`}>
        <h2 className="card__title">{title}</h2>
        <div className="card__location">
          <img src={cover} alt="location" />
        </div>
      </Link>
    </article>
  );
};

export default Card;