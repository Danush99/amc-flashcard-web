import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './protectedRouter';
import { 
  HomePage,
  StripePaymentPage,
  TermsAndConditionsPage,
  ErrorPage,
  PrivacyStatement,
  About,
  Contact,
  ForgotPassword
 } from 'src/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/tc',
    element: <TermsAndConditionsPage />
  },
  {
    path: '/ps',
    element: <PrivacyStatement />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/forgotPassword/:token',
    element: (
      <ProtectedRoute permissions={['ADMIN','USER']}>
        <ForgotPassword />
      </ProtectedRoute>
    )
  },
  {
    path: '/stripePay/:token',
    element: (
      <ProtectedRoute permissions={['ADMIN','USER']}>
        <StripePaymentPage />
      </ProtectedRoute>
    )
  },
  {
    path: "*",
    element: (
    <ErrorPage/>
    )
  },
]);

export default router;

// http://localhost:5173/forgotPassword/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiVVNFUiIsImlkIjoiYXNqZm5pa3NqZG5mMzJyNGZlIiwiZmlyc3ROYW1lIjoiSm9obiIsImxhc3ROYW1lIjoiU2lyaXdhcmRlbmEiLCJpc1ByZW1pdW0iOmZhbHNlfQ.h2ysq7xwBullnT9HkNtQTpH5GBww_bntLiGfAbKAR4k