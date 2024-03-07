import * as S from "./login.styles";
import Image from "next/image";

export default function LogInUI(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <S.WraaperLogoAndImage>
            <S.WrapperImage>
              <Image
                src="/images/header/forpaw_icon.png"
                alt="paw"
                width={59}
                height={47}
              />
            </S.WrapperImage>
            <S.WrapperLogo>
              <Image
                src="/images/header/forpaw_logo.png"
                alt="paw_log"
                width={73}
                height={22}
              />
            </S.WrapperLogo>
          </S.WraaperLogoAndImage>
          <S.WraperLoginContents>
            <S.LoginContainer>
              <S.IdAndPassWordInput placeholder="아이디" type="text" />
              <S.IdAndPassWordInput placeholder="비밀번호" type="password" />
            </S.LoginContainer>
            <S.LoginContainer>
              <S.LoginButton type="submit">
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
            <S.LoginContainer>
              <S.KakaoButton>
                <Image
                  src="/images/login/kakao.png"
                  alt="kakao"
                  width={27}
                  height={24}
                />
                카카오로 계속하기
              </S.KakaoButton>
              <S.NaverButton>
                <Image
                  src="/images/login/naver.png"
                  alt="naver"
                  width={13}
                  height={17}
                />
                네이버로 계속하기
              </S.NaverButton>
            </S.LoginContainer>
            <S.AccoutAndInfoContainer>
              <S.AccoutFind>
                계정을 잃어버리셨나요?
              </S.AccoutFind>
              <S.InfoPaw>
                이용약관 | 개인정보취급방침
              </S.InfoPaw>
            </S.AccoutAndInfoContainer>
          </S.WraperLoginContents>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}