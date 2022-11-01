import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export const SearchCountry = () => {
  const [country, setCountry] = useState({});
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});

  const debouncedSearch = useDebounce(searchText, 700);
  // const history = useHistory();
  useEffect(() => {
    const searchUrl =
      searchText === ""
        ? "https://restcountries.com/v3.1/name/argentina?fullText=true"
        : `https://restcountries.com/v3.1/name/${searchText}?fullText=true`;
    axios.get(searchUrl).then((res) => {
      setLoading(false);
      setCountry(res.data[0]);
    });
  }, [debouncedSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://restcountries.com/v3.1/name/${searchText}?fullText=true`)
      .then((res) => {
        setCountry(res.data[0]);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="pais a buscar"
        />
        {/* <button type="submit">enviar</button> */}
      </form>

      <h1>{country.name?.official}</h1>
      <img src={country.flags?.svg} alt="" width="400px" />
      {loading ? (
        <h2>Soy la carga</h2>
      ) : (
        <>
          <div className="">
            <button
              onClick={() => {
                setInfo("demograpy");
              }}
            >
              Demograpy
            </button>
            <button
              onClick={() => {
                setInfo("location");
              }}
            >
              Location
            </button>
            <button
              onClick={() => {
                setInfo("capital");
              }}
            >
              Capital
            </button>
          </div>
          {info === "demograpy" ? (
            <>
              <h3>Demograpy</h3>
              <p>
                <strong>Population:</strong> {country.population}
              </p>
              <p>
                <b> Area:</b> {country.area} km2
              </p>
            </>
          ) : info === "location" ? (
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
          ) : (
            info === "capital" && (
              <>
                <h3>Capital</h3>
                <p>
                  <b>Capital: </b>
                  {country.capital}
                </p>
              </>
            )
          )}
        </>
      )}
    </div>
  );
};
