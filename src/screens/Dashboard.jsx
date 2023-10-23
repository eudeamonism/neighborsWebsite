import { useEffect } from 'react';
import { Flex, VStack, useMediaQuery } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { gettingProfile, logoutUser } from '../redux/actions/userActions';
import SmallDash from '../components/Dashboard/SmallDash';

const Dashboard = () => {
  const [isLargerThan430] = useMediaQuery('(width > 431px)');

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

  return <>{isLargerThan430 ? 'Larger' : <SmallDash />}</>;
};

export default Dashboard;
