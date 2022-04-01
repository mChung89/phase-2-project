import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import spoon from '../icons/spoon.png'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider'


export default function ColorTabs() {
  return (
    <Box sx={{bgcolor: 'white', ml:2, pr:2, width: 'fit-content', borderRadius: 2}}>
      <Tabs
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
            alt="home icon"
            sx={{height: 1, pr: 2}}
          >
        </Typography>
        </Box>
        <Tab component={Link} to="/CookBookList" value="cookbooks" label="Cookbook List" tabIndex={0} />
        <Tab component={Link} to="/NewRecipe" value="newrecipes" label="New Recipe" tabIndex={0} />
        <Tab component={Link} to="/AllRecipes" value="allrecipes" label="All Recipes" tabIndex={0} />
      </Tabs>
    </Box>
  );
}