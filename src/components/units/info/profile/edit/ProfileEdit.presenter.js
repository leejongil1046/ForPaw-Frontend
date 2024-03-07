import * as S from "./ProfileEdit.styles";
import Image from "next/image";

export default function ProfileEditUI(props) {
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
            <S.Title>프로필 수정</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperProfileEdit>
        <S.ProfileEditPhotoContainer>
          <S.ProfileEditPhoto>
            <Image
              src="/images/info/profile_photo_icon.svg"
              alt="profile_photo_icon"
              width={103}
              height={103}
            />
          </S.ProfileEditPhoto>
          <S.ProfileEditPhoto>
            <Image
              src="/images/info/profile_photo_edit_icon.svg"
              alt="profile_photo_edit_icon"
              width={103}
              height={103}
            />
          </S.ProfileEditPhoto>
          <S.EditText>편집</S.EditText>
        </S.ProfileEditPhotoContainer>
        <S.NameText>박영빈</S.NameText>
        <S.ProfileEditContainer>
          <S.EditTextBlock>
            <S.EditTitle>프로필 정보</S.EditTitle>
          </S.EditTextBlock>
          <S.EditTextBlock>
            <S.ProfileInfoLabel>닉네임</S.ProfileInfoLabel>
          </S.EditTextBlock>
          <S.NickNameEditBlock>
            <S.NickNameInput type="text" placeholder="기존 닉네임" />
            <S.NickNameEditButton>변경</S.NickNameEditButton>
          </S.NickNameEditBlock>
          <S.AreaSelectContainer>
            <S.EditTextBlock>
              <S.ProfileInfoLabel>활동 지역</S.ProfileInfoLabel>
            </S.EditTextBlock>
            <S.ProvinceCitySelect>
              <option>시/도 선택</option>
            </S.ProvinceCitySelect>
            <S.ProvinceArrowBlock>
              <Image
                src="/images/info/select_arrow_icon.svg"
                alt="select_arrow_icon"
                width={22}
                height={12}
              />
            </S.ProvinceArrowBlock>
            <S.DistrictSelectBlock>
              <S.DistrictSelect>
                <option>구/군/시</option>
              </S.DistrictSelect>
              <S.DistrictArrowBlock>
                <Image
                  src="/images/info/select_arrow_icon.svg"
                  alt="select_arrow_icon"
                  width={22}
                  height={12}
                />
              </S.DistrictArrowBlock>
              <S.SubdistrictSelect>
                <option>동/읍/면</option>
              </S.SubdistrictSelect>
              <S.SubdistrictArrowBlock>
                <Image
                  src="/images/info/select_arrow_icon.svg"
                  alt="select_arrow_icon"
                  width={22}
                  height={12}
                />
              </S.SubdistrictArrowBlock>
            </S.DistrictSelectBlock>
          </S.AreaSelectContainer>
        </S.ProfileEditContainer>
        <S.ProfileEditButton>프로필 수정</S.ProfileEditButton>
      </S.WrapperProfileEdit>
    </>
  );
}
