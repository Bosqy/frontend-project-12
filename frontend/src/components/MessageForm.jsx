/* eslint-disable functional/no-expression-statements */

import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import SendMessage from './SendMessage';

import { useSocket } from '../hooks';
import { addMessage } from '../slices/messagesSlice';

const MessageForm = () => {
  const { t } = useTranslation();

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { socket, newMessage } = useSocket();

  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('newMessage', (message) => {
      dispatch(addMessage(message));
    });
    return () => {
      socket.off('newMessage');
    };
  });

  const formik = useFormik({
    initialValues: { messageBody: '' },
    onSubmit: async ({ messageBody }) => {
      await newMessage({ message: messageBody, channelId: 1, user: 'admin' });
      formik.resetForm();
    },
  });

  return (
    <div className="mt-auto px-5 py-3">
      <Form onSubmit={formik.handleSubmit} noValidate className="py-1 border rounded-2">
        <Form.Group className="input-group">
          <Form.Control
            name="messageBody"
            autoComplete="off"
            aria-label={t('newMessage')}
            placeholder={t('newMessagePlaceholder')}
            className="border-0 p-0 ps-2"
            onChange={formik.handleChange}
            value={formik.values.messageBody}
            ref={inputRef}
          />
          <Button
            type="submit"
            variant="Dark"
          >
            <SendMessage />
            <span className="visually-hidden">
              {t('send')}
            </span>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default MessageForm;
