/* eslint-disable functional/no-expression-statements */

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAuth, useSocket } from '../hooks';
import fetchData from '../slices/fetchData';
import { addMessage } from '../slices/messagesSlice';
import { addChannel, removeChannel } from '../slices/channelsSlice';
import Channels from './Channels';
import Messages from './Messages';

const ChatPage = () => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const authHeader = auth.getAuthHeader();

  const { socket } = useSocket();

  useEffect(() => {
    dispatch(fetchData(authHeader));
  });

  useEffect(() => {
    socket.on('newMessage', (message) => {
      dispatch(addMessage(message));
    });
    return () => {
      socket.off('newMessage');
    };
  });

  useEffect(() => {
    socket.on('newChannel', (channel) => {
      dispatch(addChannel(channel));
    });
    return () => {
      socket.off('newChannel');
    };
  });

  useEffect(() => {
    socket.on('removeChannel', ({ id }) => {
      console.log(id);
      dispatch(removeChannel(id));
    });
    return () => {
      socket.off('removeChannel');
    };
  });

  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <Channels />
        <Messages />
      </div>
    </div>
  );
};

export default ChatPage;
