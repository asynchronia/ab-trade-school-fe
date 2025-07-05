import {
    Box,
    Button,
    FormControl,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import clock from '../../assets/clock.svg';
import { ModuleRegistrationSchema } from '../../validations/moduleRegistrationValidation';

const states = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
];

const RegisterForm = () => {
  const handleSubmit = (values) => {
    console.log('Form Data:', values);
  };

  return (
    <Box
      sx={{
        borderRadius: '16px',
        border: '1px solid #1E40AF',
        fontFamily: 'inherit',
      }}
    >
      <Box
        sx={{
          bgcolor: '#1E40AF',
          color: 'white',
          py: 2,
          px: 2,
          textAlign: 'center',
          borderRadius: '14px 14px 0 0',
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          fontSize={'20px'}
          lineHeight={'150%'}
        >
          Kick start your Trading and
          <br />
          Investment Journey Today!
        </Typography>
      </Box>

      <Box sx={{ p: 2 }}>
        <Typography variant="body1" align="center">
          Please fill in your details
          <br />
          Registration closes in:
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={1}
          mb={1.5}
        >
          <Typography variant="h5" fontWeight="bold" color="#1E40AF" mr={1}>
            15 Minutes
          </Typography>
          <Box component={'img'} alt="clock" src={clock} />
        </Box>

        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            state: '',
          }}
          validationSchema={ModuleRegistrationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, touched, errors }) => (
            <Form>
              <Typography fontSize={14} color="#808080" mt={0}>
                Your name
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter the Name"
                name="name"
                value={values.name}
                size="small"
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                margin="none"
              />

              <Typography fontSize={14} color="#808080" mt={2}>
                Email address
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter the Email"
                name="email"
                value={values.email}
                size="small"
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                margin="none"
              />

              <Typography fontSize={14} color="#808080" mt={2}>
                Phone number
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter the mobile number"
                name="phone"
                value={values.phone}
                size="small"
                onChange={handleChange}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                margin="none"
              />

              <Typography fontSize={14} color="#808080" mt={2}>
                Select your state
              </Typography>
              <FormControl
                fullWidth
                margin="none"
                error={touched.state && Boolean(errors.state)}
              >
                <Select
                  name="state"
                  value={values.state}
                  size="small"
                  onChange={handleChange}
                >
                  {states.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
                {touched.state && errors.state && (
                  <Typography variant="caption" color="error">
                    {errors.state}
                  </Typography>
                )}
              </FormControl>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  py: 1.5,
                  bgcolor: '#1E40AF',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '16px',
                }}
              >
                Open account within 15 min!
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default RegisterForm;
