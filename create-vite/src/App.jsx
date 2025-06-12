import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [fruits, setFruits] = useState(["Orange", "Apple"]);

  const [drinks, setDrinks] = useState(["coffee", "milk", "milo"]);
  const [idol, setIdol] = useState({
    name: "Baekhyun",
    group: "EXO",
    birthdate: "1994/5/6",
    isBusy: true,
  });

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (!name) {
      setError("Please Enter name ");
    } else if (name.trim() === "") {
      setError("All characters are space , please enter again");
    } else {
      setError("");
    }
  }, [name]);

  return (
    <>
      <p>Count:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <ol>
        {drinks.map((drink) => (
          <li key={drink}>{drink}</li>
        ))}
      </ol>
      <p>Name : {idol.name}</p>
      <p>Group Name : {idol.group}</p>
      <p>Birthdate :{idol.birthdate}</p>
      {/* <p>Status :{idol.isBusy ? <p>"BUsy"</p> : <p>"NotBUsy"</p>}</p> */}

      <button onClick={() => setFruits([...fruits, "PineApple"])}>Add</button>

      <button onClick={() => setDrinks([...drinks, "Coffee Latte"])}>
        Add Drinks
      </button>

      <button
        onClick={() =>
          setIdol((prev) => {
            return {
              ...prev,
              isBusy: !idol.isBusy,
            };
          })
        }
      >
        Add Idol Info
      </button>

      <form>
        <label htmlFor="name">Enter your name</label>

        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{error}</p>
      </form>
    </>
  );
};

export default App;
