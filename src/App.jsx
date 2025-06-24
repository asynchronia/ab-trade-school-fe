import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CoursesPage from './pages/Courses';
import LandingPage from './pages/LandingPage/LandingPage';
import ModulesPage from './pages/ModulePage/AllModules';
import ViewCoursePage from './pages/ViewCoursePage';
import WebinarPage from './pages/WebinarPage';
import { routes } from './routes/index';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<LandingPage />} />
        <Route path={routes.signup} element={<SignupPage />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.courses} element={<CoursesPage />} />
        <Route path={routes.webinars} element={<WebinarPage />} />
        <Route path={routes.modules} element={<ModulesPage />} />
        <Route path={routes.viewCourse} element={<ViewCoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
