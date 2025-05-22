import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { routes } from './routes/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<LandingPage />} />
        <Route path={routes.signup} element={<SignupPage />} />
        <Route path={routes.login} element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
