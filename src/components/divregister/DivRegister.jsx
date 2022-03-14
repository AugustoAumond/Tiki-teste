import styled from 'styled-components';
import { useState } from 'react';
import './DivRegister.css';


function Register () {
    const [checked, setChecked] = useState(false);
    let name = document.querySelector('#name'); 
    let email = document.querySelector('#email');
    
    function Name(){         
        let name = document.querySelector('#name'); 
        name.style.border =' solid 1px #FC2BEE';
        name.style.color = '#FC2BEE'; 
        if (name.value === ''){
            name.style.border =' solid 1px white';
            name.style.color = 'none'; 
        }     
    }

    function Email(){   
        let email = document.querySelector('#email');
        email.style.border =' solid 1px #FC2BEE';
        email.style.color = '#FC2BEE';
        if (email.value === ''){
            email.style.border =' solid 1px white';
            email.style.color = 'none'; 
        }  
    }

    function OnCheck () {
        setChecked(!checked)
        let radio = document.querySelector('#radio');
        if (checked === true){
            radio.style.color = '#FC2BEE';
            radio.style.background = '#FC2BEE';
        }
    }

    function Enviar(){
        let list = JSON.parse(localStorage.getItem('list'));        
        if (name.value === null || name.value < 4){
            window.alert('Favor digitar um nome.')
        }
        else if (email.value === null || email.value.indexOf('@') === -1){
            window.alert('Por favor digite um email válido')
        } else if (checked === false){
            window.alert('É necessário aceitar a política de privacidade.')
        }else {
            let object = {name: name.value, email: email.value};
            if (list){
                list.push(object);
                localStorage.setItem('list', JSON.stringify(list));
            }else {
                localStorage.setItem('list', JSON.stringify([object]));
            }
            name.style.border =' solid 1px white';
            name.style.color = 'none'; 
            email.style.border =' solid 1px white';
            email.style.color = 'none';
            name.value = '';
            email.value = '';
            setChecked(false);
        }
    }
    return (
    <DivRegister>
       <div id="box">
           <p id='txt'> CADASTRE-SE E FIQUE POR DENTRO DAS NOVIDADES</p>
           <input id='name'  placeholder='     Nome'  onBlur={(()=> Name())}/>
            <input id='email' placeholder='     Email' onBlur={(()=> Email())}/>
            <input id="radio"  type='radio' checked={checked===true} onClick={(()=>OnCheck())} /> <p id='check'>Declaro que li e aceito a politica de privacidade</p>
            <button id='enviar' onClick={(()=> Enviar())}> <p id='button'> ENVIAR </p> </button>
            

       </div>    
    </DivRegister>
)}

export default Register;

const DivRegister = styled.div`
    
`

