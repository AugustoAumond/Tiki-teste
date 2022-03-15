
import { useEffect, useState } from 'react';
import styled from 'styled-components'

function Teste(){
const [index, setIndex] = useState(0)

    const events = [
            {id:1, foto: 'img/imagem.jpg', date: '16 DE MARÇO' },
            {id: 2, foto: 'img/imagem2.jpg', date:'17 DE MARÇO'},
            {id: 3, foto: '', date:'18 DE MARÇO'},
            {id: 4, foto: '', date:'19 DE MARÇO'},
            {id: 5, foto: '', date:'20 DE MARÇO'},
            {id: 6, foto: '', date:'21 DE MARÇO'},
            {id: 7, foto: '', date:'22 DE MARÇO'},
            {id: 8, foto: '', date:'23 DE MARÇO'}
            ]

    useEffect (()=>{},[index])
    
    const user = `${process.env.PUBLIC_URL}/imagens/Usuario.png`
    
    function FourItens (index){
        let newList = [];
        if (index === 0){
        for (index = 0; index < 4; index++) {
               newList.push(events[index]);
        }
        return newList;
        }else if (index > 3 && index < 7){
            for (index === 4; index < 8; index++) {
                newList.push(events[index]);
            }
        console.log(newList);
        return newList;
        }
    }

    const AddIndex = () => {
        setIndex(4);
        FourItens();

    }

    const IndexZero = () => {
        setIndex(0);
        FourItens();

    }

    return(
        <Body>
        {FourItens(index).map((list, index)=>(
            list.foto !== '' ?
                <div key={index} id={`events${index}`}>
                <img id={`card`} src={list.foto} alt="" />
                <p id='date'> {list.date}</p></div> 
                    :
                <div key={index} id={`events${index}`} >
                <div id={`card`} alt="" >
                <svg id={`lock`} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="17.638" height="24" viewBox="0 0 17.638 24">
                <defs>
                    <clipPath id="clip-path">
                    <rect id="Retângulo_8" data-name="Retângulo 8" width="17.638" height="24" fill="#fff"/>
                    </clipPath>
                </defs>
                <g id="Grupo_3" data-name="Grupo 3" clip-path="url(#clip-path)">
                    <path id="Caminho_2" data-name="Caminho 2" d="M0,21.505V11.622A2.5,2.5,0,0,1,2.495,9.127h.054V5.493A5.5,5.5,0,0,1,8.041,0H9.6a5.5,5.5,0,0,1,5.495,5.493V9.127h.054a2.5,2.5,0,0,1,2.493,2.495v9.884A2.5,2.5,0,0,1,15.145,24H2.495A2.5,2.5,0,0,1,0,21.505m9.772-2.183V17.259a1.759,1.759,0,0,0,.312-.249,1.788,1.788,0,1,0-2.528,0,1.759,1.759,0,0,0,.312.249v2.063a.869.869,0,0,0,.87.869H8.9a.868.868,0,0,0,.869-.869m3.241-10.2V5.751A3.673,3.673,0,0,0,9.34,2.079H8.3A3.673,3.673,0,0,0,4.627,5.751V9.127Z" fill="#fff" fill-rule="evenodd"/>
                </g>
                </svg>  
                </div> 
                <p id='date'> {list.date}</p> 
                </div> ))}

                <button onClick={(()=> AddIndex())} />
                <button onClick={(()=> IndexZero())} />

            {/*<div id='events1'>
            <img id='card1' src="img/imagem2.jpg" />
            <p id='date1'> 17 DE MARÇO</p></div>

            <div id='events2'>
            <div id='card' alt="" >
                <svg id="lock" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="17.638" height="24" viewBox="0 0 17.638 24">
                <defs>
                    <clipPath id="clip-path">
                    <rect id="Retângulo_8" data-name="Retângulo 8" width="17.638" height="24" fill="#fff"/>
                    </clipPath>
                </defs>
                <g id="Grupo_3" data-name="Grupo 3" clip-path="url(#clip-path)">
                    <path id="Caminho_2" data-name="Caminho 2" d="M0,21.505V11.622A2.5,2.5,0,0,1,2.495,9.127h.054V5.493A5.5,5.5,0,0,1,8.041,0H9.6a5.5,5.5,0,0,1,5.495,5.493V9.127h.054a2.5,2.5,0,0,1,2.493,2.495v9.884A2.5,2.5,0,0,1,15.145,24H2.495A2.5,2.5,0,0,1,0,21.505m9.772-2.183V17.259a1.759,1.759,0,0,0,.312-.249,1.788,1.788,0,1,0-2.528,0,1.759,1.759,0,0,0,.312.249v2.063a.869.869,0,0,0,.87.869H8.9a.868.868,0,0,0,.869-.869m3.241-10.2V5.751A3.673,3.673,0,0,0,9.34,2.079H8.3A3.673,3.673,0,0,0,4.627,5.751V9.127Z" fill="#fff" fill-rule="evenodd"/>
                </g>
                </svg>
            </div>
            <p id='date2'> 18 DE MARÇO</p>
            </div>

            <div id='events3'>
            <div id='card' alt="" >
                <svg id="lock" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="17.638" height="24" viewBox="0 0 17.638 24">
                <defs>
                    <clipPath id="clip-path">
                    <rect id="Retângulo_8" data-name="Retângulo 8" width="17.638" height="24" fill="#fff"/>
                    </clipPath>
                </defs>
                <g id="Grupo_3" data-name="Grupo 3" clip-path="url(#clip-path)">
                    <path id="Caminho_2" data-name="Caminho 2" d="M0,21.505V11.622A2.5,2.5,0,0,1,2.495,9.127h.054V5.493A5.5,5.5,0,0,1,8.041,0H9.6a5.5,5.5,0,0,1,5.495,5.493V9.127h.054a2.5,2.5,0,0,1,2.493,2.495v9.884A2.5,2.5,0,0,1,15.145,24H2.495A2.5,2.5,0,0,1,0,21.505m9.772-2.183V17.259a1.759,1.759,0,0,0,.312-.249,1.788,1.788,0,1,0-2.528,0,1.759,1.759,0,0,0,.312.249v2.063a.869.869,0,0,0,.87.869H8.9a.868.868,0,0,0,.869-.869m3.241-10.2V5.751A3.673,3.673,0,0,0,9.34,2.079H8.3A3.673,3.673,0,0,0,4.627,5.751V9.127Z" fill="#fff" fill-rule="evenodd"/>
                </g>
                </svg>  
            </div> 
            <p id='date2'> 19 DE MARÇO</p> 
            </div>*/}
        </Body>
        
    )}

    export default Teste;

    const Body = styled.div`
    #events0{
        position: absolute;
        top: 1506px;
        left: 80px;
    }

    #events1{
        position: absolute;
        top: 1506px;
        left: 364px;
    }

    #events2{
        position: absolute;
        top: 1506px;
        left: 648px;
    }
    
    #events3{
        position: absolute;
        top: 1506px;
        left: 932px;
    }
    
    #card{
        position: absolute;
        background: #1f062e;
        left: 19px;
        top: 11px;
        width: 230px;
        height: 130px;
        border-radius: 20px;
    }

    #card1 {
        position: absolute;
        background: #1f062e;
        left: 19px;
        top: 11px;
        width: 230px;
        height: 130px;
        border-radius: 20px;
    } 
    
    #date {
        position: absolute;
        left: 70px;
        top: 125px;
        width: 230px;
        border-radius: 20px;
        font-size: 18px;
        font-weight: bold;
        color: black;
        font-family: 'Open-sans', sans-serif;
    }
    
    #lock{
        top: 44px;
        position: absolute;
        left: 106px;
        height: 32px;
    }

    button{
        height: 20px;
        width: 40px;
    }
   
    `