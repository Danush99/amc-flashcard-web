import { Box, Toolbar, Typography } from "@mui/material";
import { DrawerAppBar } from "src/components";

export default function About() {

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
              About Us
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            Welcome to our mobile application designed specifically for medical students in Australia. Our mission is to support and enhance your studies for the AMC exam by providing a comprehensive platform tailored to your needs.
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            Within our application, you'll find a wealth of resources to aid in your exam preparation. We offer pre-made card sets covering a wide range of topics relevant to the AMC exam, meticulously curated to ensure comprehensive coverage of key concepts and subjects.
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            For our Premium users, we offer access to an expanded collection of study card packs, providing even more depth and variety to your study materials. We understand the importance of having access to high-quality resources, which is why we continuously strive to expand and improve our offerings.
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            But that's not all - we empower our users to take control of their learning journey. With our application, you have the flexibility to create your own study card packs, tailoring your study materials to your specific learning needs and preferences.
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            In addition to our study resources, we also prioritize user experience and convenience. Our application allows users to easily edit their user details and manage their account settings. Furthermore, we understand that flexibility is key, which is why we provide the option for users to request authorization for multiple devices, ensuring seamless access to our application across all your devices.
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
            At AMC Flashcard mobile application, we are dedicated to supporting you every step of the way on your journey to becoming a successful medical professional. Join our community of motivated learners and let us help you achieve your goals.
            </Typography>

          </Box>

        </Box>
      </>
    )
  }
  
  