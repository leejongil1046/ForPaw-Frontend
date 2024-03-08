import * as S from "./SignupHeader.styles";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SignupHeaderUI() {

  const router = useRouter();

  const PrevPage = () => {
    router.back();
  }

  return (
    <>
      <S.WrapperHeader>
        <S.ImgContainer>
          <S.ImgBlock>
            <Image
              src="/images/header/forpaw_icon.svg"
              alt="forpaw_icon"
              width={57}
              height={47}
            />
          </S.ImgBlock>
        </S.ImgContainer>
        <S.LogoContainer>
          <S.LogoBlock>
            <Image
              src="/images/header/forpaw_logo.svg"
              alt="forpaw_logo"
              width={73}
              height={20}
            />
          </S.LogoBlock>
        </S.LogoContainer>
        <S.LeftArrowContainer>
          <S.LeftArrowBlock>
            <Image onClick={PrevPage}
              src="/images/header/arrow_left_icon.svg"
              alt="left_arrow"
              width={15}
              height={25}
            />
          </S.LeftArrowBlock>
        </S.LeftArrowContainer>
      </S.WrapperHeader>
    </>
  )
}