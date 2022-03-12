import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import monedas from "../data/monedas";
import UseSelectMonedas from "../hooks/UseSelectModedas";
import Error from "./error";

const InputSubmit = styled.input`
  background-color: #81b71a;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 30px;

  transition: background-color.3s ease;
  &:hover {
    background-color: #a0e025;
    cursor: pointer;
  }
`;

export const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = UseSelectMonedas("Elige tu moneda", monedas);
  const [cripto, SelectCripto] = UseSelectMonedas(
    "Elige tu criptomoneda",
    criptos
  );

  useEffect(() => {
    const ConsultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return objeto;
      });
      setCriptos(arrayCriptos);
    };
    ConsultarApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, cripto].includes("")) {
      setError(true);

      return;
    }

    setError(false);
    setMonedas({ moneda, cripto });
  };

  return (
    <>
      {error && <Error>todos los campos son requeridos</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCripto />

        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </>
  );
};
