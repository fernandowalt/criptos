import{j as f,n as a,r as d,R as S,a as w}from"./vendor.72bc18de.js";const C=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}};C();const E=[{id:"USD",nombre:"Dolar de estados unidos"},{id:"COP",nombre:"Peso colombiano"},{id:"EUR",nombre:"Euro"},{id:"GBP",nombre:"Libra esterlina"}],e=f.exports.jsx,s=f.exports.jsxs,y=f.exports.Fragment,N=a.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`,L=a.select`
  width: 100%;
  font-size: 20px;
  padding: 12px;
  border-radius: 10px;
`,k=(r,n)=>{const[i,c]=d.exports.useState("");return[i,()=>s(y,{children:[e(N,{children:r}),s(L,{value:i,onChange:t=>c(t.target.value),children:[e("option",{value:"",children:"Seleccione"}),n.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})]})]},z=a.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
`,P=({children:r})=>e(z,{children:r}),j=a.input`
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
`,D=({setMonedas:r})=>{const[n,i]=d.exports.useState([]),[c,o]=d.exports.useState(!1),[t,l]=k("Elige tu moneda",E),[p,h]=k("Elige tu criptomoneda",n);return d.exports.useEffect(()=>{(async()=>{const v=(await(await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD")).json()).Data.map(b=>({id:b.CoinInfo.Name,nombre:b.CoinInfo.FullName}));i(v)})()},[]),s(y,{children:[c&&e(P,{children:"todos los campos son requeridos"}),s("form",{onSubmit:u=>{if(u.preventDefault(),[t,p].includes("")){o(!0);return}o(!1),r({moneda:t,cripto:p})},children:[e(l,{}),e(h,{}),e(j,{type:"submit",value:"Cotizar"})]})]})};var I="/assets/imagen-criptos.c0430b0f.png";const A=a.div`
  color: #fff;
  font-family: "Lato" sans-serif;
  display: flex;
  align-items:center;
  gap: 1rem;
  margin-top: 30px;
`,m=a.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`,R=a.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`,M=a.img`

display: block;
width: 110px;
`,O=({cotizacion:r})=>{const{PRICE:n,HIGHDAY:i,LOWDAY:c,CHANGEPCT24HOUR:o,IMAGEURL:t,LASTUPDATE:l}=r;return s(A,{children:[e(M,{src:`https://www.cryptocompare.com//${t}`,alt:"imagen cripto"}),s("div",{children:[s(R,{children:["El Precio es de: ",e("span",{children:n})]}),s(m,{children:["Precio mas alto del d\xEDa: ",e("span",{children:i})]}),s(m,{children:["Precio mas bajo del d\xEDa: ",e("span",{children:c})]}),s(m,{children:["Variacion ultimas 24 horas: ",e("span",{children:o})]}),s(m,{children:["Ultima actualizacion: ",e("span",{children:l})]})]})]})};const U=()=>s("div",{className:"sk-fading-circle",children:[e("div",{className:"sk-circle1 sk-circle"}),e("div",{className:"sk-circle2 sk-circle"}),e("div",{className:"sk-circle3 sk-circle"}),e("div",{className:"sk-circle4 sk-circle"}),e("div",{className:"sk-circle5 sk-circle"}),e("div",{className:"sk-circle6 sk-circle"}),e("div",{className:"sk-circle7 sk-circle"}),e("div",{className:"sk-circle8 sk-circle"}),e("div",{className:"sk-circle9 sk-circle"}),e("div",{className:"sk-circle10 sk-circle"}),e("div",{className:"sk-circle11 sk-circle"}),e("div",{className:"sk-circle12 sk-circle"})]}),$=a.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`,F=a.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`,H=a.h1`
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
`,T=()=>{const[r,n]=d.exports.useState({}),[i,c]=d.exports.useState({}),[o,t]=d.exports.useState(!1),{cripto:l,moneda:p}=r;return d.exports.useEffect(()=>{Object.keys(r).length>0&&(async()=>{t(!0),c({});const g=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${l}&tsyms=${p},EUR`,x=await(await fetch(g)).json();c(x.DISPLAY[l][p]),t(!1)})()},[r]),s($,{children:[e(F,{src:I,alt:"imagenes criptomonedas"}),s("div",{children:[e(H,{children:"Cotiza Criptomonedas"}),e(D,{setMonedas:n}),o&&e(U,{}),i.PRICE&&e(O,{cotizacion:i})]})]})};S.render(e(w.StrictMode,{children:e(T,{})}),document.getElementById("root"));
