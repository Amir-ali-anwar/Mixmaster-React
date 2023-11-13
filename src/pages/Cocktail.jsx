import axios from "axios";
import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import CockTailWrapper from "../assets/wrappers/CocktailPage";
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data };
};
const Cocktail = () => {
  const { id, data } = useLoaderData();
  if(!data) return <Navigate to='/' />
  const singleDrink = data?.drinks[0];
  //  converting the interigents into array method 1
  // const validData = Object.keys(singleDrink).filter((item) => {
  //   return item.startsWith("strIngredient");
  // });
  // const ingredientsArray= validData?.map((item)=>singleDrink[item]).filter((value)=> value !== null)
  // console.log(ingredientsArray);

  // Method 2

  const validIngeridents= Object.keys(singleDrink).filter((item)=>item.startsWith("strIngredient")).reduce((acc,curr)=>{
      const value= singleDrink[curr]
      if(value !== null){
        acc.push(value)
      }
      return acc
  },[])
  console.log(validIngeridents);
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  return (
    <CockTailWrapper>
      <header>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </header>
      <div className="drink">
        <img src={image} alt="" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {
              validIngeridents?.map((singleIng,index)=>{
               return <span className="ing" key={index}>{singleIng},</span>
              })
            }
          </p>
        </div>
      </div>
    </CockTailWrapper>
  );
};

export default Cocktail;
