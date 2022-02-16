import styled from "styled-components";

export const StyledMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    position: relative;
    transform-origin: 1px;

    &.active {
      background-color: black;
      &:first-child {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }

  // don't show menu button on desktop
  ${({ theme }) => theme.media.desktop} {
    display: none;
  }
`;
