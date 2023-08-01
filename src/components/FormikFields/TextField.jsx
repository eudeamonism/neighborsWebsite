import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Input,
} from '@chakra-ui/react';
import { useField } from 'formik';

const TextField = ({ label, type, name, placeholder, options }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl isInvalid={meta.error && meta.touched} mb="3">
      <FormLabel fontSize="2xl" noOfLines={1}>
        {label}
      </FormLabel>
      {type === 'select' ? (
        <Select
          {...field}
          placeholder={placeholder}
          width="350px"
          fontSize="20px"
          height="40px"
          pb="1"
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      ) : (
        <Input
          {...field}
          type={type}
          placeholder={placeholder}
          width="350px"
          fontSize="20px"
          height="40px"
          pb="1"
        />
      )}
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
