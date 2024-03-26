import axios from "axios";
import React, { useEffect, useState } from "react";
import AOTLocalizationCard from "./AOTLocalizationCard";

function AOTLocalizations() {
  const [selectedLocalization, setSelectedLocalization] = useState("");
  const [localizations, setLocalizations] = useState([])
  const [isUsed, setUsed] = useState(false);

  useEffect (() => {
    const url = `https://api.attackontitanapi.com/locations?name=${selectedLocalization}`
    // const url = `https://api.attackontitanapi.com/characters?name=armin`
  if(name && name !='') {
    axios.get(url).then((res)=> {
      // console.log(res);
        if(res.data.results.length > 0){
          const filteredData = res.data.results.map((location)=> ({
            id: location.id,
            name: location.name,
            territory: location.territory,
            region: location.region,
            notable_inhabitants: location.notable_inhabitants
    
         }));
        console.log(filteredData);

        setLocalizations(filteredData);
        } else {
          setLocalizations([]);
        }
      });
    }else{
      setLocalizations([]);
    }
  }, [selectedLocalization]);


  return (
    <>
      <div className="main">
        <div className="search">
          <h1>Localizaciones de Attack on Titan</h1>
          <select
            onChange={(event) => {
              setSelectedLocalization(event.target.value);
              setUsed(true);
            }}
            value={selectedLocalization}
          >
            <option value="">Seleccionar localización</option>
            {localizations.map(localization => (
              <option key={localization.id} value={localization.name}>{localization.name}</option>
            ))}
          </select>
        </div>
        <div className="card-container">
          {!isUsed && <p>Haz tu búsqueda</p>}
          {(isUsed && localizations.length > 0) &&
            localizations
              .filter(localization => localization.name === selectedLocalization)
              .map(filteredLocalization => (
                <AOTLocalizationCard key={filteredLocalization.id} data={filteredLocalization} />
              ))}
        </div>
      </div>
    </>
  );
}

export default AOTLocalizations;

 