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
  VStack,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { otpMatch } from '../redux/actions/userActions';

const OtbReset = ({ email }) => {
  const dispatch = useDispatch();
  return (
    <Flex width="390px" mt="50px" justify="center" height="275px">
      <Flex
        width="300px"
        bg="blue.800"
        borderRadius="5"
        direction="column"
        alignItems="center"
      >
        <Text fontSize="2xl" mt="15">
          Enter Security Code
        </Text>
        <Text fontSize="l">Check your email for the code.</Text>
        <Text fontSize="l" mb="5">
          This could take a few minutes.
        </Text>
        <VStack>
          <Formik
            initialValues={{
              one: '',
            }}
            validationSchema={Yup.object({
              one: Yup.string()
                .max(4, 'Four digits only!')
                .required('Required!'),
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
                <Button
                  mt="8"
                  type="submit"
                  variant="solid"
                  colorScheme="yellow"
                  width="100px"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default OtbReset;
