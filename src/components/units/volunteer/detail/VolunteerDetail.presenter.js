import * as S from "./VolunteerDetail.styles";
import Image from "next/image";

export default function VolunteerDetailUI() {
  return (
    <>
      <S.WrapperContents>
        <S.VolunteerIntroContainer>
          <S.IntroMainImgBlock>
            <Image
              src="/images/volunteer/volunteerDetail/volunteer_main_image.svg"
              alt="volunteer_main_image"
              width={343}
              height={160}
            />
          </S.IntroMainImgBlock>
          <S.IntroTitle>모임을 소개하는 한마디</S.IntroTitle>
          <S.IntroDetail>해당 모임에 어울리는 문장을 간단하게 적어주세요</S.IntroDetail>
        </S.VolunteerIntroContainer>
        <S.AnnouncementContainer>
          <S.AnnouncementTitleBlock>
            <S.AnnouncementTitle>공지사항</S.AnnouncementTitle>
            <S.RightArrowImgBlock>
              <Image
                src="/images/volunteer/volunteerDetail/right_arrow.svg"
                alt="right_arrow"
                width={44}
                height={44}
              />
            </S.RightArrowImgBlock>
          </S.AnnouncementTitleBlock>
          <S.AnnouncementDetailContainer>
            <S.AnnouncementDetailBlock style={{ backgroundColor: "#FEF8F2" }}>
              <S.AnnouncementItems>
                <S.CheckBox>
                  <S.CheckImg>
                    <Image
                      src="/images/volunteer/volunteerDetail/check_icon.svg"
                      alt="check_icon"
                      width={22}
                      height={15}
                    />
                  </S.CheckImg>
                </S.CheckBox>
                <S.AnnouncementDetail>
                  이번주 봉사활동은 업체의 개인사정으로 인해 한 주<br />
                  쉬어가니 착오 없으시길 바랍니다.<br />
                </S.AnnouncementDetail>
              </S.AnnouncementItems>
            </S.AnnouncementDetailBlock>
            <S.AnnouncementDetailBlock>
              <S.AnnouncementItems>
                <S.CheckBox>
                  <S.CheckImg>
                    <Image
                      src="/images/volunteer/volunteerDetail/check_icon.svg"
                      alt="check_icon"
                      width={22}
                      height={15}
                    />
                  </S.CheckImg>
                </S.CheckBox>
                <S.AnnouncementDetail>
                  이번주 봉사활동은 업체의 개인사정으로 인해 한 주<br />
                  쉬어가니 착오 없으시길 바랍니다.<br />
                </S.AnnouncementDetail>
              </S.AnnouncementItems>
            </S.AnnouncementDetailBlock>
            <S.AnnouncementDetailBlock>
              <S.AnnouncementItems>
                <S.CheckBox>
                  <S.CheckImg>
                    <Image
                      src="/images/volunteer/volunteerDetail/check_icon.svg"
                      alt="check_icon"
                      width={22}
                      height={15}
                    />
                  </S.CheckImg>
                </S.CheckBox>
                <S.AnnouncementDetail>
                  이번주 봉사활동은 업체의 개인사정으로 인해 한 주<br />
                  쉬어가니 착오 없으시길 바랍니다.<br />
                </S.AnnouncementDetail>
              </S.AnnouncementItems>
            </S.AnnouncementDetailBlock>
          </S.AnnouncementDetailContainer>
        </S.AnnouncementContainer>
        <S.MeetingContainer>
          <S.MeetingTitleBlock>
            <S.MeetingTitle>정기모임</S.MeetingTitle>
            <S.RightArrowImgBlock>
              <Image
                src="/images/volunteer/volunteerDetail/right_arrow.svg"
                alt="right_arrow"
                width={44}
                height={44}
              />
            </S.RightArrowImgBlock>
          </S.MeetingTitleBlock>
          <S.WrapperMeetingDetail>
            <S.MeetingDetailContainer>
              <S.MeetingDetailContentsBox>

              </S.MeetingDetailContentsBox>
            </S.MeetingDetailContainer>
          </S.WrapperMeetingDetail>
        </S.MeetingContainer>
        
      </S.WrapperContents>
    </>
  )
}