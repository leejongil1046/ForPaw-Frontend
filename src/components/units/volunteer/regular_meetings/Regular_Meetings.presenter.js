import * as S from "./Regular_Meetings.styles";
import Image from "next/image";


export default function RegularMeetingsUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.Container>
          <S.WrapperMeetingDetail>
            {props.MeetingInfos.map((infos, index) => (
              <S.MeetingDetailContainer key={infos.id}>
                <S.MeetingDetailContentsBlock>
                  <S.DetailContentsDateBox>
                    <S.DetailDate>{infos.detailDate}</S.DetailDate>
                    <S.LeftDdayBox>
                      D-<S.Day>{infos.leftDay}</S.Day>
                    </S.LeftDdayBox>
                  </S.DetailContentsDateBox>
                  <S.MeetingName>{infos.meetingName}</S.MeetingName>
                  <S.MeetingDetailInfoBox>
                    <Image
                      src="/images/volunteer/volunteerDetail/meeting_detail_main.svg"
                      alt="meeting_detail_main"
                      width={148}
                      height={92}
                      priority={true}
                    />
                    <S.MeetingDetailInfo>
                      <S.MeetingDetailItems>
                        <S.DetailInfoName>{infos.infoName_date}</S.DetailInfoName>
                        <S.DetailInfo>{infos.detail_date}</S.DetailInfo>
                      </S.MeetingDetailItems>
                      <S.MeetingDetailItems>
                        <S.DetailInfoName>{infos.infoName_location}</S.DetailInfoName>
                        <S.DetailInfo>{infos.detail_location}</S.DetailInfo>
                      </S.MeetingDetailItems>
                      <S.MeetingDetailItems>
                        <S.DetailInfoName>{infos.infoName_cost}</S.DetailInfoName>
                        <S.DetailInfo>{infos.detail_cost}</S.DetailInfo>
                      </S.MeetingDetailItems>
                      <S.MeetingDetailItems>
                        <S.DetailInfoName>{infos.infoName_Participated}</S.DetailInfoName>
                        <S.DetailInfo>
                          <S.ParticipatedPeople>{infos.detail_participated}</S.ParticipatedPeople>
                          /
                          <S.MaximunPeople>{infos.maximun_people}</S.MaximunPeople>
                        </S.DetailInfo>
                      </S.MeetingDetailItems>
                    </S.MeetingDetailInfo>
                  </S.MeetingDetailInfoBox>
                  <S.UsersAndParticipateBox>
                    <S.UsersItems>
                      <S.UserImg>
                        <Image
                          src="/images/volunteer/volunteerDetail/user_1.svg"
                          alt="user"
                          width={25}
                          height={30}
                          priority={true}
                        />
                      </S.UserImg>
                      <S.UserImg style={{ right: "8px" }}>
                        <Image
                          src="/images/volunteer/volunteerDetail/user_2.svg"
                          alt="user"
                          width={25}
                          height={30}
                          priority={true}
                        />
                      </S.UserImg>
                      <S.UserImg style={{ right: "16px" }}>
                        <Image
                          src="/images/volunteer/volunteerDetail/user_3.svg"
                          alt="user"
                          width={30}
                          height={30}
                          priority={true}
                        />
                      </S.UserImg>
                    </S.UsersItems>
                    <S.ParticipateBtn onClick={props.navigateTo("/volunteer/detail/regular_meetings/regular_meeting")}>참가하기</S.ParticipateBtn>
                  </S.UsersAndParticipateBox>
                </S.MeetingDetailContentsBlock>
              </S.MeetingDetailContainer>
            ))}
          </S.WrapperMeetingDetail>
          <S.AddMeeting style={{visibility: props.status == 'member' ? "hidden" : "visible"}}>
            <Image
              src="/images/volunteer/volunteer_add_icon.svg"
              alt="volunteer_add_icon"
              width={28}
              height={28}
              priority={true}
            />
          </S.AddMeeting>
        </S.Container>
      </S.WrapperContents>
    </>
  )
}