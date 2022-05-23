import React from 'react'
import Grid from "@mui/material/Grid"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
 const Cardtwo = () => {
   return (
    
    <Grid container spacing={0} display="flex"
    justifyContent="center"
    alignItems="center"
       minHeight="50vh"
       id ="About"
     >
    <Grid item xs={4}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
        >
    <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Omer Kamal
          </Typography>
          <Typography variant="h5" color="text.secondary">
          I love to explore new fields and technologies, fast learner, dedicated, focused, self motivated,
            team player, highly interested in Computer vision and Machine learning.
          </Typography>
        </CardContent>
</Box>
    </Grid>
      <Grid item xs={4}>
      
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        >
            
    <Card  sx={{ maxWidth: 400 }}  >
      <CardActionArea>
        <CardMedia
          component="img"
          image={require("./eeese2.jpg")}
          alt="green iguana"
          
        />
      </CardActionArea>
            </Card>
            </Box>
        
      </Grid>
  </Grid>
  )
}
export default Cardtwo;