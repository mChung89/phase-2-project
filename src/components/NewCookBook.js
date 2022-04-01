import { useState } from "react";
import { Box, Paper, Typography, TextField, Button} from "@mui/material"


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
      <Paper sx={{ mt:6, maxWidth: "80%",  position:'relative', left: "15%" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ p: 3}}
        >
          <Typography sx={{ p: 1 }} style={{fontSize: "2rem"}}>
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
            sx={{ m: 1, left: 7 }}
            type="submit"
            value="Submit new cookbook!"
          >
            Click Here to Submit New Cookbook!
          </Button>
        </Box>
      </Paper>
  );
}

export default NewCookBook;
