import {useState} from 'react';
export const AdviceApp = () => {
const[advice,setAdvice]=useState("Please Click button to Get Advice ");
const[count,setCount]=useState(0)
 async function changeAdvice()
 {
   const res =await fetch("https://api.adviceslip.com/advice")
   const data = await res.json();
   setAdvice(data.slip.advice)
   setCount(count+1);
   
 }
  return (
    <div>
      <h1>Welcome to Personal Mentor King 😁</h1>
        <h3>{advice}💜</h3>
        <button onClick={changeAdvice}>Get Advice </button>
        <p>You have read <b>{count}</b> pieces of advice</p>
    </div>
  )
}
