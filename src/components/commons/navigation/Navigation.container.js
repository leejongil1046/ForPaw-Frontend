// Navigation.container.js
import NavigationUI from "./Navigation.present";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  // 페이지 이동을 처리하는 함수
  const navigateTo = (iconName) => () => router.push(paths[iconName]);

  // 현재 경로에 따라 아이콘 이미지를 선택하는 함수이다.
  // 기본 아이콘과 활성화된 아이콘 중에서 해당 경로에서 활성화된 아이콘을 선택한다.
  const getIconSrc = (iconName) => {
    // 아이콘 활성화 조건을 정확한 경로 일치로 변경
    const isActive = router.pathname.startsWith(`/${iconName}`) ? true : false;

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

  // NavigationUI 컴포넌트로 props를 통해 함수 전달
  return (
    <NavigationUI
      navigateTo={navigateTo}
      getIconSrc={getIconSrc}
      paths={paths}
    />
  );
}
