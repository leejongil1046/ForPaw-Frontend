import VolunteerDetailHeader from "./volunteerDetailHeader/VolunteerDetailHeader.container";
import VolunteerDetailUI from "./VolunteerDetail.presenter";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function VolunteerDetail() {

  //라우팅 설정
  const router = useRouter();
  const navigateTo = (path) => () => router.push(path);

  // 클릭 이벤트 처리를 위한 상태 변수와 상태 업데이트 함수 선언
  const [clickedIndex, setClickedIndex] = useState(-1); // 선택된 공지사항 인덱스를 추적하는 상태
  const [isJoined, serIsJoined] = useState(false);

  const handleAnnouncementClick = (index) => {
    // 클릭된 공지사항의 인덱스를 설정
    setClickedIndex(index === clickedIndex ? -1 : index);

    // 2초 후에 클릭된 상태를 초기화하여 원래 색으로 돌아가도록 타이머 설정
    setTimeout(() => {
      setClickedIndex(-1);
    }, 2000);
  };

  const Announcements = [
    {
      id: 1,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다."
    },
    {
      id: 2,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다."
    },
    {
      id: 3,
      text: "이번주 봉사활동은 업체의 개인사정으로 인해 한 주 쉬어가니 착오 없으시길 바랍니다."
    }
  ];

  const MeetingInfos = [
    {
      id: 1,
      detailDate: "2/12 (월)",
      leftDay: 1,
      meetingName: <>유기견 구조활동</>,
      infoName_date: "일시",
      detail_date: "2/12 (월) 오전 11:00",
      infoName_location: "위치",
      detail_location: <>부산대</>,
      infoName_cost: "비용",
      detail_cost: "2천원(신규 인원제외)",
      infoName_Participated: "인원",
      detail_participated:"12",
      maximun_people: "12"
    },
    {
      id: 2,
      detailDate: "2/12 (월)",
      leftDay: 1,
      meetingName: <>유기견 구조활동</>,
      infoName_date: "일시",
      detail_date: "2/12 (월) 오전 11:00",
      infoName_location: "위치",
      detail_location: <>부산대</>,
      infoName_cost: "비용",
      detail_cost: "2천원(신규 인원제외)",
      infoName_Participated: "인원",
      detail_participated:"12",
      maximun_people: "12"
    },
    {
      id: 3,
      detailDate: "2/12 (월)",
      leftDay: 1,
      meetingName: <>유기견 구조활동</>,
      infoName_date: "일시",
      detail_date: "2/12 (월) 오전 11:00",
      infoName_location: "위치",
      detail_location: <>부산대</>,
      infoName_cost: "비용",
      detail_cost: "2천원(신규 인원제외)",
      infoName_Participated: "인원",
      detail_participated:"12",
      maximun_people: "12"
    },
  ];

  return (
    <>
      <VolunteerDetailHeader />
      <VolunteerDetailUI
        navigateTo={navigateTo}
        Announcements={Announcements}
        MeetingInfos={MeetingInfos}
        clickedIndex={clickedIndex}
        handleAnnouncementClick={handleAnnouncementClick}
        isJoined={isJoined}
      />
      <Navigation />
    </>
  )
}