import React from "react";

function AOTLocalizationCard(props) {
  const data = props.data;
  return (
    <div className="aot-localization">
      <h4>Name: {data.name}</h4>
      <p>Territory: {data.territory}</p>
      <p>Region: {data.region}</p>
      <p>Notable Inhabitants: {data.notable_inhabitants}</p>
    </div>
  );
}

export default AOTLocalizationCard;