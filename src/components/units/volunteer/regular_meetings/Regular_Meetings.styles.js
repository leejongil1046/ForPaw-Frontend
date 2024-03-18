import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 179px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;
  padding-bottom: 10px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const Container = styled.div`
  width: 344px;
  height: auto;
  

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const WrapperMeetingDetail = styled.div`
  width:100%; /*344px*/
  margin-top: 6px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

/*정기모임 큰 박스*/
export const MeetingDetailContainer = styled.div`
  width: 343px;
  height: 233px;
  background-color: #FEF8F2;
  border: 1px solid #F6F2EE;
  border-radius: 20px;

  box-shadow: 0 3px 6px rgba(0,0,0,0.12), 0 3px 6px rgba(0,0,0,0.10);

  /*display 설정*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/*정기모임 블록 안에 있는 내용 박스*/
export const MeetingDetailContentsBlock = styled.div`
  width: 312px;
  height: 193px;

  /*display 설정*/
  display: flex;
  flex-direction: column;
`;

export const DetailContentsDateBox = styled.div`
  width: 100%; /*312px*/
  height: 24px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailDate = styled.p`
  width: 79px;
  height: 24px;
  font-wize: 20px;
  font-weight: bold;
  line-height: 24px;
`;

export const LeftDdayBox = styled.div`
  width: 57px;
  height: 24px;
  border: 2px solid #FF6636;
  border-radius: 20px;
  color: #FF6636;
  font-size: 16px;
 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Day = styled.p`
  color: #FF6636;
  font-size: 16px;
`;  

export const MeetingName = styled.p`
  margin-top: 8px;
  width: 100%;
  height: 19px;
  font-size: 16px;
  font-weight: bold;
`;

export const MeetingDetailInfoBox = styled.div`
  margin-top: 8px;
  width: 100%;/*312px*/
  height: 92px;

  display: flex;
  flex-direction: row;
`;

export const MeetingDetailImg = styled.div`
  width: 148px;
  height: 92px;
`;

export const MeetingDetailInfo = styled.div`
  margin-left: 16px;
  width: 150px;
  height: 92px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MeetingDetailItems = styled.div`
  width: 125px;
  height: 14px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailInfoName = styled.p`
  width: 21px;
  height: 14px;
  font-size: 12px;
  color: #878787;
`;

export const DetailInfo = styled.div`
  width: 96px;
  height: 14px;
  font-size: 12px;
  font-weight: 500;
  color: black;
  letter-spacing: -0.5px;

  display: flex;
  flex-direction: row;
`;

export const ParticipatedPeople = styled.p`
  color: #FF7272;
`;

export const MaximunPeople = styled.p`
  color: black;
`;

export const UsersAndParticipateBox = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UsersItems = styled.div`
  width: 226px;
  height: 30px;
  position: relative;

  display: flex;
  flex-direction: row;
  gap: -5px;
`;

export const UserImg = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
`;

export const ParticipateBtn = styled.button`
  width: 86px;
  height: 30px;
  background-color: #240D05;
  border-radius: 20px;
  cursor: pointer;

  font-size: 16px;
  color: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


