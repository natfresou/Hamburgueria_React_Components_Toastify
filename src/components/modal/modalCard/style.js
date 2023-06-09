import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;

  img {
    width: 70px;
    height: 70px;
    object-fit: scale-down;
    background: #e0e0e0;
    border-radius: 5px;
  }
  .liContainner {
    display: flex;
    flex-direction: row;
  }

  .typeProduct {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 0px;
    padding-left: 0.15rem;
  }
  .wastImg {
    width: 25px;
    height: 30px;
    background: #ffffff;
  }
`;
