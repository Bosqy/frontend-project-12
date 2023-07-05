/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-conditional-statements */
/* eslint-disable no-unused-vars */

import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import { signupSchema } from '../schemas';
import signupImg from '../assets/signup.jpg';
import routes from '../routes';
import { useAuth } from '../hooks';

const SignupPage = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: () => {},
    validationSchema: signupSchema(t),
  });

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <div>
                <img src={signupImg} className="rounded-circle" alt={t('registrationHeader')} />
              </div>
              <Form className="w-50" onSubmit={formik.handleSubmit}>
                <h1 className="text-center mb-4">{t('registrationHeader')}</h1>
                <fieldset disabled={formik.isSubmitting}>
                  <Form.Group className="form-floating mb-3">
                    <Form.Control
                      name="username"
                      autoComplete="username"
                      required
                      id="username"
                      placeholder={t('username')}
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      isInvalid={formik.errors.username}
                      ref={inputRef}
                    />
                    <Form.Label htmlFor="username">{t('username')}</Form.Label>
                    <Form.Control.Feedback type="invalid">{formik.errors.username}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="form-floating mb-3">
                    <Form.Control
                      name="password"
                      autoComplete="new-password"
                      required
                      placeholder={t('password')}
                      type="password"
                      id="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      isInvalid={formik.errors.password}
                    />
                    <Form.Label htmlFor="password">{t('password')}</Form.Label>
                    <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="form-floating mb-4">
                    <Form.Control
                      name="confirmPassword"
                      autoComplete="new-password"
                      required
                      placeholder={t('confirmPassword')}
                      type="password"
                      id="confirmPassword"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      isInvalid={formik.errors.confirmPassword}
                    />
                    <Form.Label htmlFor="confirmPassword">{t('confirmPassword')}</Form.Label>
                    <Form.Control.Feedback type="invalid">{formik.errors.confirmPassword}</Form.Control.Feedback>
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="outline-primary"
                    className="w-100"
                  >
                    {t('register')}
                  </Button>
                </fieldset>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
