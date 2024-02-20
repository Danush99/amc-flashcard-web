import React from 'react';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ResetPasswordSuccess() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 4,
      }}
    >
      <CheckCircleIcon
        sx={{
          fontSize: 100,
          color: (theme) => theme.palette.success.main,
          marginBottom: 2,
        }}
      />
      <Typography variant="h5" align="center">
        Your password has been successfully reset.
      </Typography>
      <Typography variant="body1" align="center">
        Please proceed to the mobile app and log in with your new password.
      </Typography>
    </div>
  );
}

export default ResetPasswordSuccess;
