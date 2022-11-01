import React, { useEffect, useState } from "react";
import axios from "axios";
export const Countries = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/alpha/ar").then((res) => {
      setLoading(false);
      setCountry(res.data[0]);
    });
  }, []);
  console.log(country);
  return (
    <div>
      {loading ? (
        <h2>Soy la carga</h2>
      ) : (
        <>
          <h1>{country.name?.official}</h1>
          <img src={country.flags?.svg} alt="" width="400px" />
          <div className="">
            <button onClick={()=>{setInfo("demograpy")}}>Demograpy</button>
            <button onClick={()=>{setInfo("location")}}>Location</button>
            <button onClick={()=>{setInfo("capital")}}>Capital</button>
          </div>
          {
            info ==="demograpy" ? (
              <>
          <h3>Demograpy</h3>
          <p>
            <strong>Population:</strong> {country.population}
          </p>
          <p>
            <b> Area:</b> {country.area} km2
          </p>
              </>
            ) : (
              info ==="location" ? (
                <>       
          <h3>Location</h3>
          <p>
            <b>Continent: </b>
            {country.continents}
          </p>
          <p>
            <b>Region: </b>
            {country.region}
          </p>
          <p>
            <b>SubRegion: </b>
            {country.subregion}
          </p>
                </>
              ) : (info ==="capital" &&  
                <>      
          <h3>Capital</h3>
          <p>
            <b>Capital: </b>
            {country.capital}
          </p>
                </>
              )
            )
          }
        </>
      )}
    </div>
  );
};
