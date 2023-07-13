import { io } from 'socket.io-client';

export const socket = io();

export const newMessage = async (message) => {
  await socket.emit('newMessage', message);
};
