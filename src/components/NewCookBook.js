import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


function NewCookBook({ handleNewCookBook }) {
  const defaultState = {
    author: "",
    imageUrl: "",
  };

  const [formData, setFormData] = useState(defaultState);

  function handleChange(e) {
      const key = e.target.name;
      const value = e.target.value;
      setFormData({ ...formData, [key]: value });
    }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("cookbook form data:", formData);
    fetch("http://localhost:3001/cookbooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(handleNewCookBook);
  }

  return (
    <Stack sx={{ m: 5 }} direction="row" justifyContent="center" spacing={3}>
      <Paper sx={{ maxWidth: "50%" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          direction="column"
          sx={{ p: 3 }}
        >
          <Typography sx={{ p: 1 }} variant="h4">
            Add a Cookbook!
          </Typography>
          <TextField
            fullWidth
            name="author"
            label="Create Cookbook"
            value={formData.author}
            onChange={handleChange}
            sx={{ m: 1, bgcolor: "white" }}
          >
          </TextField>
          <TextField
            fullWidth
            name="imageUrl"
            label="Image URL"
            maxRows={1}
            value={formData.imageUrl}
            onChange={handleChange}
            sx={{ m: 1, bgcolor: "white" }}
          />
          <Button
            variant="contained"
            sx={{ m: 1 }}
            type="submit"
            value="Submit new cookbook!"
          >
            Click Here to Submit New Cookbook!
          </Button>
        </Box>
      </Paper>
    </Stack>
  );
}

export default NewCookBook;
