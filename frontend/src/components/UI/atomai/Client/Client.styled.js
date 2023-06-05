import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const StyledDiv = styled.div`
  width: 180px;
  background-color: var(--background-color);
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.3s, box-shadow 0.3s;

  :hover {
    background-color: #eee;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    :hover {
      opacity: 0.9;
    }

    :first-of-type {
      background-color: #a18da8;
      color: #000;
      margin-bottom: 1em;
    }

    :last-of-type {
      background-color: #a071af;
      color: #000;
    }
  }
`;

export const StyledName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const StyledLabel = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const StyledValue = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;
