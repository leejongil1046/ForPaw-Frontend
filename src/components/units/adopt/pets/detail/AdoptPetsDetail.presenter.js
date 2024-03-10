import * as S from "./AdoptPetsDetail.styles";
import Image from "next/image";

export default function AdoptPetsDetailUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="arrow_left_icon"
              width={15}
              height={25}
              onClick={props.navigateBack}
            />
            <S.Title>보호동물</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperPetDetail>
        <S.PetImgBlock>
          <Image
            src="/images/pets/dog_1_detail.svg"
            alt="dog_1_detail"
            width={390}
            height={381}
          />
          <S.AdoptLikeToggle>
            <Image
              src="/images/pets/like_icon_big.svg"
              alt="like_icon_big"
              width={32}
              height={32}
            />
          </S.AdoptLikeToggle>
        </S.PetImgBlock>
        <S.PetInfoBlock>
          <S.PetNameGender>
            포리
            <S.PetGenderIcon>
              <Image
                src="/images/pets/male_icon_detail.svg"
                alt="male_icon_detail"
                width={30}
                height={30}
              />
            </S.PetGenderIcon>
          </S.PetNameGender>
          <S.PetRegionAge>부산광역시, 금정구 • 5살</S.PetRegionAge>
        </S.PetInfoBlock>
        <S.PetInfoIconBlock>
          <S.PetPersonalityIcon>사교적</S.PetPersonalityIcon>
          <S.PetNeuterIcon>중성화</S.PetNeuterIcon>
          <S.PetBreedIcon>리트리버</S.PetBreedIcon>
          <S.PetWeightIcon>10kg</S.PetWeightIcon>
        </S.PetInfoIconBlock>
        <S.PetContentTitle>
          사람을 좋아하는 사교성, 친화력 최고 인절미
        </S.PetContentTitle>
        <S.PetContentText>
          보호자분의 개인사정으로 인해 보호하게 된 포리를 소개합니다! 포리를
          따뜻한 사랑으로 보듬어 줄 수 있는 새로운 가족을 찾습니다. 포리를
          가족으로 맞이하고 싶으신 분은 입양 문의하기를 눌러 포리를 직접
          만나보세요. <br />
          보호자분의 개인사정으로 인해 보호하게 된 포리를 소개합니다! 포리를
          따뜻한 사랑으로 보듬어 줄 수 있는 새로운 가족을 찾습니다. 포리를
          가족으로 맞이하고 싶으신 분은 입양 문의하기를 눌러 포리를 직접
          만나보세요. 보호자분의 개인사정으로 인해 보호하게 된 포리를
          소개합니다! 포리를 따뜻한 사랑으로 보듬어 줄 수 있는 새로운 가족을
          찾습니다. 포리를 가족으로 맞이하고 싶으신 분은 입양 문의하기를 눌러
          포리를 직접 만나보세요.
        </S.PetContentText>
        <S.PetAdoptionPeriod>2024.02.26-2024.03.04</S.PetAdoptionPeriod>
        <S.PetAdoptionButton>입양 문의하기</S.PetAdoptionButton>
      </S.WrapperPetDetail>
    </>
  );
}
