import React from 'react';
import styled from 'styled-components';
import Background from '../background/Background';
import DivBody from '../divbody/DivBody';
import Register from '../divregister/DivRegister';


const user = `${process.env.PUBLIC_URL}/imagens/Usuario.png`

function HomePage() {

    return (
    
      <Body>
        <Background/>
        <DivBody/>
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


