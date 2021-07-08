import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 220px;
  height: 47px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50px;
  font-family: Montserat, sans-serif;
  font-size: 16px;
  font-weight: 600;
  background-color: ${({ color }) => color || 'hsl(49,100%,58%)'};
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 105px;
      height: 30px;
      font-size: 10px;
      background-color: hsl(0, 0%, 90%);
    `}
`;

export default Button;
