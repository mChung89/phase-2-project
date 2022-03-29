import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Search({ searchFilter, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <Box
      sx={{
        pt: 5,
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        sx={{ bgcolor: "white" }}
        value={searchFilter}
        fullWidth
        label="Search Recipes Here"
        id="fullWidth"
        onChange={handleChange}
      />
    </Box>
  );
}

export default Search;
