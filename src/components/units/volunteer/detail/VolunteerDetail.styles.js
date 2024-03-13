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
  padding-bottom: 10px;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const VolunteerIntroContainer = styled.div`
  width: 344px;
  height: 224px;
  margin-top: 40px;
`;

export const IntroMainImgBlock = styled.div`
  width: 344px;
  height: 160px;
`;  

export const IntroTitle = styled.p`
  width: 100%;
  height: 29px;
  font-size: 24px;
  font-weight: bold;
  margin-top: 8px;
`;

export const IntroDetail = styled.p`
  width: 100%;
  height: 19px;
  font-size: 16px;
  margin-top: 8px;
`;

export const AnnouncementContainer = styled.div`
  width: 344px;
  height: 227px;
  cursor: pointer;
  margin-top: 30px;
`;

export const AnnouncementTitleBlock = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
`;

export const AnnouncementTitle = styled.p`
  width: 300px;
  height: 44px;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0px;
`;

export const RightArrowImgBlock = styled.div`
  width: 44px;
  height: 44px;
`;

export const AnnouncementDetailContainer = styled.div`
  width: 100%;
  height: 187px;
  margin-top: 6px;
`;

export const AnnouncementDetailBlock = styled.div`
  width: 344px;
  height: 57px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CheckBox = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #FF6636;
  margin-right: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CheckImg = styled.div`
  width: 22px;
  height: 15px;
`;

export const AnnouncementDetail = styled.p`
  width: 276px;
  height: 38px;
  font-size: 14px;
  letter-spacing: -0.2px;
  padding-left: 5px;
`;

 export const ContentsContainer = styled.div`
  width: 344px;
  height: 244px;
  background-color: #fef8f2;
  border: 1px solid #f6f2ee;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
  flex-shrink: 0;
  cursor: pointer;
 `;

/*버튼 css*/
export const NextButtonBlock = styled.div`
  width: 344px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  bottom: 100px;
`;

export const NextButtonItem = styled.button`
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;