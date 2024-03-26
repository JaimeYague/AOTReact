import axios from "axios";
import React, { useEffect, useState } from "react";
import AOTTitanCard from "./AOTTitanCard";

function AOTTitans() {
  const [selectedTitan, setSelectedTitan] = useState("");
  const [titans, setTitans] = useState([]);
  const [isUsed, setUsed] = useState(false);

  useEffect(() => {
    const url = `https://api.attackontitanapi.com/titans?name=${selectedTitan}`;

    if (selectedTitan && selectedTitan !== "") {
      axios.get(url).then((res) => {
        if (res.data.results.length > 0) {
          const filteredData = res.data.results.map((titan) => ({
            id: titan.id,
            name: titan.name,
            img: titan.img.split(".png")[0] + ".png",
            height: titan.height,
            abilities: titan.abilities,
            allegiance: titan.allegiance
          }));
          setTitans(filteredData);
        } else {
          setTitans([]);
        }
      });
    } else {
      setTitans([]);
    }
  }, [selectedTitan]);

  useEffect(() => {
    // Si no se ha usado la búsqueda, cargar todos los titanes al inicio
    if (!isUsed) {
      axios.get("https://api.attackontitanapi.com/titans").then((res) => {
        if (res.data.results.length > 0) {
          const allTitans = res.data.results.map((titan) => ({
            id: titan.id,
            name: titan.name
          }));
          setTitans(allTitans);
        } else {
          setTitans([]);
        }
      });
    }
  }, [isUsed]);

  return (
    <div>
      <div className="main">
        <div className="search">
          <h1>Titanes de Attack on Titan</h1>
          {/* Desplegable de titanes */}
          <select
            onChange={(event) => {
              setSelectedTitan(event.target.value);
              setUsed(true);
            }}
            value={selectedTitan}
          >
            <option value="">Selecciona un Titán</option>
            {titans.map((titan) => (
              <option key={titan.id} value={titan.name}>
                {titan.name}
              </option>
            ))}
          </select>
        </div>
        <div className="card-container">
          {!isUsed && <p>Haz tu búsqueda</p>}
          {isUsed && titans.length !== 0 ? (
            titans.map((titan) => <AOTTitanCard key={titan.id} data={titan} />)
          ) : (
            <p>No se encontraron titanes para la búsqueda.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AOTTitans