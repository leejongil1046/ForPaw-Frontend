import * as S from "./Login.styles"
import * as B from "../buttons/Buttons.styles";
import Image from "next/image";
import Link from "next/link";


export default function LoginUI() {
  return (
    <>
      <S.WrapperContainer>
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
          <B.BigButtonGray placeholder="아이디" type="text">

          </B.BigButtonGray>
          <B.BigButtonGray placeholder="비밀번호" type="text">

          </B.BigButtonGray>

          <B.BigButtonOrange>
            로그인
          </B.BigButtonOrange>
          <B.BigButtonBlack>
            <Link href="/login/signup1">회원가입</Link>
          </B.BigButtonBlack>
          <div>
            <p>or</p>
          </div>
          <B.BigButtonOrange>
            <Image
              src="/images/login/kakao.png"
              alt="login_kakao"
              width={178}
              height={24}
            />
          </B.BigButtonOrange>
          <B.BigButtonOrange>
            <Image
              src="/images/login/naver.png"
              alt="login_naver"
              width={164}
              height={24}
            />
          </B.BigButtonOrange>

          <S.FoundAccount>
            계정을 잃어버리셨나요??
          </S.FoundAccount>
          <S.AboutPaw>
            이용약관 | 개인정보취급방침
          </S.AboutPaw>
        </S.WraperLoginContents>
      </S.WrapperContainer>
    </>
  )
}