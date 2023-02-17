import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

 function Counter() {
 let [count, setCount] = useState(0);
 const handleIncrement = () => {
  setCount(count=count+1)
 };
 const handleIncrementBy2 = () => {
  setCount(count=count+2)
 };
 const handleDecrement = () => {
   if (count>0){
  setCount(count=count-1)}
  };
 const handleReset = () => {
  setCount(count=0)

  };
  return (
  <div class='container' >
  <h2>Counter Application</h2>
  <div>
    <h4>&emsp;&emsp;{count}  </h4></div>
  <div>
  <button class="btn btn-success" onClick={handleIncrement}> + </button> &emsp;
  <button class="btn btn-warning" onClick={handleDecrement}> - </button> &emsp;
  <button class="btn btn-success" onClick={handleIncrementBy2}> +2 </button> &emsp;
  <button class="btn btn-info"onClick={handleReset}> Reset </button> &emsp;
  </div>
  </div>
  );
 }
 export default Counter;