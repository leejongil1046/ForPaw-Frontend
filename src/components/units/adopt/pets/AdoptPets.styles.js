import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 349px);
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

export const AdoptPetMenuBlock = styled.div`
  width: 240px;
  height: 43px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 8px;
  margin-right: 100px;
  margin-bottom: 16px;
`;

export const AdoptPetMenuDate = styled.div`
  width: 91px;
  height: 43px;
  line-height: 43px;
  background-color: #ff6636;
  border-radius: 22px;
  color: white;
`;

export const AdoptPetMenuDogs = styled.div`
  width: 53px;
  height: 43px;
  line-height: 43px;
  background-color: #eeeeee;
  border-radius: 22px;
`;

export const AdoptPetMenuCats = styled.div`
  width: 76px;
  height: 43px;
  line-height: 43px;
  background-color: #eeeeee;
  border-radius: 22px;
`;

export const AdoptPetBlock = styled.div`
  width: 390px;
  /* max-width: 390px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  overflow-x: auto;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const AdoptPet = styled.div`
  width: 344px;
  height: 344px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-shrink: 0;
  position: relative;
  margin-bottom: 10px;
`;

export const AdoptLikeToggle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  left: 288px;
`;

export const AdoptInfoBlock = styled.div`
  width: 320px;
  height: 107px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  position: absolute;
  margin-bottom: 12px;
`;

export const AdoptNameGender = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  position: absolute;
  top: 13px;
  left: 10px;
`;

export const AdoptText = styled.div`
  font-size: 12px;
  color: #4e4e48;
  position: absolute;
  top: 48px;
  left: 10px;
`;

export const AdoptBirthAddress = styled.div`
  font-size: 12px;
  color: #4e4e48;
  position: absolute;
  top: 77px;
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
  gap: 1px;
  top: 74px;
  left: 235px;
`;

export const AdoptLike = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AdoptViewBlock = styled.div`
  font-size: 12px;
  font-weight: 300;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 74px;
  left: 275px;
`;

export const AdoptView = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
