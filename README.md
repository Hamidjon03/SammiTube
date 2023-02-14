2-dars
Navbar
Search
VideoDetail
useParams yordamida /:id ni olish


constants > index.js
export const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-rvnAGDFDgWotgCCucEU9ZZVIxGWL7LDwumQRH1RhPfkWfGjbftXrKSimU4q8j590XA&usqp=CAU'


constants > colors.js
export const colors = {
  primary: '#F0F0FF',
  secondary: '#CBD0D3'
}

Search-bar
import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"
import {colors} from '../../constants/colors'


const SearchBar = () => {
  return (
    <Paper component={"form"} 
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: 'none',
        borderRadius: 'none'
      }}
    >
      <input type="text" placeholder="Search..." className="search-bar"/>
      <IconButton>
        <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar



Main



Category


index.css


