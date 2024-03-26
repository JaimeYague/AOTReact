import React from "react";

function AOTCharacterCard(props) {
  const data = props.data;
  return (
    <div className="aot-character">
      <h4>Name: {data.name}</h4>
      <img src={data.img} />
      <p>Age: {data.age}</p>
      <p>Gender: {data.gender}</p>
      <p>Occupation: {data.occupation}</p>
    </div>
  );
}

export default AOTCharacterCard;
