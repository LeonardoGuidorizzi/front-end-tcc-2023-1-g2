import "./style.css";
import "material-symbols";
import "./Inputs/style.css";
import { InputSearch } from "./Inputs";

export const Main = () => {
  const props = {
    placeHolder: "Insira seu cep...",
  };
  return (
    <main className="box-all-main">
      <div className="local-cep">
        <div className="h1-localize-se">
          <h1>Localize-se</h1>
        </div>
        <div className="inputs-search">
          <InputSearch props={props}></InputSearch>
          <div className="input-casa-complemento">
            <div className="inputs">
              <span className="material-symbols-outlined search-number">
                search
              </span>
              <input
                placeholder="Nº da casa"
                type="text"
                className="input"
                name="numero-casa"
                id="input-home-number"
              />
            </div>
            <div className="inputs">
              <span className="material-symbols-outlined search-complement">
                search
              </span>
              <input
                placeholder="Complemento"
                type="text"
                className="input"
                name="complemento"
                id="input-complement"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="map-container">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1081805024396!2d-46.90016434836597!3d-23.528611184624282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0154039cb55b%3A0xadf34a919f156950!2sSENAI%20de%20Jandira%20-%20Professor%20Vicente%20Amato!5e0!3m2!1spt-BR!2sbr!4v1678877313542!5m2!1spt-BR!2sbr"
        ></iframe>
      </div>
    </main>
  );
};
