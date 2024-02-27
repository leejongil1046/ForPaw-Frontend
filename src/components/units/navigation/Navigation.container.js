// Navigation.container.js
import NavigationUI from "./Navigation.present";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  // 페이지 이동을 처리하는 함수
  const navigateTo = (path) => {
    router.push(path);
  };

  // NavigationUI 컴포넌트로 props를 통해 함수 전달
  return <NavigationUI navigateTo={navigateTo} />;
}
