import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface SnackBarProps {
  open: boolean;
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
  handleClose: () => void;
  hideDuration?: number;
  vertical?: 'bottom' | 'top';
  horizontal?: 'center' | 'left' | 'right';
}

export interface SnackBarDetails {
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
}

const SnackBar: React.FC<SnackBarProps> = ({
  open,
  handleClose,
  message,
  severity,
  hideDuration = 4000,
  vertical = 'bottom',
  horizontal = 'center'
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={hideDuration}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
