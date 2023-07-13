import { io } from 'socket.io-client';

export const socket = io();

export const newMessage = async (message) => {
  await socket.emit('newMessage', message);
};

export const newChannel = async (channel) => {
  const { data } = await socket.emitWithAck('newChannel', channel);
  return data.id;
};
