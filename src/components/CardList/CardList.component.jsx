//This is a React Component
import React from "react";
import "./CardList.styles.scss";
import { Card } from "../Card/Card.component";

export const CardList = (props) => {
  //console.log(props);
  return (
    <div className="card-list">
      {props.pokedex.map((pokemon, index) => (
        <Card key={index} pokemon={pokemon} />
      ))}
    </div>
  );
};
