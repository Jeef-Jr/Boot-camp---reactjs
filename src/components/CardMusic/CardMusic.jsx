import React, { useState } from "react";
import Styled from "./CardMusic.styled";
import DeleteIcon from "../../html-css-template/imagens/delete-icon.png";
import EditIcon from "../../html-css-template/imagens/edit-icon.png";

const CardMusic = ({ dados }) => {
  const [nome, setNome] = useState(dados.nome);
  const [artista, setArtista] = useState(dados.artista);

  return (
    <Styled.Container img={dados.imagem}>
      <Styled.DivIcons>
        <Styled.Icon src={EditIcon} alt="" />
        <Styled.Icon src={DeleteIcon} alt="" />
      </Styled.DivIcons>
      <Styled.InfoMusic>
        <Styled.DivBetween>
          <strong className="card-title">música: </strong>
          <input
            className="input-music-enable"
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </Styled.DivBetween>
        <Styled.DivBetween>
          <strong className="card-title">artista: </strong>
          <input
            className="input-music-enable"
            type="text"
            value={dados.artista}
          />
        </Styled.DivBetween>
        <Styled.DivBetween>
          <strong className="card-title">categoria: </strong>
          <input className="input-music-enable" type="text" value="Teste" />
        </Styled.DivBetween>
        <Styled.DivBetween>
          <strong className="card-title">ano: </strong>
          <input className="input-music-enable" type="text" value="Teste" />
        </Styled.DivBetween>
        <button className="btn-salvar-enable">Salvar</button>
      </Styled.InfoMusic>
    </Styled.Container>
  );
};

export default CardMusic;
