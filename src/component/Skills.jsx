import React from 'react'
import Grid from "@mui/material/Grid"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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
                            React
                        </Typography>
                    </CardContent>
           </Grid>
           <Grid item xs={2}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Flutter
                        </Typography>
                    </CardContent>
           </Grid>
           <Grid item xs={2}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Data Analysis
                        </Typography>
                    </CardContent>
           </Grid>
           <Grid item xs={2}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Machine Learning
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
                               Problem Solving
                           </Typography>
                       </CardContent>
              </Grid>
              <Grid item xs={2}>
                       <CardContent>
                           <Typography gutterBottom variant="h4" component="div">
                               Pewee / CheryPy
                           </Typography>
                       </CardContent>
              </Grid>
              <Grid item xs={2}>
                       <CardContent>
                           <Typography gutterBottom variant="h4" component="div">
                               Computer Vision
                           </Typography>
                       </CardContent>
              </Grid>
              <Grid item xs={2}>
                       <CardContent>
                           <Typography gutterBottom variant="h4" component="div">
                               Adobe Photoshop / Adobe Illustrator 
                           </Typography>
                       </CardContent>
               </Grid>
     </Grid>
       </>
  )
}
export default Cardthree;