import * as S from "./VolunteerRegion.styles";
import Image from "next/image";

export default function VolunteerRegionUI() {
  return (
    <>
      <S.WrapperContents>
        <S.VolunteerRegionMenuBlock>
          <S.VolunteerRegionMenu>
            <option value="" disabled selected>
              지역명
            </option>
          </S.VolunteerRegionMenu>
          <S.MenuArrowBlock>
            <Image
              src="/images/volunteer/volunteer_arrow_down_icon.svg"
              alt="volunteer_arrow_down_icon"
              width={18}
              height={20}
            />
          </S.MenuArrowBlock>
          <S.VolunteerRegionMenuSub>
            <option value="" disabled selected>
              지역명
            </option>
          </S.VolunteerRegionMenuSub>
          <S.MenuSubArrowBlock>
            <Image
              src="/images/volunteer/volunteer_arrow_down_icon.svg"
              alt="volunteer_arrow_down_icon"
              width={18}
              height={20}
            />
          </S.MenuSubArrowBlock>
        </S.VolunteerRegionMenuBlock>
        <S.VolunteerNewTitle>새로 생겼어요</S.VolunteerNewTitle>
        <S.VolunteerNewBlock>
          <S.VolunteerNew>
            <S.VolunteerNewImg>
              <Image
                src="/images/volunteer/volunteer_new.svg"
                alt="volunteer_new"
                width={208}
                height={120}
              />
            </S.VolunteerNewImg>
            <S.VolunteerNewName>새로 생긴 모임 이름</S.VolunteerNewName>
            <S.VolunteerNewInfoBlock>
              <S.VolunteerNewCategory>봉사 카테고리명</S.VolunteerNewCategory>
              <S.VolunteerNewRegion>부산 금정구</S.VolunteerNewRegion>
            </S.VolunteerNewInfoBlock>
          </S.VolunteerNew>
          <S.VolunteerNew>
            <S.VolunteerNewImg>
              <Image
                src="/images/volunteer/volunteer_new.svg"
                alt="volunteer_new"
                width={208}
                height={120}
              />
            </S.VolunteerNewImg>
            <S.VolunteerNewName>새로 생긴 모임 이름</S.VolunteerNewName>
            <S.VolunteerNewInfoBlock>
              <S.VolunteerNewCategory>봉사 카테고리명</S.VolunteerNewCategory>
              <S.VolunteerNewRegion>부산 금정구</S.VolunteerNewRegion>
            </S.VolunteerNewInfoBlock>
          </S.VolunteerNew>
          <S.VolunteerNew>
            <S.VolunteerNewImg>
              <Image
                src="/images/volunteer/volunteer_new.svg"
                alt="volunteer_new"
                width={208}
                height={120}
              />
            </S.VolunteerNewImg>
            <S.VolunteerNewName>새로 생긴 모임 이름</S.VolunteerNewName>
            <S.VolunteerNewInfoBlock>
              <S.VolunteerNewCategory>봉사 카테고리명</S.VolunteerNewCategory>
              <S.VolunteerNewRegion>부산 금정구</S.VolunteerNewRegion>
            </S.VolunteerNewInfoBlock>
          </S.VolunteerNew>
        </S.VolunteerNewBlock>
        <S.VolunteerNewAlarmBlock>
          <S.VolunteerNewAlarmIcon>
            <Image
              src="/images/volunteer/volunteer_new_alarm_icon.svg"
              alt="volunteer_new_alarm_icon"
              width={14}
              height={16}
            />
          </S.VolunteerNewAlarmIcon>
          새 모임 알림
        </S.VolunteerNewAlarmBlock>
        <S.VolunteerRegionTitle>장전동 모임</S.VolunteerRegionTitle>
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
