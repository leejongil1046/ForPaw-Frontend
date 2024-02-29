import styled from "@emotion/styled";

export const WrapperHeader = styled.div`
  width: 390px;
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  z-index: 1;
  background-color: white;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  /* opacity: 0; */
`;

export const Header = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px 4px;
`;

export const LeftArrowTitleContainer = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-left: 10px;
`;

export const WrapperSearch = styled.div`
  width: 390px;
  height: calc(100vh - 95px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;

export const SearchContainer = styled.div`
  width: 390px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
`;

export const SearchWindow = styled.input`
  width: 253px;
  height: 44px;
  background-color: #fef8f2;
  border: 2px solid transparent;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 50px;

  ::placeholder {
    color: #bea597;
  }

  :focus {
    border: 2px solid #bea597;
    color: #bea597;
  }
`;

export const SearchImageContainer = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 37px;
  top: 24px;
`;

export const SearchButton = styled.button`
  width: 73px;
  height: 44px;
  background-color: #240d05;
  border: none;
  border-radius: 22px;
  font-size: 20px;
  font-weight: 600;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

export const SearchContentsContainer = styled.div`
  width: 390px;
  height: calc(100vh - 175px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
`;

export const SearchContent = styled.div``;
