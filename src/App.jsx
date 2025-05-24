import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CoursesPage from './pages/Courses';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WebinarPage from './pages/WebinarPage';
import { routes } from './routes/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<LandingPage />} />
        <Route path={routes.signup} element={<SignupPage />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.courses} element={<CoursesPage />} />
        <Route path={routes.webinars} element={<WebinarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
