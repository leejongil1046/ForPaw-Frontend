import * as S from "./HomeHeader.styles";
import Image from "next/image";

export default function HomeHeaderUI(props) {
  return (
    <S.WrapperHeader>
      <S.Header>
        <S.ForPawImageContainer>
          <Image
            src="/images/header/forpaw_icon.png"
            alt="forpaw_icon"
            width={52}
            height={42}
          />
        </S.ForPawImageContainer>
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
      <S.HeaderLogo>
        <Image
          src="/images/header/forpaw_logo.png"
          alt="forpaw_logo"
          width={77}
          height={20}
        />
      </S.HeaderLogo>
    </S.WrapperHeader>
  );
}
