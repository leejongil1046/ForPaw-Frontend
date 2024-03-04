import * as S from "./Profile.styles";
import Image from "next/image";

export default function ProfileUI(props) {
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
            <S.Title>내 프로필</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperProfile>
        <S.ProfileCard>
          <S.ProfilePhoto>
            <Image
              src="/images/info/profile_photo_icon.png"
              alt="left_arrow_icon"
              width={103}
              height={103}
            />
          </S.ProfilePhoto>
          <S.ProfileInfoContainer>
            <S.ProfileNickname>닉네임을 입력</S.ProfileNickname>
            <S.ProfileInfo>010-28950-5020</S.ProfileInfo>
            <S.ProfileInfo>박영빈</S.ProfileInfo>
          </S.ProfileInfoContainer>
        </S.ProfileCard>
        <S.ProfileEditButton>프로필 수정</S.ProfileEditButton>
        <S.InfoWrapper>
          <S.InfoTitle>계정 정보</S.InfoTitle>
          <S.InfoContainer>
            <S.InfoItemBlock>
              <S.InfoItem>아이디</S.InfoItem>
              <S.InfoItemAdded>dudqls256</S.InfoItemAdded>
            </S.InfoItemBlock>
            <S.InfoItem>비밀번호 변경</S.InfoItem>
            <S.InfoItem>입양 문의 내역</S.InfoItem>
          </S.InfoContainer>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.InfoTitle>이용안내</S.InfoTitle>
          <S.InfoContainer>
            <S.InfoItemBlock>
              <S.InfoItem>앱버전</S.InfoItem>
              <S.InfoItemAdded>2.0.9(2024021977)</S.InfoItemAdded>
            </S.InfoItemBlock>
            <S.InfoItem>문의하기</S.InfoItem>
            <S.InfoItem>이용약관</S.InfoItem>
            <S.InfoItem>개인정보 처리방침</S.InfoItem>
            <S.InfoItem>오픈소스 라이선스</S.InfoItem>
          </S.InfoContainer>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.InfoTitle>이용안내</S.InfoTitle>
          <S.InfoContainer>
            <S.InfoItem>정보 동의 설정</S.InfoItem>
            <S.InfoItem>로그아웃</S.InfoItem>
            <S.InfoItem>회원탈퇴</S.InfoItem>
          </S.InfoContainer>
        </S.InfoWrapper>
      </S.WrapperProfile>
    </>
  );
}