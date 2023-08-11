import React, { Suspense, lazy } from 'react';

import { useSelector } from 'react-redux';

import { Spinner } from '@chakra-ui/react';

const ComplaintMobileViewer = () => {
  const LazyRow = lazy(() => import('./ComplaintRowMini'));

  const complaintData = useSelector(state => state.complaint);

  const { allComplaintData, loading } = complaintData;

  const mapper = (
    <>
      {allComplaintData ? (
        allComplaintData.map(complaint => (
          <Suspense fallback={<Spinner />} key={complaint._id}>
            <LazyRow
              description={complaint.description}
              time={complaint.time}
              title={complaint.title}
              loading={loading}
              id={complaint._id}
            />
          </Suspense>
        ))
      ) : (
        <div>Loading</div>
      )}
    </>
  );

  return <>{mapper}</>;
};

export default ComplaintMobileViewer;
