import styled from "styled-components";
import Cover from "../../html-css-template/imagens/cover-pink.png";

const StyledCard = {
  Container: styled.div`
    background-image: url(${props => (props.img ? props.img : Cover)});
    background-size: cover;
    height: 371px;
    width: 31.3%;
    margin: 0 1%;
    display: flex;
    margin-bottom: 30px;
    flex-wrap: wrap;
    align-content: space-between;
    color: white;
  `,

  DivIcons: styled.div`
    padding: 15px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  `,

  InfoMusic: styled.div`
    background-color: var(--pure-black-transparent);
    min-height: 160px;
    width: 100%;
    align-self: flex-end;
    flex-wrap: wrap;
    padding: 15px;
  `,

  DivBetween: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
  `,

  Imagem: styled.img`
    width: 100%;
    height: 100%;
  `,

  Icon: styled.img`
    margin: 5px;
    cursor: pointer;
  `,
};

export default StyledCard;
