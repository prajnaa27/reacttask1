import React, { useState } from "react";
import styled from 'styled-components';
import './style.css';

const Wrapper=styled.div`
border: 2px solid rgb(0, 221, 255);
border-radius: 8px;
box-sizing:content-box;
width: 800px;
height:auto;
margin-top:16px;
white-space:pre-wrap;
overflow-wrap:break-word;
`;


export const SubmitButton=() => {
    const[input,setInput]=useState("")
    const[noOfClicks,setnoOfClicks]=useState(0);
    const inc=() => setnoOfClicks(noOfClicks+1);
    

    return(
        <>
            <label>Enter something!</label>
            <br></br>
            <textarea className="input"
            placeholder="type...."
            id="input"
            value={input}
            onChange={e => setInput(e.target.value)}/>
            <br></br>
            <button onClick={()=>{
                inc();
            }}>SUBMIT</button>
            <Wrapper>
            <h2>RESULT</h2>
            <p>Click count : {noOfClicks}</p>
            <p>Typed text : {input}</p>
            </Wrapper>
            <p>-by Prajna:)</p>
        </>
    )

}