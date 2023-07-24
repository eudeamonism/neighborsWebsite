import { Box, useMediaQuery, Switch, Flex, FormLabel } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

const DashboardMenu = () => {
  const [isSmallerThan400] = useMediaQuery('(width < 400px)');
  const user = useSelector(state => state.user);

  return (
    <Flex
      alignItems={isSmallerThan400 ? "null" : "center"}
      gap="2"
      bg={isSmallerThan400 ? 'orange.500' : 'blue.600'}
      width={isSmallerThan400 ? '360px' : '800px'}
      height={isSmallerThan400 ? '125px' : '30px'}
    >
      <Flex gap="2" mt="2">
        <Switch
          id="complaintSwitch"
          onChange={() => {
            console.log('hello');
          }}
        />
        <FormLabel htmlFor="myComplaints">My Complaints Only</FormLabel>
      </Flex>
    </Flex>
  );
};

export default DashboardMenu;
