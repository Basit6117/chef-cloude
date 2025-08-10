import './App.css'
import ReactMarkdown from 'react-markdown'
const DefaultRecipe = (props) => {
  return (
 <section className='default-rec-con'>
  <h2>Chef Cloude Recommendations</h2>
    <article className="suggested-recipe-container" aria-live="polite">
      <ReactMarkdown>{props.storerecipe}</ReactMarkdown> 
    </article>
</section>
  )
}

export default DefaultRecipe
