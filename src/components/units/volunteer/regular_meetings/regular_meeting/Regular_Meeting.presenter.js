import * as S from "./Regular_Meeting.styles";
import Image from "next/image";

export default function RegularMeetingUI() {
  return (
    <>
      <S.WrapperContents>
        <S.MeetingMainImg>
          <Image
            src="/images/volunteer/regular_meeting/meeting_main_img.svg"
            alt="meeting_main_img"
            width={390}
            height={201}
          />
        </S.MeetingMainImg>
        <S.WrapperMeetingInfo>
          <S.MeetingInfoContainer>
            <S.MeetingTitle>정기모임 이름을 적어주세요</S.MeetingTitle>
            <S.DetailInfoContainer>
              <S.InFosBlock>
                <S.InfoName>일시</S.InfoName>
                <S.DetailInfo>2/12 (월) 오전 11:00</S.DetailInfo>
              </S.InFosBlock>
              <S.InFosBlock>
                <S.InfoName>위치</S.InfoName>
                <S.DetailInfo>부산대역</S.DetailInfo>
              </S.InFosBlock>
              <S.InFosBlock>
                <S.InfoName>비용</S.InfoName>
                <S.DetailInfo>2천원(신규 인원제외)</S.DetailInfo>
              </S.InFosBlock>
              <S.InFosBlock>
                <S.InfoName>인원</S.InfoName>
                <S.JoinInfoBlock>
                  <S.JoinedPeople>12</S.JoinedPeople>/
                  <S.Maximun>12</S.Maximun>
                </S.JoinInfoBlock>
              </S.InFosBlock>
              <S.InFosBlock>
                <S.InfoName>주최</S.InfoName>
                <S.DetailInfo>봉사천재 김포포</S.DetailInfo>
              </S.InFosBlock>
            </S.DetailInfoContainer>
            <S.DetailBlock>
              계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는
              아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 가슴
              속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아
              침이 오는 까닭이요, 내일 밤이 남은 까닭이요.
            </S.DetailBlock>
            <S.NextButtonBlock>
              <S.NextButtonItem>참여하기</S.NextButtonItem>
            </S.NextButtonBlock>
          </S.MeetingInfoContainer>
        </S.WrapperMeetingInfo>
      </S.WrapperContents>
    </>
  )
}