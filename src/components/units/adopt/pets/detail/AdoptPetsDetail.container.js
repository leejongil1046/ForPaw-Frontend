import { useRouter } from "next/router";
import AdoptPetsDetailUI from "./AdoptPetsDetail.presenter";

export default function AdoptPetsDetail() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return <AdoptPetsDetailUI navigateBack={navigateBack} />;
}
