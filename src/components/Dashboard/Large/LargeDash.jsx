import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';

import LargeNav from './LargeNav';

import Policy from './Policy';
import AllComplaints from './AllComplaints';
import MyComplaints from './MyComplaints';

const LargeDash = () => {
  const [createComplaint, setCreateComplaint] = useState(false);
  const [myComplaints, setMyComplaints] = useState(false);
  const [allComplaints, setAllComplaints] = useState(false);
  const [policy, setPolicy] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { userInfo } = user;

  useEffect(() => {
    if (userInfo === null) {
      navigate('/');
    }
  }, [dispatch]);

  const createToggle = () => {
    setCreateComplaint(true);
    setMyComplaints(false);
    setAllComplaints(false);
    setPolicy(false);
  };

  const myToggle = () => {
    setCreateComplaint(false);
    setMyComplaints(true);
    setAllComplaints(false);
    setPolicy(false);
  };

  const allToggle = () => {
    setCreateComplaint(false);
    setMyComplaints(false);
    setAllComplaints(true);
    setPolicy(false);
  };

  const policyToggle = () => {
    setCreateComplaint(false);
    setMyComplaints(false);
    setAllComplaints(false);
    setPolicy(true);
  };

  return (
    <>
      <LargeNav
        createComplaintToggle={createToggle}
        myComplaintsToggle={myToggle}
        allComplaintsToggle={allToggle}
        policyToggleMode={policyToggle}
        createComplaint={createComplaint}
        myComplaints={myComplaints}
        allComplaints={allComplaints}
        policy={policy}
      />
      <Flex direction="column">
        {policy === true ? <Policy /> : null}
        {createComplaint === true ? <Flex>Create Time</Flex> : null}
        {allComplaints === true ? <AllComplaints /> : null}
        {myComplaints === true ? <MyComplaints /> : null}
      </Flex>
    </>
  );
};

export default LargeDash;

// base 432px
// md 768px
// lg 992px
// xl 1280
// "2xl" 1536px
