import { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { gettingProfile, logoutUser } from '../redux/actions/userActions';
import NavBar from '../components/NavBar';
import BarMenu from '../components/BarMenu/BarMenu';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const { userInfo, profile } = user;

  //userInfo? because if token expires then it will not be present
  const token = userInfo?.token;
  const refresh = userInfo?.refresh;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    }

    if ((userInfo && token) || (userInfo && refresh)) {
      dispatch(gettingProfile(token, refresh));
    }

    if (profile === 'expired') {
      dispatch(logoutUser());
    }
  }, [dispatch, token]);

  console.log(profile);

  return (
    <Flex direction="column"  >
      <NavBar />
      <Flex direction="row">
        <Flex >
          <BarMenu />
        </Flex>
        <Flex direction="column">
          <Flex bg="blue">Popular Preview</Flex>
          <Flex bg="green">Split Viewer</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
