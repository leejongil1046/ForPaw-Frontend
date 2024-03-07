import * as S from "./VolunteerJoined.styles";
import Image from "next/image";

export default function VolunteerJoinedUI() {
  return (
    <>
      <S.WrapperContents>
        <S.VolunteerBlock>
          <S.VolunteerImg>
            <Image
              src="/images/volunteer/volunteer_1.svg"
              alt="volunteer_1"
              width={324}
              height={183}
            />
            <S.VolunteerLikeBlock>
              <Image
                src="/images/volunteer/volunteer_like_icon.svg"
                alt="volunteer_like_icon"
                width={17}
                height={14}
              />
              12
            </S.VolunteerLikeBlock>
          </S.VolunteerImg>
          <S.VolunteerTitle>추천모임 이름 적기</S.VolunteerTitle>
          <S.VolunteerText>
            소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀 딸이라는 걸 알 수
            있었다. 그런데, 어제까지는 개울 기슭에...
          </S.VolunteerText>
          <S.VolunteerInfoBlock>
            <S.VolunteerNumberOfMember>12명 참여중</S.VolunteerNumberOfMember>
            <S.VolunteerCategory>봉사 카테고리명</S.VolunteerCategory>
            <S.VolunteerRegion>부산 금정구</S.VolunteerRegion>
          </S.VolunteerInfoBlock>
        </S.VolunteerBlock>
        <S.VolunteerBlock>
          <S.VolunteerImg>
            <Image
              src="/images/volunteer/volunteer_1.svg"
              alt="volunteer_1"
              width={324}
              height={183}
            />
            <S.VolunteerLikeBlock>
              <Image
                src="/images/volunteer/volunteer_like_icon.svg"
                alt="volunteer_like_icon"
                width={17}
                height={14}
              />
              12
            </S.VolunteerLikeBlock>
          </S.VolunteerImg>
          <S.VolunteerTitle>추천모임 이름 적기</S.VolunteerTitle>
          <S.VolunteerText>
            소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀 딸이라는 걸 알 수
            있었다. 그런데, 어제까지는 개울 기슭에...
          </S.VolunteerText>
          <S.VolunteerInfoBlock>
            <S.VolunteerNumberOfMember>12명 참여중</S.VolunteerNumberOfMember>
            <S.VolunteerCategory>봉사 카테고리명</S.VolunteerCategory>
            <S.VolunteerRegion>부산 금정구</S.VolunteerRegion>
          </S.VolunteerInfoBlock>
        </S.VolunteerBlock>
        <S.VolunteerBlock>
          <S.VolunteerImg>
            <Image
              src="/images/volunteer/volunteer_1.svg"
              alt="volunteer_1"
              width={324}
              height={183}
            />
            <S.VolunteerLikeBlock>
              <Image
                src="/images/volunteer/volunteer_like_icon.svg"
                alt="volunteer_like_icon"
                width={17}
                height={14}
              />
              12
            </S.VolunteerLikeBlock>
          </S.VolunteerImg>
          <S.VolunteerTitle>추천모임 이름 적기</S.VolunteerTitle>
          <S.VolunteerText>
            소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀 딸이라는 걸 알 수
            있었다. 그런데, 어제까지는 개울 기슭에...
          </S.VolunteerText>
          <S.VolunteerInfoBlock>
            <S.VolunteerNumberOfMember>12명 참여중</S.VolunteerNumberOfMember>
            <S.VolunteerCategory>봉사 카테고리명</S.VolunteerCategory>
            <S.VolunteerRegion>부산 금정구</S.VolunteerRegion>
          </S.VolunteerInfoBlock>
        </S.VolunteerBlock>
        <S.VolunteerAddIcon>
          <Image
            src="/images/volunteer/volunteer_add_icon.svg"
            alt="volunteer_add_icon"
            width={28}
            height={28}
          />
        </S.VolunteerAddIcon>
      </S.WrapperContents>
    </>
  );
}
