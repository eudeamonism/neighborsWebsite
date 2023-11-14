import { useState, useEffect } from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import { getData2 } from '../../../redux/actions/filterActions';

const FilterPag = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [batch, setBatch] = useState([]);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const { firstResults, secondResults } = filter;
  //button length
  const perPage = Math.ceil(firstResults.complaintNum / 4);

  //unfiltered data
  const unfiltered = firstResults.complaints;

  //filtered functionality
  let example;

  useEffect(() => {
    if (currentPage === 0 && unfiltered !== undefined) {
      console.log('No Pages');
    } else if (currentPage === 1 && unfiltered !== undefined) {
      example = unfiltered.slice(0, 4);
      dispatch(getData2(example));
    } else if (currentPage > 1 && unfiltered !== undefined) {
      const startIndex = (currentPage - 1) * 4;
      const endIndex = startIndex + 4;
      example = unfiltered.slice(startIndex, endIndex);
      dispatch(getData2(example));
    }
  }, [dispatch, currentPage, firstResults]);

  //next and prev functionality
  let pageButtons = [];

  for (let i = currentPage; i < perPage + 1; i++) {
    pageButtons.push(i);
  }

  const nextPage = () => {
    if (currentPage < perPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage - 1 !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  console.log(secondResults);

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
      <ArrowLeftIcon
        onClick={() => {
          prevPage();
        }}
      />
      {pageButtons.map(e => (
        <Text
          bgColor={currentPage === e ? 'green.400' : null}
          key={e}
          borderWidth={1}
          width="5"
          borderColor="gray.400"
          borderRadius="6"
          align="center"
        >
          {e}
        </Text>
      ))}
      <ArrowRightIcon
        onClick={() => {
          nextPage();
        }}
      />
    </Flex>
  );
};

export default FilterPag;
