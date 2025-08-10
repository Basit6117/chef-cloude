import { useEffect, useRef, useState } from "react";
import "./MainLayout.css"
import DefaultRecipe from "../../DefaultRecipe";
import IngredientsList from "../../IngredientsList";
import {getRecipeFromMistral} from '../../ai'
const MainLayout = () => {
  // const HF_ACCESS_KEY = "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"
   const [ingredients, setIngredients] = useState(["chicken", "all the main spices", "corn", "heavy cream", "pasta"])
   const [storerecipe, setStorerecipe] = useState("")
   const recipeSection = useRef(null)
//form action  react 19
        function handleForm(formData){
          const inpData = formData.get("ingre");
          setIngredients(
            [...ingredients, inpData]
          )
          }

        async  function handleClick(){
          const generatedRecipe = await getRecipeFromMistral(ingredients)
            setStorerecipe(
              generatedRecipe
            )
          }
          useEffect(()=>{ 
            if(storerecipe != "" && recipeSection.current != null){
             recipeSection.current.scrollIntoView({ behavior: "smooth" }) 
            }
          },[storerecipe])
        
  return (
    <main>
      <form action={handleForm} className="search-box">
        <input type="text"
          placeholder='e.g oregano'
          name="ingre"
          required
         />
         {/* 
         ingredients
         dataItems
         handleSuggestedRecipe
         */}
        <button>Add Ingredient</button></form>
<IngredientsList ingredients={ingredients} handleClick={handleClick} ref={recipeSection}/>
{
storerecipe && <DefaultRecipe storerecipe={storerecipe} />
}
            

    </main>
  )
}

export default MainLayout
