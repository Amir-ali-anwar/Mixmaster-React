import React from 'react'
import CocktailsCard from '../assets/wrappers/CocktailCard'
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
      </div>
    </CocktailsCard>
  )
}

export default CocktailCard