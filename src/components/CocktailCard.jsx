import React from 'react'
import CocktailsCard from '../assets/wrappers/CocktailCard'
import { Link } from 'react-router-dom';
const CocktailCard = ({id,name,image,info,glass}) => {
  console.log(glass);
  return (
    <CocktailsCard>
      <div className='img-container'>
        <img src={image} alt={name} className='img' />
      </div>
      <div className='footer'>
      <h4>{name}</h4>
      <h5>{glass}</h5>
      <p>{info}</p>
      <Link to={`/cocktails/${id}`}>View details</Link>
      </div>
    </CocktailsCard>
  )
}

export default CocktailCard