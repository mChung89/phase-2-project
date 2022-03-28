import { useState, useEffect } from 'react'

function NewRecipe() {
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
  const [cookbookData, setCookBookData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/allcookbooks/cookbook1/')
    .then(resp => resp.json())
    .then(data => setCookBookData(data))
  },[])
  console.log(cookbookData)

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
    } else if (key === "directions") {
      setFormData({...formData, [key]: [...formData[key], direction]})
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    fetch('http://localhost:3001/allcookbooks/cookbook1/', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...cookbookData, recipes: [...cookbookData.recipes, formData]})
    })
    .then(res => res.json())
    .then(data => console.log(data))
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
