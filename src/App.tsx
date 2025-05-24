import { useState, type FormEvent } from "react";

import "./App.css";

import logoPNG from "./assets/logo.png";
import { Input } from "./components/input";
import { Title } from "./components/title";

interface IInfoProps {
  resultMessage: string;
  totalGasoline: string | number;
  totalEthanol: string | number;
}

const App = () => {
  const [gasolineInput, setGasolineInput] = useState(0);
  const [ethanolInput, setEthanolInput] = useState(0);
  const [info, setInfo] = useState<IInfoProps>();

  const calcBetterOptionToBuy = (event: FormEvent) => {
    event.preventDefault();

    const calculation = ethanolInput / gasolineInput;

    if (calculation <= 0.7) {
      return setInfo({
        resultMessage: "Compensa usar Etanol!",
        totalGasoline: currencyFormatter(gasolineInput),
        totalEthanol: currencyFormatter(ethanolInput),
      });
    }

    return setInfo({
      resultMessage: "Compensa usar Gasolina!",
      totalGasoline: currencyFormatter(gasolineInput),
      totalEthanol: currencyFormatter(ethanolInput),
    });
  };

  const currencyFormatter = (rawValue: number) => {
    const formattedValue = rawValue.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return formattedValue;
  };

  return (
    <>
      <main className="main_container">
        <header className="header">
          <img
            src={logoPNG}
            alt="Logo Gasolina ou Alcool"
            className="header_logo"
          />

          <Title titleWeight={1}>Qual a melhor opção?</Title>
        </header>

        <section className="form_section">
          <form className="form" onSubmit={calcBetterOptionToBuy}>
            <label className="label" htmlFor="etanol">
              Etanol (preço por L)
            </label>
            <Input
              inputType="number"
              inputClass="input"
              inputName="etanol"
              inputText="Ex: 5.50"
              inputValue={ethanolInput ? ethanolInput : ""}
              onChange={(e) => setEthanolInput(Number(e.target.value))}
            />

            <label className="label" htmlFor="gasolina">
              Gasolina (preço por L)
            </label>
            <Input
              inputType="number"
              inputClass="input"
              inputName="gasolina"
              inputText="Ex: 4.50"
              inputValue={gasolineInput ? gasolineInput : ""}
              onChange={(e) => setGasolineInput(Number(e.target.value))}
            />

            <button className="calc_btn">Calcular</button>
          </form>
        </section>

        {info && Object.keys(info).length > 0 && (
          <footer className="footer_result">
            <Title titleWeight={2}>{info.resultMessage}</Title>

            <span>Etanol: {info.totalEthanol}</span>
            <span>Gasolina: {info.totalGasoline}</span>
          </footer>
        )}
      </main>
    </>
  );
};

export default App;
