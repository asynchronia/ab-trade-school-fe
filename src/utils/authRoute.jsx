import { Navigate } from 'react-router-dom';

const AuthRoute = ({
  children,
  protectedRoute = false,
  restricted = false,
}) => {
  const isAuthenticated = !!sessionStorage.getItem('user');

  if (protectedRoute && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (restricted && isAuthenticated) {
    return <Navigate to="/courses" replace />;
  }

  return children;
};

export default AuthRoute;
