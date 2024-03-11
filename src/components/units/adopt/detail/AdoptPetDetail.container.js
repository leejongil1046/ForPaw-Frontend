import { useRouter } from "next/router";
import AdoptPetDetailUI from "./AdoptPetDetail.presenter";

export default function AdoptPetDetail() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  const navigateBack = () => {
    router.back();
  };

  return (
    <AdoptPetDetailUI navigateTo={navigateTo} navigateBack={navigateBack} />
  );
}
