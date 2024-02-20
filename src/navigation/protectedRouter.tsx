import { Navigate, useLocation, useParams } from 'react-router-dom';
import { ReactNode } from 'react';
import {jwtDecode} from "jwt-decode";
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/redux/store';
import { addUser } from 'src/redux/user';

interface ProtectRoutesPropType {
  permissions: string[];
  children: ReactNode;
}

interface DecodedToken {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; 
}

const decodeToken = (token: string): DecodedToken | null => {
  try {
    const decodedToken: DecodedToken = jwtDecode(token) as DecodedToken;
    return decodedToken;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const ProtectedRoute = (props: ProtectRoutesPropType) => {
  const { permissions, children } = props;
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { token } = useParams<{ token: string }>();
  console.log('token: ',token)

  if (token) {
    const user: DecodedToken = decodeToken(token);
    console.log('user: ',user);
    if (!permissions) {
      return children;
    } else if (permissions.includes(user.role)) {
      dispatch(addUser({
        firstName: user.firstName, 
        lastName: user.lastName, 
        id: user.id, 
        role: user.role,
        is_Premium: user.is_Premium,
        accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDg0MDc0NzksInN1YiI6ImRhbnVzaDk5b25saW5lQGdtYWlsLmNvbSIsImV4cCI6MTcwODQ5Mzg3OX0.3f3_gwKsOCPo3wNQT4CgkWNyoB34zQzAy0fxPYBSALg',
      }))
      return children;
    } else {
      return <Navigate to={`/?redirectTo=${location.pathname}`} />;
    }
  } else {
    return <Navigate to={`/?redirectTo=${location.pathname}`} />;
  }
};

export default ProtectedRoute;
