import React from "react";
import "../sass/banner.scss";

// Gestion de la bannière au niveay de son titre, la source et le texte alternatif de l'image
/*********************************************************************************************/
const Banner = ({ title, srcImg, altTexte }) => {
  return (
    <div className="banner">
      {title ? <h1 className="banner__title">{title}</h1> : ""}
      <div className="banner__background"></div>
      <img src={srcImg} alt={altTexte}></img>
    </div>
  );
};

export default Banner;