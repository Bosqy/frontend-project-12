/* eslint-disable functional/no-expression-statements */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useAuth } from '../hooks';
import fetchData from '../slices/fetchData';

const ChatPage = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const authHeader = auth.getAuthHeader();

  useEffect(() => {
    dispatch(fetchData(authHeader));
  }, []);

  const channels = JSON.stringify(useSelector((state) => state.channels), null, 2);
  const messages = JSON.stringify(useSelector((state) => state.messages), null, 2);

  return (
    <>
      <pre>
        {channels}
      </pre>
      <pre>
        {messages}
      </pre>
    </>
  );
};

export default ChatPage;
