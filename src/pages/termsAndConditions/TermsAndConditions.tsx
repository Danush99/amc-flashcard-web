import { Box, Toolbar, Typography } from "@mui/material";
import { DrawerAppBar } from "src/components";
import { tnc } from "./termsAndConditionText";

export default function TermsAndConditionsPage() {

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
              Terms and Conditions
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Welcome to our mobile application! Before you begin using our services, please read these Terms and Conditions carefully. By accessing or using the application, you agree to be bound by these Terms and Conditions.
            </Typography>
          </Box>

          {tnc.map((item,index) => (
            <Box key={index}>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                {index+1}. {item.topic}: 
              </Typography>
              <Typography variant="body2" gutterBottom>
                {item.content}
              </Typography>
            </Box>
          ))}

          <Typography variant="subtitle1" gutterBottom>
            If you have any questions or concerns about these Terms and Conditions, please contact us at amc@gmail.com.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Thank you for using our mobile application!
          </Typography>

        </Box>
      </>
    )
  }
  
  