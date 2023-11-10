import { useState, useEffect } from 'react';
import { Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import Sample from './Data/Sample.json';

const Filter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  const previousHandler = () => {
    alert('previous');
  };
  const nextHandler = () => {
    alert('next');
  };

  const data = Sample.pokemon;
  const pages = data.length / 4 + 1;

  let pageButtons = [];

  for (let i = currentPage; i < currentPage + 5 && i < pages; i++) {
    pageButtons.push(i);
  }

  const previousButtonHandler = () => {
    if (currentPage - 1 !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextButtonHandler = () => {
    if (currentPage + 1 < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getCorrectData = () => {
    const start = currentPage;
    const end = currentPage + 5;

    return data.slice(start, end);
  };

  useEffect(() => {
    setCurrentData(getCorrectData());
  }, [currentPage]);

  console.log(currentData);
  return (
    <>
      <HStack>
        <Flex gap="2" direction="column">
          {currentPage > 1 ? (
            <Flex
              onClick={previousButtonHandler}
              p="1"
              bg="gray.200"
              _dark={{ backgroundColor: 'gray.500' }}
              borderRadius={5}
            >
              <ArrowLeftIcon />
            </Flex>
          ) : null}
          
        </Flex>

        <Flex gap="2">
          {pageButtons.map(e => (
            <Text
              key={e}
              borderWidth={1}
              borderColor="gray.400"
              borderRadius="6"
              px="2"
              bg={currentPage === e ? 'green.300' : null}
              onClick={() => {
                setCurrentPage(e);
              }}
            >
              {e}
            </Text>
          ))}
        </Flex>
        {currentPage !== pages - 1 ? (
            <Flex
              p="1"
              bg="gray.200"
              _dark={{ backgroundColor: 'gray.500' }}
              borderRadius={5}
              onClick={nextButtonHandler}
            >
              <ArrowRightIcon />
            </Flex>
          ) : null}
      </HStack>
      {currentData.length > 0
        ? currentData.map(e => <Text key={e.key}>{e.title}</Text>)
        : 'empty'}
    </>
  );
};

export default Filter;
