import * as S from "./Search.styles";
import Image from "next/image";

export default function SearchUI() {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/left_arrow_icon.png"
              alt="left_arrow_icon"
              width={15}
              height={25}
              onClick={props.navigateBack}
            />
            <S.Title>검색하기</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperSearch>
        <S.SearchContainer>
          <S.SearchWindow type="text" placeholder="검색어를 입력해주세요" />
          <S.SearchImageContainer>
            <Image
              src="/images/info/search_icon_info.png"
              alt="search_icon"
              width={31.36}
              height={31.36}
            />
          </S.SearchImageContainer>
          <S.SearchButton>취소</S.SearchButton>
        </S.SearchContainer>
        <S.SearchContentsContainer></S.SearchContentsContainer>
      </S.WrapperSearch>
    </>
  );
}
