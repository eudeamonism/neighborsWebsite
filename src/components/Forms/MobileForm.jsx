// mobileForm.js
import {
  Flex,
  useColorModeValue,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import TextField from '../FormikFields/TextField';

const MobileForm = () => {
  return (
    <Formik
      initialValues={{ name: '', age: '' }}
      onSubmit={() => console.log('Hello!')}
    >
      {() => (
        <Form as="form">
          <ColorModeSwitcher />
          <FormControl>
            <TextField
              name="name"
              placeholder="name"
              type="text"
              label="YOYO"
            />
            <TextField name="age" placeholder="age" type="text" label="age" />
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};

export default MobileForm;
