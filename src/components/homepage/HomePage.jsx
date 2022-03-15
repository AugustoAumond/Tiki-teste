import React from 'react';
import styled from 'styled-components';
import BackgroundandTitles from '../background/Background';
import DivEvents from '../divevents/DivEvents';
import Register from '../divregister/DivRegister';


const user = `${process.env.PUBLIC_URL}/imagens/Usuario.png`

function HomePage() {

    return (
    
      <Body>
        <BackgroundandTitles/>
        <DivEvents/>
        <Register/>   
      </Body>   
  );
}
export default HomePage;


const Body = styled.div`
position: relative;
width: 1780px;
height: 3000px; 
`


