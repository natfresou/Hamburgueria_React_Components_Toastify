import Logo from "../../assets/img/LogoKenzieBurguer.svg";
import carrinho from "../../assets/img/carrinho.svg";
import lupa from "../../assets/img/lupa.svg";
import { StyledHeader } from "./StyledHead";

export const Header = ({ setInputSearch, setIsOpen }) => {
  const formSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <StyledHeader>
        <div className="header_Logo_Carrinho">
          <img src={Logo} alt="Imagem do logo" />
          <div
            className="header_Carrinho_Contador"
            onClick={() => setIsOpen(true)}
          >
            <img src={carrinho} alt="Imagem do carrinho" />
            <div>
              <span>0</span>
            </div>
          </div>
        </div>
        <form className="header_pesquisa" onSubmit={formSubmit}>
          <input
            type="texto"
            placeholder="Digitar Pesquisa"
            onChange={(event) => setInputSearch(event.target.value)}
          />
          <div>
            <img src={lupa} alt="Imagem da lupa" />
          </div>
        </form>
      </StyledHeader>
    </>
  );
};
