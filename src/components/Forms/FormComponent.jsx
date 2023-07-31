import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';

import InputComponent from './InputComponent';
const FormComponent = ({ initialValues, validationSchema, onSubmit }) => {
  return (
    <Formik
      initialValue={initialValues}
      validationSchema={Yup.object({
        title: Yup.string()
          .required('Please give complaint a title')
          .max(40, 'No more than 40 characters'),
      })}
    >
      {({ formik }) => (
        <Form
          as="form"
          onSubmit={() => {
            alert('Hello!');
          }}
        >
          <InputComponent
            type="text"
            name="title"
            placeholder="Title"
            label="Title"
          />
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
