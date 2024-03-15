import * as S from "./VolunteerDetailHeader.styles";
import Image from "next/image";

export default function VolunteerDetailHeaderUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer onClick={props.PrevPage}>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="left_arrow_icon"
              width={15}
              height={25}
            />
            <S.Title>봉사모임 이름</S.Title>
          </S.LeftArrowTitleContainer>
          <S.MenuContainer>
            <Image
              src="/images/header/menu_icon.svg"
              alt="menu_icon"
              width={50}
              height={40}
            />
          </S.MenuContainer>
        </S.Header>
      </S.WrapperHeader>
    </>
  )
}