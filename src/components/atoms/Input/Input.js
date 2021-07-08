import styled, { css } from 'styled-components';
import magnifierIcom from 'assets/icons/magnifier.svg';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;
  font-family: Montserrat, sans-serif;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.gray300};
  }

  ${({ search }) =>
    search &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xs};
      padding: 10px 20px 10px 40px;
      background-image: url('${() => magnifierIcom}');
      background-size: 15px;
      background-position: 10px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
