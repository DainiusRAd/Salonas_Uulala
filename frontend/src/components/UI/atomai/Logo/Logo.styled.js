import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  border-radius: 0%;
  background-color: var(--background-color);
  margin: 1em auto;
  padding: 0.5em;
  box-shadow: var(--box-shadow);
`;

export const StyledImg = styled.img`
  width: 260px;
  height: 100px;
  margin-top: 15px;
  object-fit: cover;
  border-radius: 0%;
  opacity: 0.7;
`;

export const StyledH1 = styled.h1`
  margin-top: 0px;
  margin-top: 15px;
  text-align: center;
`;
