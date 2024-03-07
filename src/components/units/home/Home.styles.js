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

export const HomeIconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

export const HomeIconBlock = styled.div`
  width: 104px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const HomeIcon = styled.div`
  width: 104px;
  height: 104px;
  background-color: #efefef;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HomeDogsCatsIcon = styled.div`
  width: 104px;
  height: 104px;
  background-color: #efefef;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const HomeIconText = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
`;

export const HomeContentsContainer = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
`;

export const HomeTitleBlock = styled.div`
  width: 344px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 24px;
`;

export const AdoptPetBlock = styled.div`
  width: 390px;
  /* max-width: 390px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px;
  overflow-x: auto;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const AdoptPet = styled.div`
  width: 254px;
  height: 254px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-right: 20px;
  flex-shrink: 0;
  position: relative;
`;

export const AdoptInfoBlock = styled.div`
  width: 238px;
  height: 79px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  position: absolute;
  margin-bottom: 10px;
`;

export const AdoptNameGender = styled.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  position: absolute;
  top: 18px;
  left: 10px;
`;

export const AdoptBirthAddress = styled.div`
  font-size: 12px;
  color: #4e4e48;
  position: absolute;
  top: 48px;
  left: 10px;
`;

export const AdoptLikeBlock = styled.div`
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  top: 47px;
  left: 150px;
`;

export const AdoptLike = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #ff7272;
`;

export const AdoptViewBlock = styled.div`
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  top: 47px;
  left: 190px;
`;

export const AdoptView = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #a7a7a7;
`;

export const AdoptArrow = styled.div`
  width: 254px;
  height: 254px;
  background-color: #ff6636;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  :hoevr {
    cursor: pointer;
  }
`;

export const VolunteerBlock = styled.div`
  width: 344px;
  height: 354px;
  background-color: #fef8f2;
  border: 1px solid #f6f2ee;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
`;

export const VolunteerImg = styled.div`
  width: 324px;
  height: 183px;
  border-radius: 10px;
  margin-top: 8px;
  position: relative;
`;

export const VolunteerLikeBlock = styled.div`
  width: 66px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  gap: 4px;
  top: 145px;
  left: 8px;
`;

export const VolunteerTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-right: 145px;
  margin-top: 15px;
`;

export const VolunteerText = styled.div`
  width: 310px;
  height: 34px;
  font-size: 14px;
  font-weight: 300;
  margin-top: 8px;
  margin-right: 10px;
`;

export const VolunteerInfoBlock = styled.div`
  width: 288px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-right: 35px;
`;

export const VolunteerNumberOfMember = styled.div`
  width: 88px;
  height: 30px;
  line-height: 30px;
  background-color: #ff6636;
  border-radius: 15px;
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`;

export const VolunteerCategory = styled.div`
  width: 106px;
  height: 30px;
  line-height: 30px;
  background-color: #e4e4e4;
  border-radius: 15px;
  font-size: 12px;
  text-align: center;
`;

export const VolunteerRegion = styled.div`
  width: 86px;
  height: 30px;
  line-height: 30px;
  background-color: #e4e4e4;
  border-radius: 15px;
  font-size: 12px;
  text-align: center;
`;
