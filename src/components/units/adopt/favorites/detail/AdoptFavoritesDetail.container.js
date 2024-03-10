import { useRouter } from "next/router";
import AdoptFavoritesDetailUI from "./AdoptFavoritesDetail.presenter";

export default function AdoptFavoritesDetail() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return <AdoptFavoritesDetailUI navigateBack={navigateBack} />;
}
