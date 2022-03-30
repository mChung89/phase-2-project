import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";

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
    fetch("http://localhost:3001/images")
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)
    // fetch("http://localhost:3001/recipes", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then(handleNewRecipe);
  }

  return (
    <Stack direction="row" justifyContent="center" spacing={3}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        direction="column"
        sx={{ p: 3 }}
      >
        <h2>Add a recipe!</h2>
        <TextField
          fullWidth
          name="name"
          label="Recipe name"
          value={formData.name}
          onChange={handleChange}
          sx={{ m: 1, bgcolor: "white" }}
        />
        <TextField
          fullWidth
          select
          name="author"
          label="Select Cookbook"
          value={formData.author}
          onChange={handleChange}
          sx={{ m: 1, bgcolor: "white" }}
        >
          {renderAuthors}
        </TextField>
        <TextField
          fullWidth
          name="image"
          label="Image URL"
          maxRows={1}
          value={formData.image}
          onChange={handleChange}
          sx={{ m: 1, bgcolor: "white" }}
        />
        <TextField
          fullWidth
          name="ingredients"
          label="Ingredients"
          maxRows={1}
          value={ingredient}
          onChange={handleChange}
          sx={{ m: 1, bgcolor: "white" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                  <Button
                    variant="outlined"
                    name="ingredients"
                    onClick={handleStepSubmit}
                  >
                    List Ingredient!
                  </Button>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          name="directions"
          label="Directions"
          maxRows={1}
          value={direction}
          onChange={handleChange}
          sx={{ m: 1, bgcolor: "white" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                  <Button
                    variant="outlined"
                    name="directions"
                    onClick={handleStepSubmit}
                  >
                    List Directions!
                  </Button>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          sx={{ m: 1 }}
          type="submit"
          value="Submit new recipe!"
        >
          Click Here to Submit New Recipe!
        </Button>
      </Box>
      <Box sx={{ p: 3 }}>
        <Paper sx={{ bgcolor: "white", width: 600, height: 800 }}>
          <Container
            component="img"
            sx={{ maxHeight: "40%", m: 2}}
            src={formData.image}
            direction="column"
          />
          <Container direction="column" sx={{m: 2}}>
            <Typography variant="h5">
              {formData.name ? `Recipe Name: ${formData.name}` : null}
            </Typography>
            <Typography>
              {formData.author ? `Recipe by: ${formData.author}` : null}
            </Typography>
          </Container>
          <Grid container direction="row" sx={{ p: 3 }}>
            <Grid xs={6} item>
              <Typography>
                {formData.ingredients[0] !== undefined ? `Ingredients :` : null}
                <ul>
                  {formData.ingredients.map((each) => (
                    <li>{each}</li>
                  ))}
                </ul>
              </Typography>
            </Grid>
            <Grid xs={6} item>
              <Typography>
                {formData.directions[0] !== undefined ? `Directions: ` : null}
                <ol>
                  {formData.directions.map((each) => (
                    <li>{each}</li>
                  ))}
                </ol>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Stack>
  );
}

export default NewRecipe;
