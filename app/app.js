import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';


export default function App() { 
  const dispatch = useDispatch();
  const router = useRouter();
  const [result,setResult] = useState("");
  const numbers = ['1','2','3','4','5','6','7','8','9','0','/','x','-','+','.'];
  function Car(props) {
    return <button name={props.number} onClick={handleClick}>{ props.number }</button>;
  }
  const handleClick2 = () => {
    router.push('/nextPage');
  };
  const  handleClick = (e) => {
    setResult(result.concat(e.target.name));  
    console.log("onclick");
  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0,-1));  
  }
  const calculate = () => {  
    try{
      setResult(eval(result).toString());
    }catch(err){
      setResult("Error")
    }
  }
  const handlesubmit = (e) => {
    console.log(typeof(result));
    console.log("submitted");
    e.preventDefault();
    // useDispatch(login({
    //   result:result
    // }));
    dispatch(login(result));
  }
  return (
    <>
    <div className="container">
      <form id="myForm" onSubmit={(e)=>handlesubmit(e)}>  
        <input type="text" value={result}></input>
      </form>
      <div className="keypad">
        <button className="highlight" onClick={clear} id ="clear">Clear</button>
        <button className="highlight" onClick={handleClick2}>N</button>
        <button className="highlight"onClick={backspace} id = "backspace">C</button>
        <button className="highlight"onClick={calculate} id="result">=</button>        
        {numbers.map((no) => <Car number = {no}/>)}
        <input type="submit" value="Send" id="Hello" form='myForm'/>
      </div>
    </div>
    </>
  )
}