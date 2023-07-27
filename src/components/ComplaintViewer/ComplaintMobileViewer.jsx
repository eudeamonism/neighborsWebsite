import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllComplaintsInDB } from '../../redux/actions/complaintActions';
import ComplaintRowMini from './ComplaintRowMini';

const ComplaintMobileViewer = () => {
  const dispatch = useDispatch();
  const complaintData = useSelector(state => state.complaint);
  const { loading, allComplaintData } = complaintData;

  useEffect(() => {
    dispatch(getAllComplaintsInDB());
  }, [dispatch]);

  return (
    <>
      {allComplaintData !== null
        ? allComplaintData.docs.map(complaint => (
            <ComplaintRowMini
              key={complaint._id}
              title={complaint.title}
              description={complaint.description}
            />
          ))
        : null}
    </>
  );
};

export default ComplaintMobileViewer;

//LESSON: Data is fetched asynchronously, so the JSX will not have anything to map since allComplaintData is initially set to null. So having the ternary expression, in a way, waits for the data to come...
