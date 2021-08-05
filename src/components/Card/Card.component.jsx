import React from "react";
import "./Card.styles.scss";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="pokemon"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemon.id}.png`}
      width="300"
      height="300"
    ></img>
    <h2> {props.pokemon.name} </h2>
    <p> {props.pokemon.url} </p>
  </div>
);
