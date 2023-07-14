/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { useAuth, useSocket } from '../hooks';
import fetchData from '../slices/fetchData';
import {
  setError,
} from '../slices/channelsSlice';

import Channels from './Channels';
import Messages from './Messages';

import routes from '../routes';

const ChatPage = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const authToken = auth.getAuthToken();
  const authHeader = authToken ? { Authorization: `Bearer ${authToken}` } : {};

  const { socket } = useSocket();

  useEffect(() => {
    dispatch(fetchData(authHeader));
  }, []);

  const { error, loading } = useSelector((state) => state.channels);

  useEffect(() => {
    socket.on('connect_error', () => {
      toast.error(t('errorNetwork'));
      dispatch(setError(true));
    });
    return () => {
      socket.off('connect_error');
    };
  }, []);

  if (error) {
    auth.logOut();
    navigate(routes.login());
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <Channels />
        <Messages />
      </div>
    </div>
  );
};

export default ChatPage;
