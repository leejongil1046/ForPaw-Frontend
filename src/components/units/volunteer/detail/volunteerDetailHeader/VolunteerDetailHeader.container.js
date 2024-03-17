import { useRouter } from "next/router"
import VolunteerDetailHeaderUI from "./VolunteerDetailHeader.presenter"

export default function VolunteerDetailHeader() {
  const router = useRouter();

  const PrevPage = () => {
    router.back();
  }

  const getTitleByPath = (pathname) => {
    if (pathname === "/volunteer/detail") {
      return "봉사모임 이름";
    } else if (pathname === "/volunteer/detail/announcements/announcement") {
      return "공지사항"
    } else {
      return ""; // 기본값 혹은 다른 경로에 대한 타이틀 설정
    } 
  };

  const title = getTitleByPath(router.pathname);

  return(
    <>
      <VolunteerDetailHeaderUI title={title} PrevPage={PrevPage} />
    </>
  )
}