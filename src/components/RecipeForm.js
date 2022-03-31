import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";


function RecipeForm({ handleChange, handleSubmit, handleStepSubmit, formData, ingredient, direction }) {
  const [authors, setAuthors] = useState([]);
  const renderAuthors = authors.map((author) => (
    <MenuItem value={author.author} key={author.id}>
      {author.author}
    </MenuItem>
  ));

  useEffect(() => {
    fetch("http://localhost:3001/cookbooks")
      .then((res) => res.json())
      .then(setAuthors);
  }, []);

  return (
    <Paper sx={{ maxWidth: "50%" }}>
    <Box
      component="form"
      onSubmit={handleSubmit}
      direction="column"
      sx={{ p: 3 }}
    >
      <Typography sx={{ p: 1 }} variant="h4">
        Add a Recipe!
      </Typography>
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
    </Paper>
  );
}

export default RecipeForm