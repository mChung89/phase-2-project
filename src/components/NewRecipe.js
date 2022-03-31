import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import RecipePreview from "./RecipePreview";
import RecipeForm from './RecipeForm'
import { useNavigate } from 'react-router-dom'

function NewRecipe({ handleNewRecipe }) {
  const defaultState = {
    author: "",
    name: "",
    image: "",
    ingredients: [],
    directions: [],
  };
  const [formData, setFormData] = useState(defaultState);
  const [ingredient, setIngredient] = useState("");
  const [direction, setDirection] = useState("");
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cookbooks")
      .then((res) => res.json())
      .then(setAuthors);
  }, []);

  function handleChange(e) {
    if (e.target.name === "ingredients") {
      setIngredient(() => e.target.value);
    } else if (e.target.name === "directions") {
      setDirection(() => e.target.value);
    } else {
      const key = e.target.name;
      const value = e.target.value;
      setFormData({ ...formData, [key]: value });
    }
  }

  function handleStepSubmit(e) {
    e.preventDefault();
    const key = e.target.name;
    if (key === "ingredients") {
      setFormData({ ...formData, [key]: [...formData[key], ingredient] });
      setIngredient("");
    } else if (key === "directions") {
      setFormData({ ...formData, [key]: [...formData[key], direction] });
      setDirection("");
    }
  }

  const renderAuthors = authors.map((author) => (
    <MenuItem value={author.author} key={author.id}>
      {author.author}
    </MenuItem>
  ));

  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.ok ? res.json() : alert("Recipe could not be uploaded. Try again..."))
      .then(handleNewRecipe)
      .then(() => navigate(`/AllRecipes`))

  }

  return (
    <Stack sx={{ m: 5 }} direction="row" justifyContent="center" spacing={3}>
      <RecipeForm handleSubmit={handleSubmit} formData={formData} handleStepSubmit={handleStepSubmit} handleChange={handleChange}/>
      {formData.name ||
      formData.author ||
      formData.image ||
      formData.ingredients[0] ||
      formData.directions[0] ? (
        <RecipePreview formData={formData} />
      ) : null}
    </Stack>
  );
}

export default NewRecipe;
