import * as S from "./AdoptPets.styles";
import Image from "next/image";

export default function AdpotPetsUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.AdoptPetMenuBlock>
          <S.AdoptPetMenuDate>최근 날짜</S.AdoptPetMenuDate>
          <S.AdoptPetMenuDogs>개</S.AdoptPetMenuDogs>
          <S.AdoptPetMenuCats>고양이</S.AdoptPetMenuCats>
        </S.AdoptPetMenuBlock>
        <S.AdoptPet onClick={props.navigateTo("/adopt/pets/detail")}>
          <Image
            src="/images/pets/dog_1.svg"
            alt="dog_1"
            width={344}
            height={344}
          />
          <S.AdoptLikeToggle>
            <Image
              src="/images/pets/like_icon_big.svg"
              alt="like_icon_big"
              width={32}
              height={32}
            />
          </S.AdoptLikeToggle>
          <S.AdoptInfoBlock>
            <S.AdoptNameGender>
              유기동물 이름
              <Image
                src="/images/pets/male_icon_big.svg"
                alt="male_icon_big"
                width={24}
                height={24}
              />
            </S.AdoptNameGender>
            <S.AdoptText>
              사람을 좋아하는 사교성, 친화력 최고 인절미
            </S.AdoptText>
            <S.AdoptBirthAddress>5살 부산 금정구</S.AdoptBirthAddress>
            <S.AdoptLikeBlock>
              <S.AdoptLike>
                <Image
                  src="/images/pets/like_icon.svg"
                  alt="like_icon"
                  width={20}
                  height={20}
                />
              </S.AdoptLike>
              12
            </S.AdoptLikeBlock>
            <S.AdoptViewBlock>
              <S.AdoptView>
                <Image
                  src="/images/pets/comment_icon.svg"
                  alt="comment_icon"
                  width={16}
                  height={16}
                />
              </S.AdoptView>
              25
            </S.AdoptViewBlock>
          </S.AdoptInfoBlock>
        </S.AdoptPet>
        <S.AdoptPet onClick={props.navigateTo("/adopt/pets/detail")}>
          <Image
            src="/images/pets/dog_1.svg"
            alt="dog_1"
            width={344}
            height={344}
          />
          <S.AdoptLikeToggle>
            <Image
              src="/images/pets/like_icon_big.svg"
              alt="like_icon_big"
              width={32}
              height={32}
            />
          </S.AdoptLikeToggle>
          <S.AdoptInfoBlock>
            <S.AdoptNameGender>
              유기동물 이름
              <Image
                src="/images/pets/male_icon_big.svg"
                alt="male_icon_big"
                width={24}
                height={24}
              />
            </S.AdoptNameGender>
            <S.AdoptText>
              사람을 좋아하는 사교성, 친화력 최고 인절미
            </S.AdoptText>
            <S.AdoptBirthAddress>5살 부산 금정구</S.AdoptBirthAddress>
            <S.AdoptLikeBlock>
              <S.AdoptLike>
                <Image
                  src="/images/pets/like_icon.svg"
                  alt="like_icon"
                  width={20}
                  height={20}
                />
              </S.AdoptLike>
              12
            </S.AdoptLikeBlock>
            <S.AdoptViewBlock>
              <S.AdoptView>
                <Image
                  src="/images/pets/comment_icon.svg"
                  alt="comment_icon"
                  width={16}
                  height={16}
                />
              </S.AdoptView>
              25
            </S.AdoptViewBlock>
          </S.AdoptInfoBlock>
        </S.AdoptPet>
        <S.AdoptPet onClick={props.navigateTo("/adopt/pets/detail")}>
          <Image
            src="/images/pets/dog_1.svg"
            alt="dog_1"
            width={344}
            height={344}
          />
          <S.AdoptLikeToggle>
            <Image
              src="/images/pets/like_icon_big.svg"
              alt="like_icon_big"
              width={32}
              height={32}
            />
          </S.AdoptLikeToggle>
          <S.AdoptInfoBlock>
            <S.AdoptNameGender>
              유기동물 이름
              <Image
                src="/images/pets/male_icon_big.svg"
                alt="male_icon_big"
                width={24}
                height={24}
              />
            </S.AdoptNameGender>
            <S.AdoptText>
              사람을 좋아하는 사교성, 친화력 최고 인절미
            </S.AdoptText>
            <S.AdoptBirthAddress>5살 부산 금정구</S.AdoptBirthAddress>
            <S.AdoptLikeBlock>
              <S.AdoptLike>
                <Image
                  src="/images/pets/like_icon.svg"
                  alt="like_icon"
                  width={20}
                  height={20}
                />
              </S.AdoptLike>
              12
            </S.AdoptLikeBlock>
            <S.AdoptViewBlock>
              <S.AdoptView>
                <Image
                  src="/images/pets/comment_icon.svg"
                  alt="comment_icon"
                  width={16}
                  height={16}
                />
              </S.AdoptView>
              25
            </S.AdoptViewBlock>
          </S.AdoptInfoBlock>
        </S.AdoptPet>
        <S.AdoptPet onClick={props.navigateTo("/adopt/pets/detail")}>
          <Image
            src="/images/pets/dog_1.svg"
            alt="dog_1"
            width={344}
            height={344}
          />
          <S.AdoptLikeToggle>
            <Image
              src="/images/pets/like_icon_big.svg"
              alt="like_icon_big"
              width={32}
              height={32}
            />
          </S.AdoptLikeToggle>
          <S.AdoptInfoBlock>
            <S.AdoptNameGender>
              유기동물 이름
              <Image
                src="/images/pets/male_icon_big.svg"
                alt="male_icon_big"
                width={24}
                height={24}
              />
            </S.AdoptNameGender>
            <S.AdoptText>
              사람을 좋아하는 사교성, 친화력 최고 인절미
            </S.AdoptText>
            <S.AdoptBirthAddress>5살 부산 금정구</S.AdoptBirthAddress>
            <S.AdoptLikeBlock>
              <S.AdoptLike>
                <Image
                  src="/images/pets/like_icon.svg"
                  alt="like_icon"
                  width={20}
                  height={20}
                />
              </S.AdoptLike>
              12
            </S.AdoptLikeBlock>
            <S.AdoptViewBlock>
              <S.AdoptView>
                <Image
                  src="/images/pets/comment_icon.svg"
                  alt="comment_icon"
                  width={16}
                  height={16}
                />
              </S.AdoptView>
              25
            </S.AdoptViewBlock>
          </S.AdoptInfoBlock>
        </S.AdoptPet>
      </S.WrapperContents>
    </>
  );
}
