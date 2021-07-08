import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};
`;

export default Paragraph;
