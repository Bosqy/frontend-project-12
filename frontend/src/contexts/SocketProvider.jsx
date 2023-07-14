import { io } from 'socket.io-client';
import { useMemo } from 'react';

import { SocketContext } from '.';

const SocketProvider = ({ children }) => {
  const socket = io();

  const value = useMemo(() => ({
    socket,
  }), [socket]);

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
