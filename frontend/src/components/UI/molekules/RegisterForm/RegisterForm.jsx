import React, { useState } from 'react';
import moment from 'moment';
import {
  FormGroup,
  StyledForm,
  StyledWrapper,
  SubmitButton,
} from './RegisterForm.styled';
import { createUser } from '../../../../api calls/user';

export default function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        registrationDate,
      };
      await createUser(userData);
      alert('User created successfully!');
    } catch (error) {
      console.log(error);
      alert('Error creating user!');
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setRegistrationDate('');
  }

  return (
    <StyledWrapper>
      <h2>Registracijos forma</h2>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="firstName">Vardas:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="lastName">Pavardė:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">El. paštas: *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="tel">Telefono nr.: *</label>
          <input
            type="text"
            id="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="registrationDate">Registracijos data: *</label>
          <input
            type="datetime-local"
            id="registrationDate"
            value={
              registrationDate
                ? moment(registrationDate).format('YYYY-MM-DD HH:mm')
                : ''
            }
            onChange={(event) => setRegistrationDate(event.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Registruoti</SubmitButton>
      </StyledForm>
    </StyledWrapper>
  );
}
