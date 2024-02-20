import { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { DrawerAppBar, PasswordResetForm, SuccessMessage } from "src/components";
import SnackBar, { SnackBarDetails } from 'src/components/SnackBar';

export default function ForgotPassword() {
  const [successReset, setSuccessReset] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackBarDetails, setSnackBarDetails] = useState<SnackBarDetails>({
    message: '',
    severity: 'success'
  });
  return (
      <>
        <DrawerAppBar/>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />

          <SnackBar
            open={showSnackBar}
            message={snackBarDetails.message}
            severity={snackBarDetails.severity}
            handleClose={() => setShowSnackBar(false)}
          />

          <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center', // Center content horizontally
              height: '80vh',
            }}
          >
            {
              successReset ?
              <SuccessMessage/>
              :
              <PasswordResetForm 
                setSuccessReset={setSuccessReset} 
                setSnackBarDetails={setSnackBarDetails} 
                setShowSnackBar={setShowSnackBar}
              />
            }
          </Box>

        </Box>
      </>
  )
}
  
  