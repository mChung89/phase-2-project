import { useState, useEffect } from 'react'

function NewRecipe({ handleNewRecipe }) {
  const defaultState = {
    author: '',
    name: '',
    image: '',
    ingredients: [],
    directions: [],
  }
  const [formData, setFormData] = useState(defaultState)
  const [ingredient, setIngredient] = useState('')
  const [direction, setDirection] = useState('')

  function handleChange (e) {
    if (e.target.name === "ingredients") {
      setIngredient(() => e.target.value)
    } else if (e.target.name === "directions") {
      setDirection(() => e.target.value)
    } else {
      const key = e.target.name
      const value = e.target.value
      setFormData({...formData, [key]:value})
    }
  }

  function handleStepSubmit (e) {
    e.preventDefault()
    const key = e.target.name
    if (key === "ingredients") {
      setFormData({...formData, [key]: [...formData[key], ingredient]})
      setIngredient('')
    } else if (key === "directions") {
      setFormData({...formData, [key]: [...formData[key], direction]})
      setDirection('')
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3001/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(handleNewRecipe)
  }
  
  return (
    <div className="App">
      <p>NewRecipe</p>
      <form onSubmit={handleSubmit}>
        <h2>Add a recipe!</h2>
        <label htmlFor='name'>Recipe name</label>
        <input name='name' onChange={handleChange} value={formData.name}/>
        <br></br>
        <label htmlFor='author-name'>Author Name</label>
        <input name='author' onChange={handleChange} value={formData.author}/>
        <br></br>
        <label htmlFor="image">Image URL: </label>
        <input onChange={handleChange} value={formData.image} name="image"/>
        <br></br>
        <label htmlFor="ingredients">Ingredients </label>
        <input onChange={handleChange} value={ingredient} name="ingredients" />
        <button name='ingredients' onClick={handleStepSubmit}>Enter ingredient</button>
        <br></br>
        <label htmlFor="directions">List directions here! </label>
        <input onChange={handleChange} value={direction} name="directions" />
        <button name='directions' onClick={handleStepSubmit}>Enter step</button>
        <br></br>
        <input type="submit" value="Submit new recipe!" />
      </form>
      
    </div>
  );
}

export default NewRecipe;
