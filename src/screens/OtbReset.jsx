import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
  Spinner,
  useToast,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { otpMatch } from '../redux/actions/userActions';

const OtbReset = ({ email }) => {
  const dispatch = useDispatch();
  return (
    <Flex width="390px" height="250px" mt="50px" justify="center">
      <Flex
        width="300px"
        height="200px"
        bg="blue.800"
        borderRadius="5"
        direction="column"
        alignItems="center"
        gap="4"
      >
        <Text fontSize="2xl" mt="15">
          Enter Security Code
        </Text>
        <Formik
          initialValues={{
            one: '',
          }}
          validationSchema={Yup.object({
            one: Yup.string().max(4, 'Four digits only!').required('Required!'),
          })}
          onSubmit={values => {
            dispatch(otpMatch(values.one, email));
          }}
        >
          {({ errors }) => (
            <Form as="form">
              <Flex gap="2">
                <FormControl isInvalid={!!errors.one}>
                  <Field
                    as={Input}
                    id="one"
                    name="one"
                    type="text"
                    width="100px"
                    height="60px"
                    fontSize="2xl"
                  />
                  <FormErrorMessage>{errors.one}</FormErrorMessage>
                </FormControl>
              </Flex>
              <Button mt="4" type="submit" variant="solid" colorScheme="yellow">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
};

export default OtbReset;
