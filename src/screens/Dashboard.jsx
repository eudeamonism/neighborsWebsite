import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';

const Dashboard = () => {
  const user = useSelector(state => state.user);

  return (
    <>
      <NavBar />
    </>
  );
};

export default Dashboard;
