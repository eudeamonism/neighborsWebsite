import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Divider,
  Flex,
  HStack,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import CWrapper from './CWrapper';

const Filter = () => {
  const [cCurrentPage, cSetCurrentPage] = useState(1);
  const [cData, setCData] = useState([]);
  const [cMapData, cSetMapData] = useState([]);
  const [cLoading, cSetLoading] = useState(false);
  const [f1, setF1] = useState(false);

  const getData = async () => {
    cSetLoading(true);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_DATABASE_URL}complaint/testing`,
      config
    );
    cSetLoading(false);
    setCData(data);
  };

  useEffect(() => {
    getData();
    cSetMapData(cGetCorrectData());
  }, [cCurrentPage]);

  const cPages = cData.length / 2 + 2;

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
  
  return (
    <>
      {cLoading === false ? null : <Spinner />}
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
      {f1 === false ? (
        <Flex
          m="4"
          bg="orange.200"
          _dark={{ backgroundColor: 'orange.600' }}
          borderRadius="5"
          align="center"
          justify="center"
          onClick={() => {
            setF1(true);
          }}
        >
          <Text>Example 1</Text>
        </Flex>
      ) : null}
      {f1 === true && cMapData.length > 0 ? (
        <CWrapper props={cMapData} />
      ) : null}
    </>
  );
};

export default Filter;
