import React from 'react';
import ComplaintCard from './ComplaintCard';
import { complaints } from '../../data/compliants';
import { Box, Flex, Stack } from '@chakra-ui/react';

const ComplaintList = () => {
  const data = complaints;

  return (
    <Box
      height="425px"
      overflowY="scroll"
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {data.map(complaint => (
        <ComplaintCard complaint={complaint} key={complaint.details.id} />
      ))}
    </Box>
  );
};

export default ComplaintList;
