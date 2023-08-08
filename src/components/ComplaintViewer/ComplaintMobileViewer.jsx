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

  console.log(allComplaintData);
  return (
    <>
      {allComplaintData.map(complaint => (
        <Suspense fallback={<Spinner />} key={complaint._id}>
          <LazyRow
            authoritiesNotified={complaint.authoritiesNotified}
            complaintType={complaint.complaintType}
            createdAt={complaint.createdAt}
            crossStreet1={complaint.crossStreet1}
            crossStreet2={complaint.crossStreet2}
            description={complaint.description}
            displayName={complaint.displayName}
            imageUrl={complaint.imageUrl}
            occurence={complaint.occurence}
            time={complaint.time}
            title={complaint.title}
            updatedAt={complaint.updatedAt}
            userId={complaint.userId}
            id={complaint._id}
          />
        </Suspense>
      ))}
    </>
  );
};

export default ComplaintMobileViewer;
