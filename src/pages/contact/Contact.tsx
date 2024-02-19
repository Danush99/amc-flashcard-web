import { Box, Toolbar } from "@mui/material";
import { DrawerAppBar } from "src/components";

export default function Contact() {

    return (
      <>
        <DrawerAppBar/>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          Contact
        </Box>
      </>
    )
  }
  
  