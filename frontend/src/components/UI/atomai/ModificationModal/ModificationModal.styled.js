import styled from 'styled-components';

export const StyledModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const StyledModalContent = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  position: relative;
  margin: 50px;
  max-width: 500px;
  max-height: 500px;
  width: 100%;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    input {
      border: 2px solid gray;
      border-radius: 5px;
      padding: 0.5rem;
      font-size: 1rem;
    }
  }

  button {
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin-top: 1rem;

    :first-of-type {
      margin-top: 0;
      background-color: darkgred;
      color: white;

      :hover {
        background-color: green;
        cursor: pointer;
      }
    }

    :last-of-type {
      background-color: darkred;
      color: white;

      :hover {
        background-color: red;
        cursor: pointer;
      }
    }
  }
`;

export const StyledError = styled.p`
  margin: 0;
  padding: 0;
  color: red;
  font-size: 14px;
`;
