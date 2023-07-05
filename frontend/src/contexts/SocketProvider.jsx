/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable functional/no-expression-statements */

import { io } from 'socket.io-client';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { SocketContext } from '.';
import { addChannel, deleteChannel } from '../slices/channelsSlice';

const SocketProvider = ({ children }) => {
  const socket = io();
  const dispatch = useDispatch();

  const newMessage = useCallback(async (message) => {
    await socket.emit('newMessage', message);
  }, [socket]);

  const newChannel = useCallback(async (channel) => {
    await socket.emit('newChannel', channel, ({ data }) => {
      dispatch(addChannel(data));
    });
  }, [socket, dispatch]);

  const removeChannel = useCallback(async (id) => {
    await socket.emit('removeChannel', id, () => {
      dispatch(deleteChannel(id));
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{
      socket,
      newMessage,
      newChannel,
      removeChannel,
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
