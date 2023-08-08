import React, { useEffect, Suspense, lazy } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getAllComplaintsInDB } from '../../redux/actions/complaintActions';

import { Skeleton, Spinner } from '@chakra-ui/react';

const ComplaintMobileViewer = () => {
  const LazyRow = lazy(() => import('./ComplaintRowMini'));
  const dispatch = useDispatch();
  const complaintData = useSelector(state => state.complaint);

  const { allComplaintData } = complaintData;

  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllComplaintsInDB());
    }, [3500]);
  }, [dispatch]);

  return (
    <>
      {allComplaintData.map(complaint => (
        <Suspense fallback={<Spinner />} key={complaint._id}>
          <LazyRow
            title={complaint.title}
            description={complaint.description}
            time={complaint.time}
          />
        </Suspense>
      ))}
    </>
  );
};

export default ComplaintMobileViewer;
