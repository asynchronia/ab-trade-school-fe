import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';

const CourseCard = ({ data, showButton = false }) => {
  const {
    title,
    instructor,
    role,
    duration,
    modules,
    image,
    buttonLabel = 'Learn More',
  } = data;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: '100%' }}>
      {image && (
        <CardMedia
          component="img"
          height="160"
          image={image}
          alt={title}
          sx={{ objectFit: 'fill' }}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2">{instructor}</Typography>
        {role && (
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
        )}
        <Typography variant="body2" mt={1}>
          {duration} • {modules}
        </Typography>

        {showButton && (
          <Box mt={2}>
            <Button variant="contained" fullWidth>
              {buttonLabel}
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseCard;
