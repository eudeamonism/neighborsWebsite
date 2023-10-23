import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../NavBar';
import MobileForm from '../Forms/MobileForm';
import { VStack } from '@chakra-ui/react';
const SmallDash = () => {
  const complaint = useSelector(state => state.complaint);
  const { open } = complaint;
  return (
    <>
      <NavBar />
      {open === false ? null : (
        <VStack>
          <MobileForm />
        </VStack>
      )}
    </>
  );
};

export default SmallDash;
