import { useEffect, useState } from "react";
import { ProductCard } from "../productCard/ProductCard";
import { StyledSection, StyledUl } from "./style";

export const ProductList = ({ filterProduct, itemBuyList, setItemBuyList }) => {
  useEffect(() => {
    localStorage.setItem("@itemBuyList", JSON.stringify(itemBuyList));
  }, [itemBuyList]);

  return (
    <>
      <StyledSection>
        <StyledUl>
          {filterProduct.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              itemBuyList={itemBuyList}
              setItemBuyList={setItemBuyList}
            />
          ))}
        </StyledUl>
      </StyledSection>
    </>
  );
};
