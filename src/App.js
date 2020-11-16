import React, { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  // How to retreive a value(string/bool/int) in local storage
  useEffect(() => {
    const persistedCounter = localStorage.getItem("counter");
    if (persistedCounter) {
      setCounter(persistedCounter);
    }
  }, []);

  // How to store and reteive an object in local storage
  useEffect(() => {
    const persistedUser = JSON.parse(localStorage.getItem("user"));
    if (persistedUser) {
      console.log(persistedUser);
    } else {
      const user = {
        name: "Abu bakkar",
        email: "abubakkar@gmail.com"
      };
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, []);

  const onIncreaseCounter = () => {
    setCounter(counter + 1);
    // How to store a value(string/bool/int) in local storage
    localStorage.setItem("counter", counter + 1);
  };

  const onDecreaseCounter = () => {
    setCounter(counter - 1);
    // How to store a value(string/bool/int) in local storage
    localStorage.setItem("counter", counter - 1);
  };

  return (
    <div className="App">
      <button onClick={onIncreaseCounter}>INCREASE</button>
      <br />
      <span>Counter: {counter}</span>
      <br />
      <button onClick={onDecreaseCounter}>DECREASE</button>
    </div>
  );
}
