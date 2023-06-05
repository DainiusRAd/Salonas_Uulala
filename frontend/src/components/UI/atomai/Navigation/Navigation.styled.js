import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 1em auto;

  a {
    margin: 20px 20px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    border-radius: 2px;
    padding: 1em 8em;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    transition: background-color 0.3s, box-shadow 0.3s;

    :hover {
      background-color: #eee;
      box-shadow: 0px 2px 4px rgba(0, 0, 5, 0.2);
    }
    :active {
      background-color: #ccc;
      box-shadow: 0px 1px 2px rgba(0, 0, 5, 0.2);
    }
    :last-child {
      :hover {
        background-color: #a18da8;
        color: white;
        box-shadow: 0px 2px 4px rgba(0, 0, 5, 0.2);
      }
    }
  }
`;
