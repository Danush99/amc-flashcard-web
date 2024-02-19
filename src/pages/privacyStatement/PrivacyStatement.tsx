import { Box, Divider, Grid, Toolbar, Typography } from "@mui/material";
import { DrawerAppBar } from "src/components";
import { privacyStatementText } from "./PrivacyStatementText";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

export default function PrivacyStatement() {

    return (
      <>
        <DrawerAppBar/>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          
          <Box
            sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Privacy Statement
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
            At AMC FlashCard, we are committed to protecting the privacy of our users. This Privacy Statement outlines how we collect, use, and disclose personal information in relation to our mobile application designed for medical students in Australia preparing for the AMC exam.
            </Typography>
          </Box>

          {privacyStatementText.map((item,index1) => (
            <Box key={index1}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                {index1+1}. {item.topic}: 
              </Typography>

              {
                (item.content).map((content,index2)=>(
                  <>
                  <Grid container alignItems="center" key={index2}>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Grid item xs={0}>
                      <StarPurple500Icon />
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="subtitle2" gutterBottom sx={{ fontStyle: 'italic', fontWeight: 'bold', margin: '0' }}>
                        {content.title}:
                      </Typography>
                    </Grid>
                    <Grid item xs={6} >
                      <Typography variant="body2" gutterBottom sx={{ margin: '0' }}>
                        {content.description}
                      </Typography>
                    </Grid>
                  </Grid>
                  {(item.content).length !== index2 + 1 && <Divider sx={{ my: 1 }}/> }
                  </>
                ))
              }
              <br/><br/>
            </Box>
          ))}

          <Typography variant="subtitle1" gutterBottom>
            By using our mobile application, you consent to the collection, use, and disclosure of your information as described in this Privacy Statement.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Thank you for using our mobile application!
          </Typography>

        </Box>
      </>
    )
  }
  
  