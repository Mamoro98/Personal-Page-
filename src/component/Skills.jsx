import React from 'react'
import Grid from "@mui/material/Grid"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
 const Cardthree = () => {
   return (
    <>
    <Grid container spacing={0} display="flex"
    justifyContent="center"
    alignItems="center"
               minHeight="15vh"
               id="Skills"
           >
    
    
               <Grid item xs={2}
               
               >
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Omer Kamal
                        </Typography>
                    </CardContent>
           </Grid>
           <Grid item xs={2}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Omer Kamal
                        </Typography>
                    </CardContent>
           </Grid>
           <Grid item xs={2}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Omer Kamal
                        </Typography>
                    </CardContent>
           </Grid>
           <Grid item xs={2}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Omer Kamal
                        </Typography>
                    </CardContent>
            </Grid>
       </Grid>
       <Grid container spacing={0} display="flex"
       justifyContent="center"
       alignItems="center"
       minHeight="15vh">
       
       
              <Grid item xs={2}>
                       <CardContent>
                           <Typography gutterBottom variant="h4" component="div">
                               Omer Kamal
                           </Typography>
                       </CardContent>
              </Grid>
              <Grid item xs={2}>
                       <CardContent>
                           <Typography gutterBottom variant="h4" component="div">
                               Omer Kamal
                           </Typography>
                       </CardContent>
              </Grid>
              <Grid item xs={2}>
                       <CardContent>
                           <Typography gutterBottom variant="h4" component="div">
                               Omer Kamal
                           </Typography>
                       </CardContent>
              </Grid>
              <Grid item xs={2}>
                       <CardContent>
                           <Typography gutterBottom variant="h4" component="div">
                               Omer Kamal
                           </Typography>
                       </CardContent>
               </Grid>
     </Grid>
       </>
  )
}
export default Cardthree;