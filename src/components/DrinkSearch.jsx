/* eslint-disable react/prop-types */
import { useState } from "react";
import { availableDrinks } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { DrinkList } from "./DrinkList";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label> Search for your favorite drinks: </label>
      <TextInput changeFn={handleChange} />
      <DrinkList clickFn={clickFn} drinks={matchedDrinks} />
    </>
  );
};
