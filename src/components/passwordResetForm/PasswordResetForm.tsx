import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/redux/store";
import {
  removeUser,
} from "src/redux/user";
import { SnackBarDetails } from 'src/components/SnackBar';
import { CircularProgress } from '@mui/material';
import { ResetPassword } from 'src/types';
import { resetPassword } from 'src/services';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://google.com/">
        AMC FlashCard
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

interface PasswordResetFormPropsType {
  setSuccessReset: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSnackBar: React.Dispatch<React.SetStateAction<boolean>>;
  setSnackBarDetails: React.Dispatch<React.SetStateAction<SnackBarDetails>>;
}


export default function PasswordResetForm(props : PasswordResetFormPropsType) {
    const {setSuccessReset,setSnackBarDetails,setShowSnackBar} = props
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch<AppDispatch>();
    const [loader, setLoader] = useState(false);

    const handleReset = async (data: ResetPassword) => {
        setLoader(true);
        try {
          await resetPassword(data,user.accessToken);
          if (user) {
            dispatch(removeUser());
            setSuccessReset(true)
            setSnackBarDetails({ severity: 'success', message: 'You have reset the password successfully' });
            setShowSnackBar(true);
          } else {
            setSnackBarDetails({ severity: 'error', message: 'Something went wrong please try again later!' });
            setShowSnackBar(true);
          }
        } catch (error) {
          setSnackBarDetails({ severity: 'error', message: 'Something went wrong please try again later!' });
          setShowSnackBar(true);
        } finally {
          setLoader(false);
        }
    };

    const validationSchema = yup.object({
        newPassword: yup.string()
          .required('You should provide a password')
          .min(4, 'Password must be at least 4 characters long')
          .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, 'Password must contain at least one letter and one number'),
        confirmPassword: yup.string()
          .required('You should confirm your password')
          .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    });

    const formik = useFormik({
        initialValues: {
            newPassword: '',
            confirmPassword: ''
        },
        validateOnChange: true,
        validationSchema: validationSchema,
        onSubmit: (values: ResetPassword) => {
            handleReset(values);
        }
      });

    return (
        <ThemeProvider theme={defaultTheme}>

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4">
                Reset Password
            </Typography>

            <Typography component="h1" variant="h6">
                Hi, {user?.firstName} ! Reset your password: Reclaim access to your account by resetting your password. 
            </Typography>

            <Box             
                component="form"
                onSubmit={formik.handleSubmit}
                noValidate 
                sx={{ mt: 1 }}
            >
                <TextField
                margin="normal"
                required
                fullWidth
                id="newPassword"
                label="New Password"
                type="password"
                name="newPassword"
                autoComplete="new-password"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                helperText={formik.touched.newPassword && (formik.errors.newPassword ?? '').toString()}
                autoFocus
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && (formik.errors.confirmPassword ?? '').toString()}
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loader}>
                {loader ? <CircularProgress color="inherit" size={30} /> : "Reset Password"}
                </Button>

            </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>

        </ThemeProvider>
    );
}