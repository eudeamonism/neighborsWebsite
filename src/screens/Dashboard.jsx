import { useEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { gettingProfile, logoutUser } from '../redux/actions/userActions';
import SmallDash from '../components/Dashboard/Small/SmallDash';
import LargeDash from '../components/Dashboard/Large/LargeDash';

const Dashboard = () => {
  const [isLargerThan430] = useMediaQuery('(width > 431px)');
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { userInfo, profile } = user;
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [refresh, setRefresh] = useState(null);

  if (userInfo !== null && userInfo.length > 1) {
    setToken(userInfo?.token);
    setRefresh(userInfo?.refresh);
  }

  return <>{isLargerThan430 ? <LargeDash /> : <SmallDash />}</>;
};

export default Dashboard;
