/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-conditional-statements */

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Form, Button } from 'react-bootstrap';
import { useRef, useEffect, useState } from 'react';

const LoginPage = () => {
  const { t } = useTranslation();

  const loginSchema = yup.object().shape({
    username: yup.string().min(5).max(50).required(),
    password: yup.string().min(5).max(50).required(),
  });

  const [authFailed, setAuthFailed] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      setAuthFailed(true);
      formik.setSubmitting(false);
    },
    validationSchema: loginSchema,
  });

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (authFailed) {
      inputRef.current.focus();
    }
  }, [authFailed]);

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <Form className="col-12 col-md-6 mt-3 mt-mb-0" onSubmit={formik.handleSubmit}>
          <h1 className="text-center mb-4">{t('loginHeader')}</h1>
          <fieldset disabled={formik.isSubmitting}>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder={t('username')}
                name="username"
                id="username"
                isInvalid={authFailed}
                required
                ref={inputRef}
              />
              <Form.Label htmlFor="username">{t('username')}</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder={t('password')}
                name="password"
                id="password"
                isInvalid={authFailed}
                required
              />
              <Form.Label htmlFor="password">{t('password')}</Form.Label>
              <Form.Control.Feedback type="invalid">{t('authFailed')}</Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              variant="outline-primary"
              className="w-100 mb-3"
            >
              {t('loginHeader')}
            </Button>
          </fieldset>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
