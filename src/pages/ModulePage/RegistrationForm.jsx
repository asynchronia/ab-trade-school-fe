import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
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
        overflow: 'hidden',
        width: 360,
        position: 'fixed',
        // mx: 'auto',
        fontFamily: 'inherit',
      }}
    >
      <Box
        sx={{
          bgcolor: '#1E40AF',
          color: 'white',
          py: 3,
          px: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" fontWeight="bold" fontSize={'20px'}>
          Kick start your Trading and
          <br />
          Investment Journey Today!
        </Typography>
      </Box>

      {/* Form Section */}
      <Box sx={{ p: 3 }}>
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
          mb={3}
        >
          <Typography variant="h4" fontWeight="bold" color="#1E40AF" mr={1}>
            15 Minutes
          </Typography>
          <AccessTimeIcon sx={{ color: '#1E40AF', fontSize: 28 }} />
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
              <TextField
                fullWidth
                label="Enter the Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Enter the Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Enter the mobile number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                margin="normal"
              />

              <FormControl
                fullWidth
                margin="normal"
                error={touched.state && Boolean(errors.state)}
              >
                <InputLabel>Select the state</InputLabel>
                <Select
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  label="Select the state"
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
                  mt: 3,
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
