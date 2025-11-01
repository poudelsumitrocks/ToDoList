
// Promise chainning example
import React, { useState } from 'react';

export default function MyPromise() {
  const [result, setResult] = useState("");

  const myPromise = (message, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let a = 1 + 1;
        if (a === 2) {
          setResult(message);   // update result each step
          resolve(message);
        } else {
          reject("Something went wrong");
        }
      }, delay);
    });
  };

  const handleMAkeTea = () => {
    myPromise("lightup the gas", 1000)
      .then(() => myPromise("boil the water", 3000))
      .then(() => myPromise("add tea leaves", 2000))
      .then(() => myPromise("add sugar", 2000))
      .then(() => myPromise("Tea ready", 2000))
      .catch(err => setResult(err));
  };

  return (
    <>
      <button onClick={handleMAkeTea}>BUtton</button>
      <h1>{result}</h1>
    </>
  );
}
