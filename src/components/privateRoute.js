import { useNavigate, Route } from 'react-router-dom';

export const PrivateRoute = ({ element, ...rest }) => {
    const jwtToken = localStorage.getItem('jwtToken');
    const navigate = useNavigate();
  
    if (!jwtToken) {
      // Redirect to login if JWT is not present
      navigate('/login');
      return null;
    }
  
    // Perform JWT verification here, if needed
  
    return <Route {...rest} element={element} />;
  };