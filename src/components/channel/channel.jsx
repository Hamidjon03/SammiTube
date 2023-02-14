import { Box, Button, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const Channel = () => {
  const params = useParams()
  console.log(params)
  return (
    <Box>
      <Typography>
        Bu channel page i
      </Typography>
    </Box>
  );
};

export default Channel;











// import { Box, Button } from "@mui/material";
// import { Link, useParams } from "react-router-dom";

// const Channel = () => {
//   const params = useParams()
//   console.log(params)
//   return (
//     <Box>
//       <Link to={"/"}>
//         <Button>Main</Button>
//       </Link>
//     </Box>
//   );
// };

// export default Channel;

