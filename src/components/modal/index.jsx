import { useEffect, useRef } from "react";
import { ModalCard } from "./modalCard";
import { StyledDiv } from "./style";
import { StyledHeading3 } from "../../styles/typography";

export const Modal = ({ itemBuyList, setIsOpen, setItemBuyList }) => {
  const modalRef = useRef(null);
  const buttonModalRef = useRef(null);

  const buyListLS = JSON.parse(localStorage.getItem("@itemBuyList"));

  useEffect(() => {
    const modalOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", modalOutClick);

    return () => {
      window.removeEventListener("mousedown", modalOutClick);
    };
  }, []);

  useEffect(() => {
    const buttonEsclRef = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", buttonEsclRef);

    return () => {
      window.removeEventListener("keydown", buttonEsclRef);
    };
  }, []);

  const removeItemBuy = (itemBuyId) => {
    setItemBuyList((itemBuyList) =>
      itemBuyList.filter((itemBuy) => itemBuy.id !== itemBuyId)
    );
  };

  const sanValues = itemBuyList.reduce((accValue, itemBuy) => {
    return accValue + itemBuy.price;
  }, 0);

  return (
    <StyledDiv >
      <div ref={modalRef} role="dialog" className="modalContainner">
        <div className="closeModal">
          <StyledHeading3>Carrinho de compras</StyledHeading3>
          <StyledHeading3 onClick={() => setIsOpen(false)}>x</StyledHeading3>
        </div>
        <div className="ulContainner">
          {itemBuyList.length > 0 ? (
            <ul>
              {itemBuyList.map((itemBuy) => (
                <ModalCard
                  key={itemBuy.id}
                  itemBuy={itemBuy}
                  removeItemBuy={removeItemBuy}
                />
              ))}
            </ul>
          ) : (
            <div className="msgContainner">
              <h2>Carrinho vazio</h2>
            </div>
          )}
        </div>
        <div className="sunContainner">
          <h2>Total</h2>
          <span>R${sanValues.toFixed(2)}</span>
        </div>
        <button ref={buttonModalRef} onClick={() => setItemBuyList([])}>
          {" "}
          Remover todos
        </button>
      </div>
    </StyledDiv>
  );
};
