import { CircularProgress, Button as MuiButton } from '@mui/material';

const Button = ({
  title,
  variant = 'contained',
  className = '',
  loading = false,
  loadingText = 'Loading...',
  onClick,
  ...props
}) => {
  return (
    <MuiButton
      variant={variant}
      className={className}
      disabled={loading}
      onClick={onClick}
      sx={{
        padding: '5px 10px',
        borderRadius: '3px',
        fontWeight: 500,
        transition: 'all 0.2s ease',
        textTransform: 'none',
        minWidth: 80,
        '&:focus': {
          outline: 'none',
          boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)',
        },
        // Contained variant
        ...(variant === 'contained' && {
          backgroundColor: '#2563eb',
          color: 'white',
          '&:hover': {
            backgroundColor: '#1d4ed8',
          },
          '&.Mui-disabled': {
            backgroundColor: '#2563eb',
            opacity: 0.8,
          },
        }),
        // Outlined variant
        ...(variant === 'outlined' && {
          border: '1px solid #2563eb',
          color: '#2563eb',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: '#eff6ff',
          },
          '&.Mui-disabled': {
            borderColor: '#2563eb',
            color: '#2563eb',
            opacity: 0.8,
          },
        }),
      }}
      {...props}
    >
      {loading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CircularProgress
            size={16}
            thickness={5}
            sx={{
              color: variant === 'contained' ? 'white' : '#2563eb',
            }}
          />
          {loadingText}
        </Box>
      ) : (
        title
      )}
    </MuiButton>
  );
};

export default Button;
