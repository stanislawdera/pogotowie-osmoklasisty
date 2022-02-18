import styled from "styled-components";

export const StyledEnrollmentBanner = styled.div`
  @keyframes showUp {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: all 0.3s ease-in-out;
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  animation: showUp 0.6s ease-in-out;

  &:hover {
    border-bottom: 10px solid ${({ theme }) => theme.colors.primary};
  }
`;
