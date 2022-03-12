import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato" sans-serif;
  display: flex;
  align-items:center;
  gap: 1rem;
  margin-top: 30px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Imagen= styled.img`

display: block;
width: 110px;
`

export const Resultado = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cotizacion;

  return (
    <Contenedor>
      <Imagen src={`https://www.cryptocompare.com//${IMAGEURL}`} alt="imagen cripto" />
      <div>
      <Precio>
        El Precio es de: <span>{PRICE}</span>
      </Precio>
      <Texto>
        Precio mas alto del día: <span>{HIGHDAY}</span>
      </Texto>
      <Texto>
        Precio mas bajo del día: <span>{LOWDAY}</span>
      </Texto>
      <Texto>
        Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
      </Texto>
      <Texto>
        Ultima actualizacion: <span>{LASTUPDATE}</span>
      </Texto>
      </div>
    </Contenedor>
  );
};