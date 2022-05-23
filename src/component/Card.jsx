import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
export default function ActionAreaCard() {
    const styles = {
        media: {
            height: 300,
        }
    };
  return (
      <div
      style={{padding:"20px"}}
      >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
        id="Home"
       
        >
            
    <Card  sx={{ maxWidth: 400 }}  >
      <CardActionArea>
        <CardMedia
          component="img"
          image={require("./moro.jpg")}
          alt="green iguana"
          style={styles.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Omer Kamal
          </Typography>
          <Typography variant="h5" color="text.secondary">
          I love to explore new fields and technologies, fast learner, dedicated, focused, self motivated,
            team player, highly interested in Computer vision and Machine learning.
          </Typography>
        </CardContent>
      </CardActionArea>
            </Card>
      </Box>
      </div>
  );
}
