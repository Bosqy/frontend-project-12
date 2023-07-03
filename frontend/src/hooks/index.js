/* eslint-disable import/prefer-default-export */

import { useContext } from 'react';

import { AuthContext, SocketContext } from '../contexts';

export const useAuth = () => useContext(AuthContext);

export const useSocket = () => useContext(SocketContext);
