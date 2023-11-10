import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../NavBar';
import MobileForm from '../../Forms/MobileForm';
import { Text, VStack } from '@chakra-ui/react';
import UserCard from './UserCard';
import Filter from './Filter';
const SmallDash = () => {
  const [filter, setFilter] = useState(false);
  const complaint = useSelector(state => state.complaint);
  const user = useSelector(state => state.user);
  const { open } = complaint;

  const filterHandler = () => {
    setFilter(!filter);
  };

  return (
    <>
      <NavBar filterHandler={filterHandler} />
      <>
        {filter === false ? (
          <>
            {open === false ? (
              <UserCard />
            ) : (
              <VStack>
                <MobileForm />
              </VStack>
            )}
          </>
        ) : (
          <Filter />
        )}
      </>
    </>
  );
};

export default SmallDash;
