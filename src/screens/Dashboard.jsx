import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ComplaintRowMini from '../components/ComplaintViewer/ComplaintRowMini';
import { getAllComplaintsInDB } from '../redux/actions/complaintActions';
import { Flex } from '@chakra-ui/react';

const Dashboard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const complaintId = searchParams.get('id');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const complaint = useSelector(state => state.complaint);
  const { allComplaintData } = complaint;

  useEffect(() => {
    if (complaintId === null) {
      navigate('/login');
    }
  }, [complaintId]);

  return (
    <Flex width="390px" height="844px">
      {allComplaintData.length > 0 ? <>Data</> : <>No Data</>}
    </Flex>
  );
};

export default Dashboard;
