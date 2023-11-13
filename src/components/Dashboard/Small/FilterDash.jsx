import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Select,
  Spinner,
} from '@chakra-ui/react';

import { getData1, filterMode } from '../../../redux/actions/filterActions';

const FilterDash = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const { firstResults, filterOn } = filter;

  const [loading, setLoading] = useState(false);

  return (
    <VStack>
      <Flex
        bg="gray.200"
        _dark={{ backgroundColor: 'gray.600' }}
        m="4"
        borderRadius={5}
        p="3"
      >
        <Formik
          initialValues={{ time: '' }}
          validationSchema={Yup.object({
            time: Yup.string().required('Select a time frame'),
          })}
          onSubmit={values => {
            dispatch(getData1(values));
          }}
        >
          {({ handleSubmit, errors, isValid, dirty }) => (
            <form onSubmit={handleSubmit}>
              <Flex direction="column">
                <FormControl isInvalid={!!errors.time}>
                  <Flex
                    gap="6"
                    align="center"
                    alignContent="center"
                    mb="2"
                    justify="space-between"
                  >
                    <Text htmlFor="time" fontSize="16px">
                      Filter
                    </Text>
                    <Text
                      fontSize="18px"
                      fontWeight="semibold"
                      color="red.600"
                      _dark={{ color: 'red.500' }}
                      onClick={() => {
                        dispatch(filterMode());
                        window.location.reload(false);
                      }}
                    >
                      X
                    </Text>
                  </Flex>
                  <Field as={Select} id="time" name="time">
                    <option value=""></option>
                    <option value="desc">Latest</option>
                    <option value="asc">Earliest</option>
                    <option value="resY">Resolved</option>
                    <option value="resN">Unresolved</option>
                  </Field>
                  <FormErrorMessage>{errors.time}</FormErrorMessage>
                </FormControl>
                <Button
                  mt="2"
                  type="submit"
                  isDisabled={!dirty || !isValid}
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                    }, [5000]);
                  }}
                >
                  {loading === true ? <Spinner /> : 'Submit'}
                </Button>
              </Flex>
            </form>
          )}
        </Formik>
      </Flex>
    </VStack>
  );
};

export default FilterDash;
