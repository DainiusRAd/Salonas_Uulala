import React from 'react';
import { StyledDiv, StyledH1, StyledImg } from './Logo.styled';

export default function Logo() {
  return (
    <StyledDiv>
      <StyledImg src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="logo" />
      <StyledH1>Salonas „Uulala“</StyledH1>
    </StyledDiv>
  );
}
