import styled from "@emotion/styled";
import { Formulario } from "./components/Formulario";
import imagenCripto from "./img/imagen-criptos.png";
import { useState, useEffect } from "react";
import { Resultado } from "./components/Resultado";
import { Spinner } from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 90px;
  margin-bottom: 50px;
  font-size: 34px;

  &::affer {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

const App = () => {
  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);

  const { cripto, moneda } = monedas;

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const cotizacion = async () => {
        setCargando(true);
        setCotizacion({})
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda},EUR`;

        const data = await fetch(url);
        const resultado = await data.json();
        setCotizacion(resultado.DISPLAY[cripto][moneda]);
        setCargando(false);

        
      };

      cotizacion();
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen src={imagenCripto} alt="imagenes criptomonedas" />

      <div>
        <Heading>Cotiza Criptomonedas</Heading>
        <Formulario setMonedas={setMonedas} />

        {cargando && <Spinner />}
        {cotizacion.PRICE && <Resultado cotizacion={cotizacion} />}
      </div>
    </Contenedor>
  );
};

export default App;
