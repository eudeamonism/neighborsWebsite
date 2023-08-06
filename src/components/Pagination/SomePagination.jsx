import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { Text } from '@chakra-ui/react';

const SomePagination = () => {
  const complaint = useSelector(state => state.complaint);
  const { allComplaintData } = complaint;

  console.log(allComplaintData);

  const paginatedComponent = (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={event => {
        const newOffset =
          (event.selected * 5) % allComplaintData.totalDocs.length;
      }}
      pageCount={allComplaintData.totalPages}
      previousLabel="Previous"
      renderOnZeroPageCount={null}
    ></ReactPaginate>
  );

  return <>{allComplaintData ? paginatedComponent : <Text>Nothing</Text>}</>;
};

export default SomePagination;
