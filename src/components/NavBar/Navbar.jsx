import React from "react";
import Styled from "./NavBar.styled";

import LogoVerde from "../../html-css-template/imagens/logo-verde.png";
import Avatar from "../../html-css-template/imagens/avatar.png";

const NavBar = () => {
  return (
    <Styled.NavBar>
      <Styled.Container>
        <Styled.Imagem src={LogoVerde} alt="Logo" />
        <Styled.Imagem src={Avatar} alt="Avatar" />
      </Styled.Container>
    </Styled.NavBar>
  );
};

export default NavBar;
