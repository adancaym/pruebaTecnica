import { Formik } from 'formik';
import { ProviderCreate } from '@technical-test/common';
import { Stack, TextField } from '@mui/material';

interface FormProps {
  onSubmit: (values: ProviderCreate) => void;
  values?: ProviderCreate;
}

export const Form = ({ onSubmit, values }: FormProps) => {
  return (
    <Formik<ProviderCreate>
      initialValues={
        values ?? {
          name: '',
          address: '',
          legalName: '',
        }
      }
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              id="name"
              name="name"
              label="Name"
              value={values.name}
              error={!!errors.name && touched.name}
              helperText={errors.name}
              onChange={handleChange}
            />
            <TextField
              id="address"
              name="address"
              label="Address"
              value={values.address}
              error={!!errors.address && touched.address}
              helperText={errors.address}
              onChange={handleChange}
            />
            <TextField
              id="legalName"
              name="legalName"
              label="Legal Name"
              value={values.legalName}
              error={!!errors.legalName && touched.legalName}
              helperText={errors.legalName}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </Stack>
        </form>
      )}
    </Formik>
  );
};
