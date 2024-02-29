import styled from "@emotion/styled";

export const WrapperHomeContents = styled.div`
  width: 390px;
  height: calc(100vh - 219px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;
  border-left: 1px solid black;
  border-right: 1px solid black;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const HomeContent = styled.div`
  width: 300px;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 10px;
  flex-shrink: 0;
`;
