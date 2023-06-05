import styled from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 100%;
  text-align: center;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  margin: 2em auto;
  padding-bottom: 1em;
  border-radius: 10px;
  transition: background-color 0.3s, box-shadow 0.3s;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    padding-top: 2rem;
  }

  a {
    margin-bottom: 1em;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
    margin: 0;

    a {
      color: #0077cc;
      text-decoration: none;
      font-weight: bold;

      :hover {
        text-decoration: underline;
        color: #005fa3;
        transition: color 0.3s ease;
      }
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 70%;
  max-width: 500px;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    border-bottom: 2px solid #ccc;
    outline: none;
    transition: border-bottom-color 0.3s ease;
    width: 100%;

    &:focus {
      border-bottom-color: #333;
    }
  }
`;

export const StyledShowButtonDiv = styled.div`
  position: relative;
`;

export const ShowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  font-size: 24px;

  :hover {
    opacity: 0.7;
  }
`;

export const StyledLoader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10%;
  margin-bottom: 0.5em;
  background: conic-gradient(#0077cc 10%, #3b9ce2);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: s3 1s infinite linear;

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #996ba9;
  color: #fff;
  border: none;
  padding: 0.4rem 10%;
  margin-bottom: 0,7rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a18da8;
  }
`;

export const ErrorMessage = styled.div`
  color: #cc0000;
  font-size: 18px;
  margin-bottom: 0.5em;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;
