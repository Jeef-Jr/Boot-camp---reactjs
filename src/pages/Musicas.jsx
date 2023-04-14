import React, { useEffect } from "react";
import Styled from "./Musicas.styled";
import api from "../api"; // importando a instância do Axios de "api.js"
import { useState } from "react";
import CardMusic from "../components/CardMusic/CardMusic";
import NavBar from "../components/NavBar/Navbar";

function Musicas() {
  const [musicas, setMusicas] = useState([]); // criando estado de vetor para uma lista de músicas

  useEffect(() => {
    api
      .get() // invocando o método "get" do axios utilizando a URL base instanciada em "api.js"
      .then(respostaObtida => {
        // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
        console.log(respostaObtida.data); // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
        setMusicas(respostaObtida.data); // utilizando o setter para alterar o valor do estado (useState) de "musicas"
      })
      .catch(erroObtido => {
        // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
        console.log(erroObtido); // exibindo o erro que ocorreu na requisição
      });
  }, []);

  return (
    <>
      <NavBar />

      <div class="container">
        <div class="filter">
          <button class="btn">Adicionar</button>
        </div>
      </div>
      <div class="container">
        <div class="music-boxes">
          {musicas.map((dados, index) => (
            <CardMusic key={index} dados={dados} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Musicas;
