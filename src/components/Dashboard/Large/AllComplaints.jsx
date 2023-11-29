import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Flex,
  Text,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
} from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

import { paginateFilter } from '../../../redux/actions/filterActions';

import CWrapper from '../Small/CWrapper';

const AllComplaints = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(8);
  const { firstResults } = filter;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [filterSelection, setFilterSelection] = useState(' ');

  // Memoize the firstResults object
  const memoizedFirstResults = useMemo(() => firstResults, [firstResults]);

  useEffect(() => {
    dispatch(paginateFilter(page, perPage, filterSelection));
  }, [page, filterSelection]);

  useEffect(() => {
    if (memoizedFirstResults.complaints) {
      window.scrollTo(0, scrollPosition);
    }
  }, [memoizedFirstResults]);

  const moreData = () => {
    setPage(page + 1);
    setScrollPosition(0);
  };

  const lessData = () => {
    if (page > 1) {
      setPage(page - 1);
      setScrollPosition(0);
    }
  };

  console.log(firstResults);

  return (
    <>
      <Flex gap="2" align="center" direction="column">
        {memoizedFirstResults.complaints ? (
          <Flex direction="column" maxW="750px">
            <CWrapper props={memoizedFirstResults.complaints} />
          </Flex>
        ) : null}
        <Divider />
        <Flex align="center">
          <Flex
            bg="gray.50"
            _dark={{ backgroundColor: 'gray.600' }}
            borderRadius="full"
            mx="4"
          >
            {memoizedFirstResults['pagination'] ? (
              <Flex direction="column">
                {page === 1 ||
                !memoizedFirstResults.complaints.length ? null : (
                  <TriangleUpIcon mb="2" boxSize={6} onClick={lessData} />
                )}
                {page ===
                memoizedFirstResults['pagination'].totalPages ? null : (
                  <TriangleDownIcon boxSize={6} onClick={moreData} />
                )}
              </Flex>
            ) : null}
          </Flex>
          <Menu>
            <MenuButton>
              <Text
                bg="gray.50"
                _dark={{ backgroundColor: 'gray.600' }}
                p="1"
                borderRadius="4"
                fontWeight="semibold"
              >
                Filter
              </Text>
            </MenuButton>
            <MenuList>
              <MenuOptionGroup>
                <MenuItemOption
                  value="{createdAt: -1}"
                  onClick={() => {
                    setFilterSelection('latest');
                  }}
                >
                  Latest
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Flex>
        <Divider mb="4" />
      </Flex>
    </>
  );
};

export default AllComplaints;
