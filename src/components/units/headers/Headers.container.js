import { useRouter } from "next/router";
import HeadersUI from "./Headers.presenter";

export default function Headers() {
  const router = useRouter();

  // 경로 패턴에 따른 타이틀 설정
  const getTitleByPath = (pathname) => {
    if (pathname.startsWith("/adopt")) {
      return "입양/임시보호";
    } else if (pathname.startsWith("/volunteer")) {
      return "봉사활동";
    } else if (pathname.startsWith("/community")) {
      return "커뮤니티";
    } else if (pathname === "/chatting") {
      return "채팅";
    } else {
      return ""; // 기본값 혹은 다른 경로에 대한 타이틀 설정
    }
  };

  const title = getTitleByPath(router.pathname);

  console.log(title);

  return <HeadersUI title={title} />;
}
