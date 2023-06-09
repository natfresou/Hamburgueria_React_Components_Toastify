import lixeira from "../../../assets/img/lixeira.svg";
import { StyledLi } from "./style";

export const ModalCard = ({ itemBuy, removeItemBuy }) => {
  return (
    <StyledLi>
      <div className="liContainner">
        <div className="imgContainner">
          <img src={itemBuy.img} alt="Imagem do produto" />
        </div>
        <div className="typeProduct">
          <h2>{itemBuy.name}</h2>
          <div className="imgcard" onClick={() => removeItemBuy(itemBuy.id)}>
            <img className="wastImg" src={lixeira} alt="Imagem do lixeira" />
          </div>
        </div>
      </div>
    </StyledLi>
  );
};
