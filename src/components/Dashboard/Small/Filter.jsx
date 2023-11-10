import { useState, useEffect } from 'react';
import axios from 'axios';
import { Divider, Flex, HStack, Text } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import CWrapper from './CWrapper';


const Filter = () => {
  const [cCurrentPage, cSetCurrentPage] = useState(2);
  const [cData, setCData] = useState([]);
  const [cMapData, cSetMapData] = useState([]);

  const getData = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_DATABASE_URL}complaint/getComplaints`,
      config
    );

    setCData(data);
  };

  useEffect(() => {
    getData();
  }, [cCurrentPage]);

  const cPages = cData.length / 2 + 2;
  console.log(cPages);

  let cPageButtons = [];

  for (let j = cCurrentPage; j < cCurrentPage + 4 && j < cPages; j++) {
    
    cPageButtons.push(j);
  }

  const nextHandler = () => {
    if (cCurrentPage + 1 < cPages) {
      cSetCurrentPage(cCurrentPage + 1);
    }
  };

  const previousHandler = () => {
    if (cCurrentPage - 1 !== 0) {
      cSetCurrentPage(cCurrentPage - 1);
    }
  };

  const cGetCorrectData = () => {
    const start = cCurrentPage;
    const end = cCurrentPage + 5;

    return cData.slice(start, end);
  };

  useEffect(() => {
    cSetMapData(cGetCorrectData());
  }, [cCurrentPage]);

  return (
    <>
      <HStack mt="2" mb="1" position="sticky">
        <Flex gap="2" direction="column">
          {cCurrentPage > 1 ? (
            <Flex
              onClick={previousHandler}
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
          {cPageButtons.map(e => (
            <Text
              key={e}
              borderWidth={1}
              borderColor="gray.400"
              borderRadius="6"
              px="2"
              bg={cCurrentPage === e ? 'green.300' : null}
              onClick={() => {
                cSetCurrentPage(e);
              }}
            >
              {e}
            </Text>
          ))}
        </Flex>
        {cCurrentPage !== cPages - 1 ? (
          <Flex
            p="1"
            bg="gray.200"
            _dark={{ backgroundColor: 'gray.500' }}
            borderRadius={5}
            onClick={nextHandler}
          >
            <ArrowRightIcon />
          </Flex>
        ) : null}
      </HStack>

      <Divider mt="2" />
      {cMapData.length > 0 ? <CWrapper props={cMapData} /> : null}
    </>
  );
};

export default Filter;
