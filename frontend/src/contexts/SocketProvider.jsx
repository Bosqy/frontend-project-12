import { io } from 'socket.io-client';
import { useCallback, useMemo } from 'react';

import { SocketContext } from '.';

const SocketProvider = ({ children }) => {
  const socket = io();

  const newChannel = useCallback(async (channel) => {
    const { data } = await socket.emitWithAck('newChannel', channel);
    return data.id;
  }, [socket]);

  const removeChannel = useCallback(async (id) => {
    await socket.emit('removeChannel', id);
  }, [socket]);

  const renameChannel = useCallback(async (channel) => {
    await socket.emit('renameChannel', channel);
  }, [socket]);

  const value = useMemo(() => ({
    socket,
    newChannel,
    removeChannel,
    renameChannel,
  }), [socket, newChannel, removeChannel, renameChannel]);

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
