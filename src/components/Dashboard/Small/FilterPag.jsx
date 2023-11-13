import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

const FilterPag = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const { firstResults } = filter;

  
  const perPage = Math.ceil(firstResults.complaintNum / 4)
  const dataSlice = firstResults.complaints;

  console.log(perPage)
  

  

  console.log(dataSlice);
  return (
    <Flex
      borderColor={useColorModeValue('blue.100', 'blue.700')}
      borderWidth={1}
      p="1"
      m="2"
      borderRadius={4}
      gap="2"
      align="center"
    >
      <ArrowLeftIcon />
      1
      <ArrowRightIcon
        onClick={() => {
          alert(
            'New Query where we skip the previous amount selected however retrieve the same amount, ie skip 4, limit 4'
          );
        }}
      />
    </Flex>
  );
};

export default FilterPag;
