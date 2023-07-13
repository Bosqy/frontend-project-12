/* eslint-disable import/prefer-default-export */

import { io } from 'socket.io-client';

const socket = io();

export const newMessage = async (message) => {
  await socket.emit('newMessage', message);
};
