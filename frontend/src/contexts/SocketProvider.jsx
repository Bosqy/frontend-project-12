/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable functional/no-expression-statements */

import { io } from 'socket.io-client';
import { useCallback } from 'react';

import { SocketContext } from '.';

const SocketProvider = ({ children }) => {
  const socket = io('ws://localhost:5001');
  const newMessage = useCallback(async (data) => {
    await socket.emit('newMessage', data);
  }, [socket]);
  return (
    <SocketContext.Provider value={{ socket, newMessage }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
