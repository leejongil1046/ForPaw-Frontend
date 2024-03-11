import * as S from "./AdoptSheltersDetail.styles";
import Image from "next/image";

export default function AdpotSheltersDetailUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.MapDisplay>
          <Image
            src="/images/shelter/map_detail_1.svg"
            alt="map_detail_1"
            width={390}
            height={337}
          />
        </S.MapDisplay>
        <S.ShelterInfoContainer>
          <S.ShelterInfoBlock>
            <S.ShelterInfoTitle>전화번호</S.ShelterInfoTitle>
            <S.ShelterInfoText>위치, 상세특징 서술해주세요</S.ShelterInfoText>
          </S.ShelterInfoBlock>
          <S.ShelterInfoBlock>
            <S.ShelterInfoTitle>보호소 운영 정보</S.ShelterInfoTitle>
            <S.ShelterInfoText>자세한 내용 서술</S.ShelterInfoText>
          </S.ShelterInfoBlock>
          <S.ShelterInfoBlock>
            <S.ShelterInfoTitle>보호소 운영 정보</S.ShelterInfoTitle>
            <S.ShelterInfoText>자세한 내용 서술</S.ShelterInfoText>
          </S.ShelterInfoBlock>
        </S.ShelterInfoContainer>
      </S.WrapperContents>
    </>
  );
}
