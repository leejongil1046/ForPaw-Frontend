import * as S from "./Home.styles";
import Image from "next/image";

export default function HomeUI(props) {
  return (
    <S.WrapperHomeContents>
      <S.HomeIntroContainer>
        <S.HomeIntroTitle>포포는 무슨 일을 하나요?</S.HomeIntroTitle>
        <S.PawImageSmallBlock>
          <Image
            src="/images/home/paw_small.svg"
            alt="paw_small"
            width={38}
            height={38}
          />
        </S.PawImageSmallBlock>
        <S.PawImageBigBlock>
          <Image
            src="/images/home/paw_big.svg"
            alt="paw_big"
            width={60}
            height={60}
          />
        </S.PawImageBigBlock>
        <S.HomeIntroTextUpper>
          유기동물에 관한 종합적인 케어 서비스를 제공하는
        </S.HomeIntroTextUpper>
        <S.HomeIntroTextLower>
          브랜드 '포포'에 관한 이야기를 확인해보세요!
        </S.HomeIntroTextLower>
        <S.HomeIntroArrowBlock>
          <Image
            src="/images/home/arrow_right_intro.svg"
            alt="arrow_right_intro"
            width={15}
            height={15}
          />
        </S.HomeIntroArrowBlock>
      </S.HomeIntroContainer>
      <S.HomeIconContainer>
        <S.HomeIconBlock onClick={props.navigateTo(props.paths.faq)}>
          <S.HomeIcon>
            <Image
              src="/images/home/faq_icon.svg"
              alt="faq_icon"
              width={84}
              height={84}
            />
          </S.HomeIcon>
          <S.HomeIconText>자주 하는 질문</S.HomeIconText>
        </S.HomeIconBlock>
        <S.HomeIconBlock onClick={props.navigateTo(props.paths.dogs)}>
          <S.HomeDogsCatsIcon>
            <Image
              src="/images/home/dogs_icon.svg"
              alt="dogs_icon"
              width={100}
              height={100}
            />
          </S.HomeDogsCatsIcon>
          <S.HomeIconText>강아지 키우기</S.HomeIconText>
        </S.HomeIconBlock>
        <S.HomeIconBlock onClick={props.navigateTo(props.paths.cats)}>
          <S.HomeDogsCatsIcon>
            <Image
              src="/images/home/cats_icon.svg"
              alt="cats_icon"
              width={92}
              height={92}
            />
          </S.HomeDogsCatsIcon>
          <S.HomeIconText>고양이 키우기</S.HomeIconText>
        </S.HomeIconBlock>
      </S.HomeIconContainer>
      <S.HomeContentsContainer>
        <S.HomeTitleBlock>
          <S.HomeTitle>입양/임시보호</S.HomeTitle>
          <Image
            src="/images/commons/arrow_right_icon.svg"
            alt="arrow_right_icon"
            width={15}
            height={25}
            onClick={props.navigateTo(props.paths.adopt)}
          />
        </S.HomeTitleBlock>
        <S.AdoptPetBlock>
          <S.AdoptPet>
            <Image
              src="/images/pets/dog_1.svg"
              alt="dog_1"
              width={254}
              height={254}
            />
            <S.AdoptInfoBlock>
              <S.AdoptNameGender>
                유기동물 이름
                <Image
                  src="/images/pets/male_icon.svg"
                  alt="male_icon"
                  width={17}
                  height={17}
                />
              </S.AdoptNameGender>
              <S.AdoptBirthAddress>2019년생 부산 금정구</S.AdoptBirthAddress>
              <S.AdoptLikeBlock>
                <S.AdoptLike></S.AdoptLike>
                12
              </S.AdoptLikeBlock>
              <S.AdoptViewBlock>
                <S.AdoptView></S.AdoptView>
                25
              </S.AdoptViewBlock>
            </S.AdoptInfoBlock>
          </S.AdoptPet>
          <S.AdoptPet>
            <Image
              src="/images/pets/cat_1.svg"
              alt="cat_1"
              width={254}
              height={254}
            />
            <S.AdoptInfoBlock>
              <S.AdoptNameGender>
                유기동물 이름
                <Image
                  src="/images/pets/male_icon.svg"
                  alt="male_icon"
                  width={17}
                  height={17}
                />
              </S.AdoptNameGender>
              <S.AdoptBirthAddress>2019년생 부산 금정구</S.AdoptBirthAddress>
              <S.AdoptLikeBlock>
                <S.AdoptLike></S.AdoptLike>
                12
              </S.AdoptLikeBlock>
              <S.AdoptViewBlock>
                <S.AdoptView></S.AdoptView>
                25
              </S.AdoptViewBlock>
            </S.AdoptInfoBlock>
          </S.AdoptPet>
          <S.AdoptPet>
            <Image
              src="/images/pets/dog_1.svg"
              alt="dog_1"
              width={254}
              height={254}
            />
            <S.AdoptInfoBlock>
              <S.AdoptNameGender>
                유기동물 이름
                <Image
                  src="/images/pets/male_icon.svg"
                  alt="male_icon"
                  width={17}
                  height={17}
                />
              </S.AdoptNameGender>
              <S.AdoptBirthAddress>2019년생 부산 금정구</S.AdoptBirthAddress>
              <S.AdoptLikeBlock>
                <S.AdoptLike></S.AdoptLike>
                12
              </S.AdoptLikeBlock>
              <S.AdoptViewBlock>
                <S.AdoptView></S.AdoptView>
                25
              </S.AdoptViewBlock>
            </S.AdoptInfoBlock>
          </S.AdoptPet>
          <S.AdoptArrow onClick={props.navigateTo(props.paths.adopt)}>
            <Image
              src="/images/home/arrow_right_adopt.svg"
              alt="arrow_right_adopt"
              width={87.51}
              height={63.46}
            />
          </S.AdoptArrow>
        </S.AdoptPetBlock>
      </S.HomeContentsContainer>
      <S.HomeContentsContainer>
        <S.HomeTitleBlock>
          <S.HomeTitle>봉사활동</S.HomeTitle>
          <Image
            src="/images/commons/arrow_right_icon.svg"
            alt="arrow_right_icon"
            width={15}
            height={25}
            onClick={props.navigateTo(props.paths.volunteer)}
          />
        </S.HomeTitleBlock>
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
      </S.HomeContentsContainer>
      <S.HomeContentsContainer>
        <S.HomeTitleBlock>
          <S.HomeTitle>인기글</S.HomeTitle>
          <Image
            src="/images/commons/arrow_right_icon.svg"
            alt="arrow_right_icon"
            width={15}
            height={25}
            onClick={props.navigateTo(props.paths.community)}
          />
        </S.HomeTitleBlock>
      </S.HomeContentsContainer>
    </S.WrapperHomeContents>
  );
}
