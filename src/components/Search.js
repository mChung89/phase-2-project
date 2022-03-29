import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Search() {
  function handleChange (e) {
    console.log(e.target.value)
  }
  return (
    <Box
      sx={{
        pt: 5,
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField sx={{ bgcolor: 'white'}} fullWidth label="Search Recipes Here" id="fullWidth" onChange={handleChange} />
    </Box>
  );
}

export default Search;
