/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable functional/no-expression-statements */

import { io } from 'socket.io-client';
import { useCallback } from 'react';

import { SocketContext } from '.';

const SocketProvider = ({ children }) => {
  const socket = io();

  const newMessage = useCallback(async (message) => {
    await socket.emit('newMessage', message);
  }, [socket]);

  const newChannel = useCallback(async (channel) => {
    await socket.emit('newChannel', channel);
  }, [socket]);

  const removeChannel = useCallback(async (id) => {
    await socket.emit('removeChannel', id);
  }, [socket]);

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
