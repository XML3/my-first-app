/* eslint-disable react/prop-types */
import { Button } from "./ui/Button";
export const DrinkChoice = ({ drink, clickFn }) => {
  return (
    <>
      <h2>Choice: {drink.name}</h2>
      <img src={drink.imgUrl} width={100} height={100} alt={drink.alt}></img>
      <p>Your drink will be ready in just a few minutes</p>
      <Button text={"Change Selection"} clickFn={() => clickFn()} />
    </>
  );
};
