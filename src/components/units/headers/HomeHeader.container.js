import { useRouter } from "next/router";
import HomeHeaderUI from "./HomeHeader.presenter";

export default function HomeHeader() {
  const router = useRouter();

  // 페이지 이동을 처리하는 함수
  const navigateTo = (iconName) => () => router.push(paths[iconName]);

  // 각 아이콘에 해당하는 경로
  const paths = {
    search: "/info/search",
    alarm: "/info/alarm",
    profile: "/info/profile",
  };

  return <HomeHeaderUI navigateTo={navigateTo} />;
}
