import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from './Navigation.styled';

export default function Navigation() {
  function handleLogout() {
    localStorage.removeItem('isAuthenticated');
    window.location.assign('/');
  }

  return (
    <StyledNav>
      <Link to="/clients">Klientai</Link>
      <Link to="/register">Registruoti naują klientą</Link>
      <Link onClick={handleLogout}>Atsijungti</Link>
    </StyledNav>
  );
}
