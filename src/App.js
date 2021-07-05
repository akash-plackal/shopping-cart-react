import React from "react";
import Navbar from "./Navbar";
import Gretter from "./Gretter";
import Counter from "./Counter";
import Thumb from "./Thumb";
import Cart from "./Cart";

const items = [
  { id: 1, name: "apple", price: 2.33, qty: 2 },
  { id: 2, name: "mango", price: 5.88, qty: 1 },
  { id: 3, name: "grape", price: 8.44, qty: 11 },
];

function App() {
  return (
    <>
      <Cart initialItems={items} />
      {/* <Thumb />
      <Counter step={5} />
      <Counter />
      <Navbar />
      <Gretter name="akash" age="33" /> */}
      {/* <h1>hello world</h1> */}
    </>
  );
}

export default App;
