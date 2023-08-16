import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Spacer, Spinner, Text } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import ComplaintMobileViewer from '../components/ComplaintViewer/ComplaintMobileViewer';
import { getAllComplaintsInDB } from '../redux/actions/complaintActions';

// ... (imports and initial code)

const Dashboard = () => {
  const dispatch = useDispatch();
  const complaint = useSelector(state => state.complaint);

  const { allComplaintData, singleComplaintData } = complaint;

  // New state to manage retry logic
  const [retrying, setRetrying] = useState(false);

  useEffect(() => {
    dispatch(getAllComplaintsInDB());

    // Start retry mechanism after initial load
    if (allComplaintData.length === 0) {
      const retryInterval = setInterval(() => {
        setRetrying(true);
        dispatch(getAllComplaintsInDB());
      }, 2000);

      return () => {
        clearInterval(retryInterval);
        setRetrying(false);
      };
    }
  }, [dispatch, allComplaintData.length]);

  // Determine whether to show loading screen
  const isLoading = allComplaintData.length === 0 || retrying;

  console.log(singleComplaintData);
  return (
    <Flex h="844px" direction="column" width="390px">
      <Box mb="55px">
        <NavBar />
      </Box>

      <Flex direction="column">
        {isLoading ? (
          <Flex width="390px" alignItems="center" justify="center" mt="350px">
            <Flex gap="2">
              <Spinner size="xl" />
              <Text fontSize="2xl">Loading...</Text>
            </Flex>
          </Flex>
        ) : (
          <ComplaintMobileViewer />
        )}
      </Flex>
      <Spacer />
    </Flex>
  );
};

export default Dashboard;
