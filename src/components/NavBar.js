import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react'
import spoon from '../icons/spoon.png'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'


export default function ColorTabs() {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        sx={{bgcolor: 'rgba(0,0,0,0)', p: 1}}
      >
        <Box component={Link} label="Home" to="/" style={{height: '50px'}}>
        <Typography
            noWrap
            component="img"
            src={spoon}
            sx={{height: 1, pr: 2}}
          >
        </Typography>
        </Box>
        <Tab component={Link} to="/CookBookList" value="cookbooks" label="Cookbook List" />
        <Tab component={Link} to="/NewRecipe" value="newrecipes" label="New Recipe" />
        <Tab component={Link} to="/AllRecipes" value="allrecipes" label="All Recipes" />
      </Tabs>
    </Box>
  );
}