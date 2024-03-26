import React from "react";

function AOTTitanCard(props) {
  const data = props.data;
  return (
    <div className="aot-titan">
      <h4>Name: {data.name}</h4>
      <img src={data.img} />
      <p>Height: {data.height}</p>
      <p>Abilities: {data.abilities}</p>
      <p>Allegiance: {data.allegiance}</p>
    </div>
  );
}

export default AOTTitanCard;