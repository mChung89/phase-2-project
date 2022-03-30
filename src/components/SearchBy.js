import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SearchBy({ setSearchBy }) {

  function handleChange (e) {
    setSearchBy(e.target.value)
  };

  return (
    <Box sx={{ pl: 2, pt: 5, minWidth: 200 }}>
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