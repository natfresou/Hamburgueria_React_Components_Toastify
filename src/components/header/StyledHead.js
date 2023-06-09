import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 5rem;
  background: #f5f5f5;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;

  .header_Logo_Carrinho {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    min-width: 20rem;
    align-items: center;
    width: 15.625rem;
    height: 3.75;
  }
  .header_Logo_Carrinho > img {
    width: 9.9337rem;
    height: 2.3019rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .header_Carrinho_Contador {
    width: 35px;
    height: 40px;
    position: relative;
    cursor: pointer;
  }

  .header_Carrinho_Contador > img {
    margin-top: 15px;
  }
  .header_Carrinho_Contador > div {
    width: 1.25rem;
    height: 1.5rem;
    background: #27ae60;
    border-radius: 0.4375rem;
    position: absolute;
    top: 0;
    right: 0;
  }
  .header_Carrinho_Contador > div > span {
    position: absolute;
    top: 0.2rem;
    right: 0.4rem;
    color: white;
  }

  .header_pesquisa {
    background: #ffffff;
    width: 15.625rem;
    height: 3.75rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 10px 0px 15px;
  }
  .header_pesquisa > input {
    height: 3rem;
    outline: none;
    cursor: pointer;
  }

  .header_pesquisa > div {
    width: 53px;
    height: 40px;
    border: 2px solid #27ae60;
    border-radius: 8px;

    img {
      background-color: #27ae60;
      width: 100%;
      object-fit: scale-down;
      height: 100%;
    }
  }
`;
