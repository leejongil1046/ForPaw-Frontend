import styled from "@emotion/styled";

export const WrapperNavigation = styled.div`
  width: 390px;
  height: 84px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0 auto;
  z-index: 1;
  border: 1px solid black;
  /* opacity: 0; */
`;

export const NavigationIconContainer = styled.div`
  width: 44px;
  height: 44px;
  padding-top: 10px;

  :hover {
    cursor: pointer;
  }
`;
