import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.red};
    border: none;
    border-radius: ${theme.spacings.small};
    color: ${theme.colors.white};
    padding: ${theme.spacings.tiny};
    text-align: center;
    text-decoration: none;
    font-size: ${theme.font.sizes.xxsmall};
    cursor: pointer;
    box-shadow: 0 ${theme.spacings.tiny} #999;

    &:hover {
      background-color: ${theme.colors.darkred};
    }
    &:active {
      background-color: ${theme.colors.darkred};
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  `}
`;
