import styled from "styled-components";

export const StyledLi = styled.li`
  min-width: 250px;
  height: 280px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .img_containner {
    width: 100%;
    height: 130px;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }

  .informs_containner {
    padding: 0.5rem 1.3125rem;
  }
  .informs_containner > h3 {
    color: #333333;
    margin-bottom: 0.3rem;
  }

  .informs_containner > p {
    color: #828282;
    margin-bottom: 0.3rem;
  }

  .informs_containner > h4 {
    color: #27ae60;
    margin-bottom: 0.3rem;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    width: 106px;
    height: 40px;
    background: #bdbdbd;
    border: 2px solid #bdbdbd;
    border-radius: 8px;
    color: #ffffff;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
  button:hover {
    background: #27ae60;
    border: 2px solid #27ae60;
  }
`;
