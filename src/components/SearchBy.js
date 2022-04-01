import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material"

export default function SearchBy({ setSearchBy }) {

  function handleChange (e) {
    setSearchBy(e.target.value)
  };

  return (
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Search By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue="name"
          label="filter"
          onChange={handleChange}
          sx={{bgcolor: 'white'}}
        >
          <MenuItem value="name">Recipe Name</MenuItem>
          <MenuItem value="ingredient">Ingredient</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}