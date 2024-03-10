import * as S from "./login.styles";
import Image from "next/image";

export default function LogInUI(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <S.WraaperLogoAndImage>
            <S.LogoAndImageBlock>
              <S.WrapperImage>
                <Image
                  src="/images/header/forpaw_icon.svg"
                  alt="paw"
                  width={59}
                  height={47}
                />
              </S.WrapperImage>
              <S.WrapperLogo>
                <Image
                  src="/images/header/forpaw_logo.svg"
                  alt="paw_logo"
                  width={73}
                  height={22}
                />
              </S.WrapperLogo>
            </S.LogoAndImageBlock>
          </S.WraaperLogoAndImage>
          <S.WrapperLoginContents>
            <S.LoginContentsBlock>
              <S.IdAndPassWordContainer>
                <S.IdInput placeholder="아이디" type="text" />
                <S.PassWordInput placeholder="비밀번호" type="password" />
              </S.IdAndPassWordContainer>
              <S.LoginContainer>
                <S.LoginButton type="submit"
                  onClick={props.navigateTo("/login/signup/intro")}
                >
                  로그인
                </S.LoginButton>
                <S.SignUpBtn
                  onClick={props.navigateTo("/login/signup/01")}
                >
                  회원가입
                </S.SignUpBtn>
              </S.LoginContainer>
              <S.OrContainer>
                or
              </S.OrContainer>
              <S.KakaoAndNaverBlock>
                <S.KakaoButton>
                  <Image
                    src="/images/login/kakao.svg"
                    alt="kakao"
                    width={27}
                    height={24}
                  />
                  카카오로 계속하기
                </S.KakaoButton>
                <S.NaverButton>
                  <Image
                    src="/images/login/naver.svg"
                    alt="naver"
                    width={13}
                    height={17}
                  />
                  네이버로 계속하기
                </S.NaverButton>
              </S.KakaoAndNaverBlock>
              <S.AccoutAndInfoContainer>
                <S.AccoutFind>
                  계정을 잃어버리셨나요?
                </S.AccoutFind>
                <S.InfoPaw>
                  이용약관 | 개인정보취급방침
                </S.InfoPaw>
              </S.AccoutAndInfoContainer>
            </S.LoginContentsBlock>
          </S.WrapperLoginContents>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}