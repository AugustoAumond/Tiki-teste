import react from 'react';
import styled from 'styled-components';

function Background () {
    
    return <DivImg>
            <img src="img/Background.jpg" alt="" /> 
        </DivImg>

}

export default Background;


const DivImg = styled.div`
    img {       
        position: relative;
        top: 22px;
        left: 272px;
        width: 562px;
        height: 966px;
    } 
    
`