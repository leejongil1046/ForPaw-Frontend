import * as S from "./Create_Volunteer.styles";
import Image from "next/image";

export default function CreateVolunteerUI() {
  return (
    <>
      <S.WrapperContents>
        <S.ContentsContainer>
          <S.TitleBlock>
            <S.Title>대표 사진</S.Title>
          </S.TitleBlock>
          <S.AddMainImg>
            <Image
              src="/images/signup/add_profile.svg"
              alt="add_profile"
              width={28}
              height={28}
            />
          </S.AddMainImg>
          <S.TitleBlock>
            <S.Title>새 모임 이름</S.Title>
          </S.TitleBlock>
          <S.InputVolunteerName placeholder="새 모임 이름 작성하기" type="text" />
          <S.TitleBlock>
            <S.Title>활동 지역 선택</S.Title>
          </S.TitleBlock>
          <S.BigSelectWrap>
            <S.Select title="city" defaultValue="">
              <option value="">시/도 선택</option>
            </S.Select>
            <S.Arrow1Img>
              <Image
                src="/images/info/select_arrow_icon.svg"
                alt="select_arrow_icon"
                width={22}
                height={12}
              />
            </S.Arrow1Img>
          </S.BigSelectWrap>
          <S.SmallSelectWrap>
            <S.SmallSelectBlock>
              <S.Select title="town" defaultValue="">
                <option value="">구/군/시</option>
              </S.Select>
              <S.Arrow2Img>
                <Image
                  src="/images/info/select_arrow_icon.svg"
                  alt="select_arrow_icon"
                  width={22}
                  height={12}
                />
              </S.Arrow2Img>
            </S.SmallSelectBlock>
            <S.SmallSelectBlock>
              <S.Select title="build" defaultValue="">
                <option value="">동/읍/면</option>
              </S.Select>
              <S.Arrow2Img>
                <Image
                  src="/images/info/select_arrow_icon.svg"
                  alt="select_arrow_icon"
                  width={22}
                  height={12}
                />
              </S.Arrow2Img>
            </S.SmallSelectBlock>
          </S.SmallSelectWrap>
          <S.TitleBlock>
            <S.Title>제한 인원</S.Title>
          </S.TitleBlock>
          <S.BigSelectWrap>
            <S.Select title="headcount" defaultValue="">
              <option value="">인원 수 선택</option>
            </S.Select>
            <S.Arrow1Img>
              <Image
                src="/images/info/select_arrow_icon.svg"
                alt="select_arrow_icon"
                width={22}
                height={12}
              />
            </S.Arrow1Img>
          </S.BigSelectWrap>
          <S.NextButtonBlock>
            <S.NextButtonItem type="submit">모임 만들기</S.NextButtonItem>
          </S.NextButtonBlock>
        </S.ContentsContainer>
      </S.WrapperContents>
    </>
  )
}