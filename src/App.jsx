/* eslint-disable no-undef */
import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  //add useState here 👇🏻
  const [userDrink, setUserDrink] = useState();

  const greeting = "Welcome to our cafe";
  // const userDrink = undefined; (removing this <-- code)

  return (
    <div className="App">
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};
