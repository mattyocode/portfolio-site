import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SendIcon from '../../../public/icons/send.svg';

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

export default function ContactForm() {
  const [activeField, setActiveField] = useState(false);

  const handleFocus = (e) => {
    setActiveField(e.target.name);
  };

  const submitHandler = () => {};

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
      submitHandler();
    },
    validationSchema: contactSchema,
  });

  const submitBtnDisabled =
    formik.errors.name ||
    !formik.touched.name ||
    formik.errors.email ||
    !formik.touched.email ||
    formik.errors.message;

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
              Send
            </SubmitButton>
          </CenterButton>
        </Fields>
      </Base>
    </Wrapper>
  );
}
