import {useEffect, useState} from "react";

export const User = ({name}) => {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  // All useEffects will be run for the first time irrespective of the dependencies.
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('setInterval');
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [count]);

  // useEffect(() => {
  //   console.log('useEffect for count2');
  // }, [count2]);




  return (
    <div className="user-card">
      <button onClick={() => {
        setCount(count+1);
      }}>Click</button>
      <button onClick={() => {
        setCount2(count2+1);
      }}>Click for count2</button>
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Bangalore</h3>
      <h4>Email: hemanthnikhilp@gmail.com</h4>
    </div>
  )
}
