import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      maxSnack={3}>
      <App />
    </SnackbarProvider>
  </StrictMode>
);
