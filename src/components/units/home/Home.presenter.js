import * as S from "./Home.styles";
import Image from "next/image";

export default function HomeUI() {
  return (
    <S.WrapperHomeContents>
      <S.HomeIntroContainer>
        <S.HomeIntroTitle>포포는 무슨 일을 하나요?</S.HomeIntroTitle>
        <S.PawImageSmallBlock>
          <Image
            src="/images/home/paw_small.png"
            alt="paw_small"
            width={38}
            height={38}
          />
        </S.PawImageSmallBlock>
        <S.PawImageBigBlock>
          <Image
            src="/images/home/paw_big.png"
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
            src="/images/home/arrow_right.png"
            alt="paw_big"
            width={15}
            height={15}
          />
        </S.HomeIntroArrowBlock>
      </S.HomeIntroContainer>
    </S.WrapperHomeContents>
  );
}
