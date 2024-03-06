import * as S from "./Home.styles";
import Image from "next/image";

export default function HomeUI() {
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
            src="/images/home/arrow_right.svg"
            alt="paw_big"
            width={15}
            height={15}
          />
        </S.HomeIntroArrowBlock>
      </S.HomeIntroContainer>
      <S.HomeIconContainer>
        <S.HomeIconBlock>
          <S.HomeIcon>
            <Image
              src="/images/home/faq_icon.svg"
              alt="paw_big"
              width={84}
              height={84}
            />
          </S.HomeIcon>
          <S.HomeIconText>자주 하는 질문</S.HomeIconText>
        </S.HomeIconBlock>
        <S.HomeIconBlock>
          <S.HomeDogsCatsIcon>
            <Image
              src="/images/home/dogs_icon.svg"
              alt="paw_big"
              width={100}
              height={100}
            />
          </S.HomeDogsCatsIcon>
          <S.HomeIconText>강아지 키우기</S.HomeIconText>
        </S.HomeIconBlock>
        <S.HomeIconBlock>
          <S.HomeDogsCatsIcon>
            <Image
              src="/images/home/cats_icon.svg"
              alt="paw_big"
              width={92}
              height={92}
            />
          </S.HomeDogsCatsIcon>
          <S.HomeIconText>고양이 키우기</S.HomeIconText>
        </S.HomeIconBlock>
      </S.HomeIconContainer>
      <S.HomeAdoptContainer>
        <S.HomeAdoptTitleBlock>
          <S.HomeAdoptTitle>입양/임시보호</S.HomeAdoptTitle>
          <Image
            src="/images/commons/arrow_right_icon.svg"
            alt="paw_big"
            width={15}
            height={25}
          />
        </S.HomeAdoptTitleBlock>
        <S.HomeAdoptItemBlock>
          <S.HomeAdoptItem></S.HomeAdoptItem>
          <S.HomeAdoptItem></S.HomeAdoptItem>
          <S.HomeAdoptItem></S.HomeAdoptItem>
          <S.HomeAdoptItemArrow></S.HomeAdoptItemArrow>
        </S.HomeAdoptItemBlock>
      </S.HomeAdoptContainer>
    </S.WrapperHomeContents>
  );
}
