import RegularMeetingsUI from "./Regular_Meetings.presenter";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import { useRouter } from "next/router";


export default function RegularMeetings() {

  const router = useRouter();
  const navigateTo = (path) => () => router.push(path);

  const status = router.query.name;

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
      detail_participated: "12",
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
      detail_participated: "12",
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
      detail_participated: "12",
      maximun_people: "12"
    },
    {
      id: 4,
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
      detail_participated: "12",
      maximun_people: "12"
    },
    {
      id: 5,
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
      detail_participated: "12",
      maximun_people: "12"
    },
  ];

  return (
    <>
      <Headers />
      <RegularMeetingsUI
        navigateTo={navigateTo}
        MeetingInfos={MeetingInfos}
        status={status}
      />
      <Navigation />
    </>
  )
}