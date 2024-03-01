import * as S from "./Signup.styles";
import * as I from "../login/Login.styles";
import * as B from "../buttons/Buttons.styles";
import Image from "next/image";
import Link from "next/link";

export default function SignUpUI_01() {
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
            이름을 입력해주세요
          </S.InfoTitleContent>
          <S.InfoContent>
            <B.BigButtonGray placeholder="홍길동"  type="text"/>
          </S.InfoContent>
        </S.WrapperContents>
        <S.SignUpFooter>
          <B.BigButtonOrange type="submit">
            <Link href="/login/signup2">다음</Link>
          </B.BigButtonOrange>
        </S.SignUpFooter>
      </S.WrapperContainer>
    </>
  )
}