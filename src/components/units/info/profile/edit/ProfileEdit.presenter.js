import * as S from "./ProfileEdit.styles";
import Image from "next/image";

export default function ProfileEditUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/left_arrow_icon.png"
              alt="left_arrow_icon"
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
              src="/images/info/profile_photo_icon.png"
              alt="left_arrow_icon"
              width={103}
              height={103}
            />
          </S.ProfileEditPhoto>
          <S.ProfileEditPhoto>
            <Image
              src="/images/info/profile_photo_edit_icon.png"
              alt="left_arrow_icon"
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
            <S.NickNameLabel>닉네임</S.NickNameLabel>
          </S.EditTextBlock>
          <S.NickNameEditBlock>
            <S.NickNameInput type="text" placeholder="기존 닉네임" />
            <S.NickNameEditButton>변경</S.NickNameEditButton>
          </S.NickNameEditBlock>
        </S.ProfileEditContainer>
      </S.WrapperProfileEdit>
    </>
  );
}
