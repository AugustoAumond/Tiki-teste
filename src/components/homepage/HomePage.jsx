import React from 'react';
import styled from 'styled-components';
import Background from '../background/Background';
import DivBody from '../divbody/DivBody';

const user = `${process.env.PUBLIC_URL}/imagens/Usuario.png`

function HomePage() {

    return (
    
      <Body>
         <Background/>
          <DivBody/>
      </Body>   
  );
}
export default HomePage;


const Body = styled.div`
position: relative;
width: 1780px;
height: 3000px; 
`


