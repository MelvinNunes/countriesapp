import { useEffect } from "react";
import CountryCard from "./card/CountryCard";
import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  const getAll = () => {
    // Returns A List of Countries
    return axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1 className="font-bold text-4xl text-center my-6">Conheça o Mundo!</h1>
      <div className="flex justify-center px-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {countries.map((data, key) => {
            console.log(data);
            return (
              <CountryCard
                name={data.name.official}
                nativeName={data.name.nativeName?.eng?.common}
                region={data.region}
                subregion={data.subregion}
                population={data.population}
                area={data.area}
                timezones={data.timezones[0]}
                flag={data.flags?.png}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
