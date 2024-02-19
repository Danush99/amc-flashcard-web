import { Box, Toolbar } from "@mui/material";
import { DrawerAppBar } from "src/components";

export default function StripePaymentPage() {

    return (
      <>
        <DrawerAppBar/>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
           Stripe Payment
        </Box>
      </>
    )
  }
  
  