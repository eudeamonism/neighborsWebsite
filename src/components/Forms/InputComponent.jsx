import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Field, useField } from 'formik';

const InputComponent = ({ label, type, name, placeholder, noOfLines }) => {
  const [field, meta] = useField({ type, name, placeholder });
  return (
    <FormControl isInvalid={meta.error && meta.touched} mb="6">
      <FormLabel noOfLines={noOfLines || 1}>{label}</FormLabel>
      <Field
        as={Input}
        {...field}
        type={type}
        name={name}
        placeholder={placeholder}
        width="350px"
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputComponent;
