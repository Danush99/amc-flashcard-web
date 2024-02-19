import { Box, Toolbar } from "@mui/material";
import { DrawerAppBar, PasswordResetForm } from "src/components";

export default function ForgotPassword() {


  return (
      <>
        <DrawerAppBar/>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <PasswordResetForm/>
        </Box>
      </>
  )
}
  
  