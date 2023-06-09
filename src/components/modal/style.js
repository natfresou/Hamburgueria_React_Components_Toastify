import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .25);
  inset: 0; 

  .modalContainner {
    position: absolute;
    width: 100%;
    max-width: 500px;
    border: 1px solid #f5f5f5;
    border-radius: 0px 0px 5px 5px;
    padding: 1rem;
    background-color: #ffffff;
  }
  .closeModal {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    justify-content: space-between;
    background-color: #27ae60;
    height: 54px;
    margin-bottom: 1rem;
  }

  button {
    width: 100%;
    height: 60px;
    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    color: #828282;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 1rem;
  }
  h3 {
    color: #ffffff;
  }

  .ulContainner {
    height: 285px;
    margin-bottom: 2px solid #e0e0e0;
  }
  ul {
    height: 280px;
    overflow-y: auto;
    border: none;
    margin-bottom: 2px solid #e0e0e0;
    margin-bottom: 2px solid #e0e0e0;
  }
  .msgContainner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #ffffff;
    border-bottom: 2px solid #e0e0e0;
    color: #333333;
  }
  .sunContainner {
    background-color: #ffffff;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: #333333;
  }
`;
