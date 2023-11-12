import React from "react";
import CockTailWrapper from "../assets/wrappers/CocktailList";
import CockTailCard from "../components/CocktailCard";
const Cocktail = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }
  const formattedDrinks = drinks?.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <CockTailWrapper>
      {formattedDrinks?.map((item) => (
      <CockTailCard key={item.id} {...item} />
      ))}
    </CockTailWrapper>
  );
};

export default Cocktail;
