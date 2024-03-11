import * as S from "./Cats.styles";
import Image from "next/image";

export default function CatsUI(props) {
  return (
    <>
      <S.WrapperCats>
        <S.CatsMainContainer>
          <Image
            src="/images/cats/cats_main_image.svg"
            alt="cats_main_images"
            width={390}
            height={315}
          />
          <S.CatsMainImageBlurBox />
          <S.CatsMainTitleBlock>
            <S.CatsMainTitle>반려묘와<br />함께 생활하는 방법</S.CatsMainTitle>
            <S.CatsTitleContent>
              고양이와 함께 살아가는 법,<br />
              포포와 함께 알아봐요!
            </S.CatsTitleContent>
          </S.CatsMainTitleBlock>
        </S.CatsMainContainer>
        <S.CatsContentsContainer>
          <S.CatsContentsTitle>식사는 규칙적으로, 필요한 양만큼</S.CatsContentsTitle>
          <S.CatsContentsDetail>
            반려묘에게는 적절한 영양분이 필요해요!<br />
            규칙적인 식사 스케줄과 깨끗한 물이 가장 중요하답니다.<br />
            뚱냥이도 귀엽지만... 건강에 안좋으니까요!
          </S.CatsContentsDetail>
          <Image
            src="/images/dogs/about_eat_meal.svg"
            alt="about_eat_meal"
            width={344}
            height={200}
          />
        </S.CatsContentsContainer>
      </S.WrapperCats>
    </>
  );
}
