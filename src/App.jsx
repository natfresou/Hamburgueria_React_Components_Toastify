import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/global";
import { Header } from "./components/header/Header";
import { useState, useEffect } from "react";
import { ProductList } from "./components/productSection/productList/ProducList";
import { Modal } from "./components/modal";

function App() {
  const [productList, setProductList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [itemBuyList, setItemBuyList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const filterProduct = productList.filter((product) =>
    product.name.toUpperCase().includes(inputSearch.toUpperCase())
  );

  useEffect(() => {
    async function productsRequest() {
      const response = await fetch(
        "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
      );
      const json = await response.json();
      setProductList(json);
    }
    productsRequest();
  }, []);

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header setInputSearch={setInputSearch} setIsOpen={setIsOpen} />
      {isOpen ? (
        <Modal
          itemBuyList={itemBuyList}
          setIsOpen={setIsOpen}
          setItemBuyList={setItemBuyList}
        ></Modal>
      ) : null}
      <div className="app_containner">
        <ProductList
          filterProduct={filterProduct}
          itemBuyList={itemBuyList}
          setItemBuyList={setItemBuyList}
        />
      </div>
    </>
  );
}

export default App;
