// Navigation.present.js
import { useRouter } from "next/router";
import * as S from "./Navigation.styles";
import Image from "next/image";

export default function NavigationUI(props) {
  const router = useRouter();

  // 현재 경로에 따라 아이콘 이미지를 선택하는 함수이다.
  // 기본 아이콘과 활성화된 아이콘 중에서 해당 경로에서 활성화된 아이콘을 선택한다.
  const getIconSrc = (iconName) => {
    // 아이콘 활성화 조건을 정확한 경로 일치로 변경
    const isActive = router.pathname === paths[iconName];

    return `/images/navigation/${iconName}_icon${
      isActive ? "_active" : ""
    }.png`;
  };

  // 각 아이콘에 해당하는 경로
  const paths = {
    home: "/home",
    volunteer: "/volunteer/recommend",
    adopt: "/adopt/pets",
    community: "/community/adoption",
    chatting: "/chatting",
  };

  return (
    <S.WrapperNavigation>
      {Object.keys(paths).map((iconName) => (
        <S.NavigationIconContainer
          key={iconName}
          onClick={() => props.navigateTo(paths[iconName])}
        >
          <Image
            src={getIconSrc(iconName)}
            alt={`${iconName}_icon`}
            width={40}
            height={40}
          />
        </S.NavigationIconContainer>
      ))}
    </S.WrapperNavigation>
  );
}
