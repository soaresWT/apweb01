import React, { useEffect, useState } from "react";

const Questao03 = () => {
  const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState("");
  const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState("");
  //criando as variaveis de estado para armazenar as capitais com maior e menor população
  useEffect(() => {
    const fetchData = async () => {
      try {
        //realizando a requisição para a api
        const response = await fetch(
          "https://restcountries.com/v3.1/region/europe?fields=capital,population"
        );
        const data = await response.json();
        const countries = data.map((country) => ({
          capital: country.capital[0],
          population: country.population,
        }));

        let maiorPopulacao = -1;
        let menorPopulacao = Infinity;
        let indiceMaiorPopulacao = -1;
        let indiceMenorPopulacao = -1;
        //buscando os maiores e menores valores de população
        for (let i = 0; i < countries.length; i++) {
          if (countries[i].population > maiorPopulacao) {
            maiorPopulacao = countries[i].population;
            indiceMaiorPopulacao = i;
          }
          if (countries[i].population < menorPopulacao) {
            menorPopulacao = countries[i].population;
            indiceMenorPopulacao = i;
          }
        }

        setCapitalMaiorPopulacao(countries[indiceMaiorPopulacao].capital);
        setCapitalMenorPopulacao(countries[indiceMenorPopulacao].capital);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Países com maior e menor população na Europa:</h2>
      <p>Capital com maior população: {capitalMaiorPopulacao}</p>
      <p>Capital com menor população: {capitalMenorPopulacao}</p>
    </div>
  );
};

export default Questao03;
