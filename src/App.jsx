import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CoursesPage from './pages/Courses';
import LandingPage from './pages/LandingPage/LandingPage';
import ModulesPage from './pages/ModulePage/AllModules';
import ChapterDataPage from './pages/ModulePage/ChapterData';
import ChapterListPage from './pages/ModulePage/ChapterListPage';
import TermsAndConditions from './pages/TermsAndConditions';
import ViewCoursePage from './pages/ViewCoursePage';
import WebinarPage from './pages/WebinarPage';
import { routes } from './routes/index';
import AuthRoute from './utils/authRoute';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<LandingPage />} />

        <Route
          path={routes.signup}
          element={
            <AuthRoute restricted>
              <SignupPage />
            </AuthRoute>
          }
        />

        <Route
          path={routes.login}
          element={
            <AuthRoute restricted>
              <LoginPage />
            </AuthRoute>
          }
        />

        <Route path={routes.resetPassword} element={<LoginPage />} />

        <Route
          path={routes.viewCourse}
          element={
            <AuthRoute protectedRoute>
              <ViewCoursePage />
            </AuthRoute>
          }
        />

        <Route path={routes.webinars} element={<WebinarPage />} />
        <Route path={routes.modules} element={<ModulesPage />} />
        <Route path={routes.chapterList} element={<ChapterListPage />} />
        <Route path={routes.chapter} element={<ChapterDataPage />} />
        <Route path={routes.courses} element={<CoursesPage />} />
        <Route path={routes.terms} element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
