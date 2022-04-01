import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Search({ searchFilter, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <Box
      sx={{
        ml: 4,
        width: 'flex',
        maxWidth: "100%",
        minWidth: "30%",
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
