import * as S from "./AdoptPets.styles";
import Image from "next/image";

export default function AdpotPetsUI(props) {
  // `props.pets` 내의 각 요소를 순회하여 UI 구성
  return (
    <>
      <S.WrapperContents>
        {props.pets.map((pet) => (
          <S.AdoptPet
            key={pet.id}
            onClick={props.navigateTo(`/adopt/pets/detail`)}
          >
            <Image src={pet.imageSrc} alt={pet.name} width={344} height={344} />
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
                {pet.name}
                <Image
                  src={pet.genderIcon}
                  alt="gender_icon"
                  width={24}
                  height={24}
                />
              </S.AdoptNameGender>
              <S.AdoptText>
                {`사람을 좋아하는 사교성, 친화력 최고 ${pet.name}`}
              </S.AdoptText>
              <S.AdoptBirthAddress>{`${pet.age} ${pet.location}`}</S.AdoptBirthAddress>
              <S.AdoptLikeBlock>
                <S.AdoptLike>
                  <Image
                    src="/images/pets/like_icon.svg"
                    alt="like_icon"
                    width={20}
                    height={20}
                  />
                </S.AdoptLike>
                {pet.likeCount}
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
                {pet.commentCount}
              </S.AdoptViewBlock>
            </S.AdoptInfoBlock>
          </S.AdoptPet>
        ))}
      </S.WrapperContents>
    </>
  );
}
