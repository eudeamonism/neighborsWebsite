import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from '../../NavBar';
import MobileForm from '../../Forms/MobileForm';
import { Text, VStack } from '@chakra-ui/react';
import UserCard from './UserCard';
import FilterDash from './FilterDash';
import FilterPag from './FilterPag';
import { filterMode } from '../../../redux/actions/filterActions';
const SmallDash = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(false);
  const complaint = useSelector(state => state.complaint);
  const user = useSelector(state => state.user);
  const { open } = complaint;

  const filterHandler = () => {
    dispatch(filterMode());
    setFilter(!filter);
  };

  return (
    <>
      <NavBar filterHandler={filterHandler} />
      <>
        {filter === false ? (
          <>
            {open === false && filter === false ? (
              <UserCard />
            ) : (
              <VStack>
                <MobileForm />
              </VStack>
            )}
          </>
        ) : (
          <>
            <FilterDash />
            <FilterPag />
          </>
        )}
      </>
    </>
  );
};

export default SmallDash;
