/* eslint-disable functional/no-expression-statements */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useAuth } from '../hooks';
import { fetchData } from '../slices/dataSlice';

const ChatPage = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const authHeader = auth.getAuthHeader();

  useEffect(() => {
    dispatch(fetchData(authHeader));
  }, [dispatch, authHeader]);

  const data = JSON.stringify(useSelector((state) => state.data), null, 2);

  return (
    <pre>
      {data}
    </pre>
  );
};

export default ChatPage;
