import { useRouter } from "next/router";
import * as S from "./Headers.styles";
import Image from "next/image";

export default function HeadersUI() {
  const router = useRouter();

  // 경로에 따른 타이틀 설정
  let title = "";
  const paths = {
    "/adopt/pets": "입양/임시보호",
    "/volunteer/recommend": "봉사활동",
    "/community/adoption": "커뮤니티",
    "/chatting": "채팅",
  };

  // 현재 경로에 맞는 타이틀 찾기
  Object.keys(paths).forEach((path) => {
    if (router.pathname === path) {
      title = paths[path];
    }
  });

  return (
    <S.WrapperHeader>
      <S.Header>
        <S.LeftArrowTitleContainer>
          <Image
            src="/images/header/left_arrow_icon.png"
            alt="left_arrow_icon"
            width={15}
            height={25}
          />
          <S.Title>{title}</S.Title>
        </S.LeftArrowTitleContainer>
        <S.InfoContainer>
          <S.InfoIconContainer>
            <Image
              src="/images/header/search_icon.png"
              alt="search_icon"
              width={44}
              height={44}
            />
          </S.InfoIconContainer>
          <S.InfoIconContainer>
            <Image
              src="/images/header/alarm_icon.png"
              alt="alarm_icon"
              width={44}
              height={44}
            />
          </S.InfoIconContainer>
          <S.ProfileIconContainer>
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
