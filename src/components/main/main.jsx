import {Box, Button, Typography} from '@mui/material'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <Box>
      <Link to={"/channel"}>
        <Button>Channel</Button>
      </Link>
      <Typography>
        This is main page 
      </Typography>
    </Box>
  )
}

export default Main







// import { useState } from "react";
// import { Stack, Box, Container, Typography} from "@mui/material";
// import {colors} from '../../constants/colors'
// import {Category} from '../'

// const Main = () => {
  
//   const [selectedCategory, setSelectedCategory] = useState('New')

//   return (
//     <Stack>
//       <Category/>
//       <Box p={2} sx={{height: '90vh'}} >
//       <Container maxWidth={'90%'}>
//         <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
//           {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
//         </Typography>
//       </Container>
//       </Box>
//     </Stack>
//   )
// }

// export default Main