import * as S from "./Signup.styles";
import * as I from "../login/Login.styles";
import * as B from "../buttons/Buttons.styles";
import Image from "next/image";
import Link from "next/link";


export default function SignUpUI_03() {
  return (
    <>
     <S.WrapperContainer>
        <S.SignUpHeaderUI>
          <I.WrapperImage>
            <Image
              src="/images/header/forpaw_icon.png"
              alt="paw"
              width={59}
              height={47}
            />
          </I.WrapperImage>
          <I.WrapperLogo>
            <Image
              src="/images/header/forpaw_logo.png"
              alt="paw_log"
              width={73}
              height={22}
            />
          </I.WrapperLogo>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/left_arrow_icon.png"
              alt="left_arrow_icon"
              width={10}
              height={10}
            />
          </S.LeftArrowTitleContainer>
          <S.ProgressBar />
        </S.SignUpHeaderUI>
        <S.WrapperContents>
          <S.InfoTitleContent>
            인증번호를 입력해주세요
          </S.InfoTitleContent>
          <S.InfoNameContent>
            인증번호
          </S.InfoNameContent>
          <S.InfoContent>
            <B.BigButtonGray placeholder="1234" type="number" />
          </S.InfoContent>
          <S.CertificationNumber>
            인증번호가 오지 않아요...
          </S.CertificationNumber>
        </S.WrapperContents>
        <S.SignUpFooter>
          <B.BigButtonOrange>
            <Link href="/login/signup4">다음</Link>
          </B.BigButtonOrange>
        </S.SignUpFooter>
      </S.WrapperContainer>
    </>
  )
}