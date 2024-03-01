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
      <S.WrapperProfile></S.WrapperProfile>
    </>
  );
}
