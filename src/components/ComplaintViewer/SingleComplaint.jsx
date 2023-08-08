import { useSelector } from 'react-redux';

const SingleComplaint = () => {
  const complaint = useSelector(state => state.complaint);
  const { singleComplaintData } = complaint;

  console.log(singleComplaintData);
  return <div>{singleComplaintData.displayName}</div>;
};

export default SingleComplaint;
