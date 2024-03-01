// Headers.presenter.js
import * as S from "./Headers.styles";
import Image from "next/image";

export default function HeadersUI(props) {
  return (
    <S.WrapperHeader>
      <S.Header>
        <S.LeftArrowTitleContainer>
          <Image
            src="/images/header/left_arrow_icon.png"
            alt="left_arrow_icon"
            width={15}
            height={25}
            onClick={props.navigateTo("home")}
          />
          <S.Title>{props.title}</S.Title>
        </S.LeftArrowTitleContainer>
        <S.InfoContainer>
          <S.InfoIconContainer onClick={props.navigateTo("search")}>
            <Image
              src="/images/header/search_icon.png"
              alt="search_icon"
              width={44}
              height={44}
            />
          </S.InfoIconContainer>
          <S.InfoIconContainer onClick={props.navigateTo("alarm")}>
            <Image
              src="/images/header/alarm_icon.png"
              alt="alarm_icon"
              width={44}
              height={44}
            />
          </S.InfoIconContainer>
          <S.ProfileIconContainer onClick={props.navigateTo("profile")}>
            <Image
              src="/images/header/profile_icon.png"
              alt="profile_icon"
              width={44}
              height={44}
            />
          </S.ProfileIconContainer>
        </S.InfoContainer>
      </S.Header>
    </S.WrapperHeader>
  );
}
