import React from 'react';
import { useField } from 'formik';
import { FormControl, FormErrorMessage, FormLabel, Input, Checkbox, Select } from '@chakra-ui/react';

const TextField = ({ label, type, name, options, ...rest }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl isInvalid={meta.error && meta.touched} mb="3">
      <FormLabel fontSize="2xl" noOfLines={1}>
        {label}
      </FormLabel>
      {type === 'select' ? (
        <Select {...field} {...rest} width="350px" fontSize="20px" height="40px" pb="1">
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      ) : type === 'checkbox' ? (
        <Checkbox {...field} {...rest} isChecked={field.value}>
          {label}
        </Checkbox>
      ) : (
        <Input {...field} {...rest} type={type} width="350px" fontSize="20px" height="40px" pb="1" />
      )}
      <FormErrorMessage>{meta.touched && meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
