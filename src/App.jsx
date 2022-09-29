import { useEffect } from "react";
import CountryCard from "./card/CountryCard";
import Navbar from "./Navbar";
import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

function App() {
  const [countries, setCountries] = useState([]);

  const [loading, isLoading] = useState(false);

  axios.interceptors.request.use(
    (config) => {
      isLoading(true);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (res) => {
      isLoading(false);
      return res;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

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
      {!loading ? (
        <div>
          <Navbar data={countries} />
          <h1 className="font-bold text-4xl text-center my-6">
            Conheça o Mundo!
          </h1>
          <div className="flex justify-center px-7">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {countries.map((data, key) => {
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
      ) : (
        <div className="flex items-center justify-center h-96">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4997d0"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
    </div>
  );
}

export default App;
