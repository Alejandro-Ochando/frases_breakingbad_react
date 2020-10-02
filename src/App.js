import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';


//Styled components
const Contenedor = styled.div`
  display:flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction:column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient( top left, #0f574e 0%, #007d35 40%, #007d35 100%  );
  background-size:305px;
  font-family: 'Arial', Arial, Helvetica, sans-serif;
  color: #FFF;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  border-radius: 0.5rem;

  :hover{
    cursor:pointer;
    background-size:850px;
  }
`;



function App() {

  //State de las frases
  const [frase, guardarFrase] = useState({});

  //Consulta API
  const consultarApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
   
  }
 
  //Estate inicial
  useEffect(() => {
    consultarApi();
  },[]);



  return (

    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={consultarApi}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
    
  );
}

export default App;