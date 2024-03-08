import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 231px);
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

export const VolunteerRegionMenuBlock = styled.div`
  width: 240px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 15px;
  margin-right: 100px;
`;

export const VolunteerRegionMenu = styled.select`
  width: 115px;
  height: 44px;
  border-radius: 22px;
  background-color: white;
  border: 1px solid #f5f5f5;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 2px 1px rgba(0, 0, 0, 0.15);
  font-size: 20px;
  padding-left: 15px;
  position: relative;

  -webkit-appearance: none; /* 크롬, 사파리 */
  -moz-appearance: none; /* 파이어폭스 */
  appearance: none; /* 표준 */
`;

export const VolunteerRegionMenuSub = styled.select`
  width: 115px;
  height: 44px;
  border-radius: 22px;
  background-color: white;
  border: 1px solid #f5f5f5;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.05),
    0 2px 2px 1px rgba(0, 0, 0, 0.15);
  font-size: 20px;
  padding-left: 15px;

  -webkit-appearance: none; /* 크롬, 사파리 */
  -moz-appearance: none; /* 파이어폭스 */
  appearance: none; /* 표준 */
`;

export const MenuArrowBlock = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 13px;
  left: 70px;
`;

export const MenuSubArrowBlock = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 13px;
  left: 195px;
`;
