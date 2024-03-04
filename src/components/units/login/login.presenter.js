import { useRouter } from "next/router";
import * as S from "./login.styles";
import Image from "next/image";

export default function LogInUI() {
  const router = useRouter();

  const MoveSignupPage = () => {
    router.push("./login/signup/1");
  };

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
              <S.LoginButton>
                로그인
              </S.LoginButton>
              <S.SignUpButton onClick={MoveSignupPage}>
                회원가입
              </S.SignUpButton>
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