import styled from 'styled-components';
import { useState } from 'react';

function Register () {
    const [checked, setChecked] = useState(false);

    return (
    <DivRegister>
       <div id="box">
           <p id='txt'> CADASTRE-SE E FIQUE POR DENTRO DAS NOVIDADES</p>
           <input id='name'  placeholder='Nome'/>
            <input id='email' placeholder='Email' />
            <input id="radio" type='radio' checked={checked===true} onClick={(()=>setChecked(!checked))}/> <p id='check'>Declaro que li e aceito a politica de privacidade</p>
            <button id='enviar'> <p id='button'> ENVIAR </p> </button>


       </div>    
    </DivRegister>
)}

export default Register;

const DivRegister = styled.div`
    #box{
        background: #26093A;
        position: absolute;
        top: 2600px;
        left: 1120px;
        width: 500px;
        height: 500px;
        border-radius: 40px;
    }

        #txt{
            font-size: 18px;
            color: white;
            position: absolute;
            top: 65px;
            width: 333px;
            text-align: center;
            left: 93px;
            font-weight: bold;
        }

        #name{
            background: #26093A;
            border-radius: 50px;
            border: 1px solid white;
            position: absolute;
            width: 400px;
            height: 50px;
            background: #26093A;
            top: 200px;
            left: 45px;
        }

        #email{
            background: #26093A;
            border-radius: 50px;
            border: 1px solid white;
            position: absolute;
            width: 400px;
            height: 50px;
            background: #26093A;
            top: 274px;
            left: 45px;
        }

        #radio{
            position: absolute;
            top: 358px;
            left: 36px;
            width: 20px;
            height: 20px;
        }

        #check{
            color: white;
            position: absolute;
            top: 345px;
            left: 72px;
        }

        #enviar{
            color: white;
            position: absolute;
            top: 400px;
            left: 51px;
            width: 400px;
            height: 65px;
            border-radius: 50px;
        }

        #button {
            font-size: 18px;
            font-weight: bold;
            color: black;
        }
 
`

