import { useRouter } from "next/router";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotFavoritesUI from "./AdoptFavorites.presenter";
import { useEffect, useState } from "react";

const petsData = [
  {
    id: 1,
    name: "인절미",
    age: "5살",
    location: "부산 금정구",
    type: "dog",
    genderIcon: "/images/pets/male_icon_big.svg",
    likeCount: 12,
    commentCount: 25,
    imageSrc: "/images/pets/dog_1.svg",
  },
  {
    id: 2,
    name: "콩이",
    age: "3살",
    location: "서울 강남구",
    type: "cat",
    genderIcon: "/images/pets/male_icon_big.svg",
    likeCount: 18,
    commentCount: 30,
    imageSrc: "/images/pets/dog_1.svg",
  },
  {
    id: 3,
    name: "두부",
    age: "2살",
    location: "인천 연수구",
    type: "dog",
    genderIcon: "/images/pets/male_icon_big.svg",
    likeCount: 8,
    commentCount: 14,
    imageSrc: "/images/pets/dog_1.svg",
  },
  {
    id: 4,
    name: "단비",
    age: "4살",
    location: "대구 중구",
    type: "dog",
    genderIcon: "/images/pets/male_icon_big.svg",
    likeCount: 20,
    commentCount: 35,
    imageSrc: "/images/pets/dog_1.svg",
  },
  {
    id: 5,
    name: "모찌",
    age: "6살",
    location: "경기 수원시",
    type: "dog",
    genderIcon: "/images/pets/male_icon_big.svg",
    likeCount: 15,
    commentCount: 22,
    imageSrc: "/images/pets/dog_1.svg",
  },
];
export default function AdpotFavorites() {
  const router = useRouter();
  const [pets, setPets] = useState(petsData);

  useEffect(() => {
    async function fetchData() {
      // const petsData = await fetchPets();
      // setPets(petsData);
    }

    fetchData();
  }, []);

  const navigateTo = (path) => () => router.push(path);
  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotFavoritesUI navigateTo={navigateTo} pets={pets} />
      <Navigation />
    </>
  );
}
