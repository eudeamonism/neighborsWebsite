import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../NavBar';
import MobileForm from '../../Forms/MobileForm';
import { VStack } from '@chakra-ui/react';
import UserCard from './UserCard';
const SmallDash = () => {
  const complaint = useSelector(state => state.complaint);
  const user = useSelector(state => state.user);
  const { open } = complaint;
 
  return (
    <>
      <NavBar />
      <>
        {open === false ? (
          <UserCard />
        ) : (
          <VStack>
            <MobileForm />
          </VStack>
        )}
      </>
    </>
  );
};

export default SmallDash;
