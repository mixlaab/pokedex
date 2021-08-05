import React from "react";
import "./Card.styles.scss";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="pokemon"
      src={`https://cdn.traction.one/pokedex/pokemon/${props.pokemon.id}.png`}
      width="300"
      height="300"
    ></img>
    <h1> {props.pokemon.name} </h1>
    <p> {props.pokemon.url} </p>
  </div>
);
