
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';

import { gmailData } from '../../redux/actions/userActions';

const GLogin = () => {
  const dispatch = useDispatch();
  return (
    <GoogleLogin
      onSuccess={creds => {
        dispatch(gmailData(creds));
      }}
      onError={() => {
        console.log('Login Failed!');
      }}
    ></GoogleLogin>
  );
};

export default GLogin;
