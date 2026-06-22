import { useState } from 'react';
import { useNavigate } from "react-router-dom";
export const Counter = () => {
   const [counter,setCounter] = useState(0);
    const Navigate = useNavigate();
   return <div>
   <h1>{counter}</h1>
      <button onClick={() => {setCounter(counter + 1)}} >Increase</button>
      <button onClick={() => {setCounter(0)}}>Zero</button>
      <button onClick={() => {setCounter(counter - 1)}}>Decrease</button>
      <button onClick={() => Navigate("/")}>Go Back To Home</button>
   </div>
};