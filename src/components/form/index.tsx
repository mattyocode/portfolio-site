import React, { useState, FocusEvent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import SendIcon from '../../../public/icons/send.svg';
import useHttp from '../../helpers/useHttp';
import {
  Wrapper,
  Base,
  Title,
  Fields,
  Label,
  Input,
  Message,
  FieldError,
  SubmitButton,
  CenterButton,
} from './styles/form';

export default function ContactForm(): JSX.Element {
  const [activeField, setActiveField] = useState<string | null>(null);

  const sendMailRequest = async ({
    name,
    email,
    message,
  }: {
    name: string;
    email: string;
    message: string;
  }): Promise<{
    detail: string;
  }> => {
    const config = {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let data: {
      detail: string;
    };

    try {
      const response = await fetch('/api/sendgrid/', config);
      data = await response.json();
      if (response.ok) {
        return data;
      }
      throw new Error(response.statusText);
    } catch (err) {
      return Promise.reject(err.message ? err.message : data);
    }
  };

  const { sendRequest, status, error, data } = useHttp(sendMailRequest);

  const handleFocus = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setActiveField(e.target.name);
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(96, "That's a little too long - sorry!")
      .required('Name is required'),
    email: Yup.string()
      .email('Email must be valid')
      .required('Email is required'),
    message: Yup.string().required('Please include a message'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      sendRequest({
        name: values.name,
        email: values.email,
        message: values.message,
      });
    },
    validationSchema: contactSchema,
  });

  const submitBtnDisabled =
    formik.errors.name ||
    !formik.touched.name ||
    formik.errors.email ||
    !formik.touched.email ||
    formik.errors.message ||
    status === 'pending' ||
    status === 'succeeded';
  return (
    <Wrapper>
      <Base onSubmit={formik.handleSubmit}>
        <Title>Get in touch.</Title>
        <Fields>
          <Label htmlFor='name'>
            Name:
            {formik.errors.name && formik.touched.name && (
              <FieldError> *{formik.errors.name}</FieldError>
            )}
          </Label>

          <Input
            type='text'
            id='name'
            name='name'
            autoComplete='full name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={handleFocus}
          />
          <Label htmlFor='email'>
            Email:
            {formik.errors.email && formik.touched.email && (
              <FieldError> *{formik.errors.email}</FieldError>
            )}
          </Label>
          <Input
            type='email'
            name='email'
            autoComplete='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={handleFocus}
          />

          <Label htmlFor='message'>
            Message:
            {formik.errors.message && formik.touched.message && (
              <FieldError> *{formik.errors.message}</FieldError>
            )}
          </Label>
          <Message
            name='message'
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={handleFocus}
          ></Message>
          <CenterButton>
            <SubmitButton type='submit' disabled={submitBtnDisabled}>
              {status === 'idle' && 'Send'}
              {status === 'pending' && 'Sending...'}
              {status === 'error' && 'Try again'}
              {status === 'succeeded' && 'Sent!'}
            </SubmitButton>
          </CenterButton>
        </Fields>
      </Base>
    </Wrapper>
  );
}
