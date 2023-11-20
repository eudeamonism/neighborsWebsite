import { useState, useEffect } from 'react';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';

import {
  getData2,
  getData1,
  hidingButtons,
} from '../../../redux/actions/filterActions';

const FilterPag = () => {
  const darkStuff = e => {
    if (currentPage === e) {
      return 'green.600';
    } else {
      return null;
    }
  };

  const [updatePageButtons, setUpdatePageButtons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const { firstResults, hideButtons } = filter;
  //button length

  const [perPage, setPerPage] = useState(firstResults.complaints?.length / 4);

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

  useEffect(() => {
    const jimmy = () => {
      if (firstResults !== undefined) {
        let pageButtons = [];

        for (let i = 1; i <= perPage + 1; i++) {
          pageButtons.push(i);
          setUpdatePageButtons([...pageButtons]);
        }
      }
    };
    try {
      if (firstResults.iteration === 1) {
        jimmy();
      } else if (firstResults.iteration === undefined || null) {
        console.log('no data loaded');
      } else {
        console.log('Some kind of error for firstresults, at jimmy');
      }
    } catch (error) {
      console.log(error);
    }
  }, [firstResults, updatePageButtons, perPage]);

  console.log(
    `firstResults: ${
      firstResults.complaints?.length
    }, perPage: ${perPage}, updatePageButtons: ${
      updatePageButtons === null || undefined || ' '
        ? 'empty'
        : updatePageButtons
    }`
  );

  const nextPage = () => {
    if (currentPage < perPage) {
      setCurrentPage(currentPage + 1);
    } else {
      dispatch(getData1({ deux: currentPage - 1 }));

      let x = perPage;
      setPerPage(x++);
      setUpdatePageButtons([...updatePageButtons, +4]);
    }
  };

  const prevPage = () => {
    if (currentPage - 1 !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {hideButtons === true ? null : (
        <Flex
          borderColor="blue.100"
          _dark={{ borderColor: 'blue.800' }}
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
          {updatePageButtons.length !== 0
            ? updatePageButtons.map(e => (
                <Text
                  bgColor={currentPage === e ? 'green.100' : null}
                  _dark={{ backgroundColor: `${darkStuff(e)}` }}
                  key={e}
                  borderWidth={1}
                  width="5"
                  borderColor="gray.400"
                  borderRadius="6"
                  align="center"
                  onClick={() => {
                    setCurrentPage(e);
                  }}
                >
                  {e}
                </Text>
              ))
            : null}
          <ArrowRightIcon
            onClick={() => {
              nextPage();
            }}
          />
        </Flex>
      )}
    </>
  );
};

export default FilterPag;
