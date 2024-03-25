import { useRouter } from "next/router";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotPetsUI from "./AdoptPets.presenter";
import { useEffect, useState } from "react";
import { fetchPets } from "./AdoptPets.queries";

const example = {
  success: true,
  code: 200,
  message: "ok",
  result: {
    animals: [
      {
        id: 25,
        name: "포리",
        age: "2024(60일미만)(년생)",
        gender: "M",
        specialMark: "사람을 좋아하고 활발함",
        region: "경상북도 경산시",
        inquiryNum: 25,
        likeNum: 20,
        isLike: false,
        profileURL: "/images/pets/dog_1.svg",
      },
      {
        id: 26,
        name: "메리",
        age: "2024(60일미만)(년생)",
        gender: "M",
        specialMark: "활발함",
        region: "대구광역시 수성구",
        inquiryNum: 5,
        likeNum: 14,
        isLike: false,
        profileURL: "/images/pets/dog_1.svg",
      },
    ],
  },
};

export default function AdpotPets() {
  const router = useRouter();
  const [pets, setPets] = useState(example.result.animals);

  useEffect(() => {
    // async function fetchData() {
    //   const petsData = await fetchPets();
    //   setPets(petsData);
    // }
    // fetchData();
  }, []);

  const navigateTo = (path) => () => router.push(path);
  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotPetsUI navigateTo={navigateTo} pets={pets} />
      <Navigation />
    </>
  );
}
