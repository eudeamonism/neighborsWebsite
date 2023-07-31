import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { Input } from '@chakra-ui/input';
import { useField } from 'formik';

const TextField = ({ label, type, name, placeholder }) => {
  const [field, meta] = useField(label, type, name, placeholder); // Pass the 'name' prop to the 'useField' hook
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel noOfLines={1}>{label}</FormLabel>
      <Input
        {...field}
        type={type}
        placeholder={placeholder}
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
