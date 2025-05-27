import React from "react";

const Greeting = ({ name, age }) => {
  //props ={name : "Kanty"} props is object
  // let agePara = null;
  // if (age) {
  //   agePara = <h2>Your age is {age}</h2>;

  // }
  const lists = ["MacBook", "Window", "Linux"];

  return (
    <>
      <h1>Hello {name}</h1>
      {/* {age ? <h2>Your age is {age}</h2> : null} */}
      {age && <h2>Your age is {age}</h2>}
      <p>This is paragraph</p>
    {  lists.map((list)=>(<p>{list}</p>) )}
    </>
  );
};

export default Greeting;
