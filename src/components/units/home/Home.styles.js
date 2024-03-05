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

export const HomeIntroContainer = styled.div`
  width: 344px;
  height: 152px;
  background-color: #ff6636;
  border-radius: 20px;
  margin-top: 5px;
  flex-shrink: 0;
  position: relative;
`;

export const HomeIntroTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: white;
  position: absolute;
  top: 40px;
  left: 15px;
`;

export const PawImageSmallBlock = styled.div`
  width: 38px;
  height: 38px;
  position: absolute;
  top: 30px;
  left: 225px;
`;

export const PawImageBigBlock = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 20px;
  left: 262px;
`;

export const HomeIntroTextUpper = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: white;
  position: absolute;
  top: 100px;
  left: 15px;
`;

export const HomeIntroTextLower = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: white;
  position: absolute;
  top: 115px;
  left: 15px;
`;

export const HomeIntroArrowBlock = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #240d05;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 90px;
  left: 270px;
`;
