import { io } from 'socket.io-client';
import { useCallback, useMemo } from 'react';

import { SocketContext } from '.';

const SocketProvider = ({ children }) => {
  const socket = io();

  const renameChannel = useCallback(async (channel) => {
    await socket.emit('renameChannel', channel);
  }, [socket]);

  const value = useMemo(() => ({
    socket,
    renameChannel,
  }), [socket, renameChannel]);

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
