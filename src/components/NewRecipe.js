import { useState } from 'react'

function NewRecipe() {
  const defaultState = {
    name: '',
    image: '',
    ingredients: [],
    directions: [],
  }
  const [formData, setFormData] = useState(defaultState)
  const [author, setAuthor] = useState('')

  function handleChange (e) {
    const key = e.target.name
    const value = e.target.value
    setFormData({...formData, [key]:value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/${author}/recipes/`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
  }

  console.log(formData)
  return (
    <div className="App">
      <p>NewRecipe</p>
      <form onSubmit={handleSubmit}>
        <h2>Add a recipe!</h2>
        <label htmlFor='name'>Recipe name</label>
        <input name='name' onChange={handleChange} value={formData.name}/>

        <label htmlFor='author-name'>Author Name</label>
        <input name='author_name' onChange={handleChange} value={formData.author_name}/>

        <label htmlFor="image">Image URL: </label>
        <input onChange={handleChange} value={formData.image} name="image"/>

        <label htmlFor="ingredients">Ingredients </label>
        <input onChange={handleChange} value={formData.ingredients} name="ingredients" />
        <button>Enter ingredient</button>

        <label htmlFor="directions">List directions here! </label>
        <input onChange={handleChange} value={formData.directions} name="directions" />
        <button>Enter step</button>

        <input type="submit" value="Submit new recipe!" />
      </form>
      
    </div>
  );
}

export default NewRecipe;
