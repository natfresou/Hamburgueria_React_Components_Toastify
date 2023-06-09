import {
  StyledCaption,
  StyledHeading,
  StyledHeading3,
} from "../../../styles/typography";
import { StyledLi } from "./style";

export const ProductCard = ({ product, itemBuyList, setItemBuyList }) => {

  const putItemBuy = (productID) => {
    const itemExiste = itemBuyList.some((itemBuy) => itemBuy.id === productID);
    if (itemExiste) {
      alert("O item já está presente no carrinho");
    } else {
      setItemBuyList((itemBuyList) => [...itemBuyList, product]);
    }
  };

  return (
    <>
      <StyledLi>
        <div className="img_containner">
          <img src={product.img} alt="" />
        </div>
        <div className="informs_containner">
          <StyledHeading3>{product.name}</StyledHeading3>
          <StyledCaption>{product.category}</StyledCaption>
          <StyledHeading> R${product.price.toFixed(2)}</StyledHeading>
          <button type="submit" onClick={() => putItemBuy(product.id)}>
            Adicionar
          </button>
        </div>
      </StyledLi>
    </>
  );
};
