import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.spacings.mediumLarge};
    max-width: 80rem;
    margin: 8rem auto;
    background: ${theme.colors.white};
    padding: ${theme.spacings.xlarge};
  `}
`;
