import React from "react";
import { Duck } from "./demo";

type Props = {
  duck: Duck;
};

const DuckItem = ({duck}: Props) => {
  return (
    <div key={duck.name}>
      <span>{duck.name}</span>
      <button onClick={
        () => duck.makeSound(duck.name + "quack")}
      >
        Make sound
      </button>
    </div>
  );
};

export default DuckItem;
