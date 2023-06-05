import React, { useState } from 'react';
import moment from 'moment';
import {
  StyledModalBackground,
  StyledModalContent,
  StyledError,
} from './ModificationModal.styled';
import { updateUser } from '../../../../api calls/user';

export default function ModificationModal({ user, onClose, show }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [registrationDate, setRegistrationDate] = useState(moment(user.registrationDate).format('YYYY-MM-DD HH:mm'));
  const [error, setError] = useState('');

  async function handleSave() {
    if (!email || !registrationDate) {
      setError('El. pašto ir registracijos datos laukai yra būtini');
      return;
    }
    try {
      const userData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        registrationDate: moment(registrationDate).toDate(),
      };
      await updateUser(user._id, userData);
      console.log('Vartotojas sėkmingai atnaujintas!');
      window.location.reload();
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  const errorVisibility = () => {
    setError('');
  };

  return (
    <>
      {show && (
        <StyledModalBackground>
          <StyledModalContent onSubmit={handleSave}>
            <h2>Keisti vartotojo informaciją</h2>
            <label>
              Vardas:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label>
              Pavardė:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label>
              El. paštas: *
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  errorVisibility();
                }}
                required
              />
            </label>
            <label>
              Telefono nr.:
              <input
              type="text"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                errorVisibility();
                }}
                />
            </label>
            <label>
              Registracijos data: *
              <input
                type="datetime-local"
                value={registrationDate}
                onChange={(e) => {
                  setRegistrationDate(e.target.value);
                  errorVisibility();
                }}
                required
              />
            </label>
            {error && <StyledError>{error}</StyledError>}
            <button type="submit">Išsaugoti</button>
            <button onClick={onClose}>Atšaukti</button>
          </StyledModalContent>
        </StyledModalBackground>
      )}
    </>
  );
}
