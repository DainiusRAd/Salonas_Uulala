import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  StyledDiv,
  StyledLabel,
  StyledName,
  StyledValue,
  StyledCard,
} from './Client.styled';
import ModificationModal from '../ModificationModal/ModificationModal';
import { fetchUsers, deleteUser } from '../../../../api calls/user';

export default function Client() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getUsers() {
      const data = await fetchUsers();
      setUsers(data);
    }
    getUsers();
  }, []);

  function handleEditClick(user) {
    setSelectedUser(user);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  async function handleDeleteClick(userId) {
    try {
      if (window.confirm('Ar tikrai norite ištrinti šį klientą?')) {
        await deleteUser(userId);
        setUsers(users.filter((user) => user._id !== userId));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <StyledCard>
        {users.map((user) => (
          <StyledDiv key={user._id}>
            <StyledName>
              {user.firstName} {user.lastName}
            </StyledName>
            <StyledLabel>El. paštas:</StyledLabel>
            <StyledValue>{user.email}</StyledValue>
            <StyledLabel>Telefono nr.:</StyledLabel>
            <StyledValue>{user.PhoneNumber}</StyledValue>
            <StyledLabel>Registracijos data:</StyledLabel>
            <StyledValue>
              {moment(user.registrationDate).format('YYYY-MM-DD HH:mm')}
            </StyledValue>
            <button onClick={() => handleEditClick(user)}>
              Taisyti 
            </button>
            <button onClick={() => handleDeleteClick(user._id)}>
              Ištrinti 
            </button>
          </StyledDiv>
        ))}
      </StyledCard>
      {showModal && selectedUser && (
        <ModificationModal
          user={selectedUser}
          onClose={handleCloseModal}
          show={showModal}
        />
      )}
    </>
  );
}
