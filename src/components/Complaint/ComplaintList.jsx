import React from 'react';
import ComplaintCard from './ComplaintCard';
import { complaints } from '../../data/compliants';
import {Box, Flex, Stack} from '@chakra-ui/react'

const ComplaintList = () => {
  const data = complaints;
  return (
    <Box height="360px" overflowY="scroll" >
      {data.map(complaint => (
        <ComplaintCard complaint={complaint} />
      ))}
    </Box>
  );
};

export default ComplaintList;
