import React, { use, useEffect, useState } from 'react'
const IngredientsList = ({ingredients, handleClick, ref}) => {
      const dataItems = ingredients.map((ingredient, index)=>{
            return <li className="list" key={index}>{ingredient}</li>
          })

  return (
    <>
              { ingredients.length  > 0 &&

            <section className="ingredients-container">
         <h2>Ingredients on hands:</h2>
              {dataItems}
         
              { ingredients.length > 2 ?
              <div className="get-recipe"
              ref={ref}>
                <div className="child1">
                <h4>get recipe</h4>
                <p>Generate a recipe from your list of ingredients</p>
                </div>
                <div className="btn">
                <button onClick={handleClick} >Get a recipe</button>
              </div>
              </div>
              : null
              }
             </section>
}
    </>
  )
}

export default IngredientsList
