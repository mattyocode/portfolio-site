import React from 'react';
import {
  Wrapper,
  Base,
  Title,
  Fields,
  Label,
  Input,
  Message,
  SubmitButton,
} from './styles/form';

export default function ContactForm() {
  const submitHandler = () => {};
  return (
    <Wrapper>
      <Base onSubmit={submitHandler}>
        <Title>Get in touch.</Title>
        <Fields>
          <Label htmlFor='fullname'>Name:</Label>
          <Input
            type='text'
            // value={'1'}
            // placeholder='Full Name'
            onChange={() => {}}
          />
          <Label htmlFor='email'>Email:</Label>
          <Input
            type='email'
            name='email'
            // value={'1'}
            // placeholder='Email address'
            onChange={() => {}}
          />

          <Label htmlFor='subject'>Subject:</Label>
          <Input
            type='text'
            name='subject'
            // value={'1'}
            // placeholder='Subject'
            onChange={() => {}}
          />

          <Label htmlFor='message'>Message:</Label>
          <Message
            name='message'
            // value={'1'}
            // placeholder='Message'
            onChange={() => {}}
          ></Message>
        </Fields>
      </Base>
    </Wrapper>
  );
}
