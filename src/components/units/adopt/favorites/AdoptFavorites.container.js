import { useRouter } from "next/router";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotFavoritesUI from "./AdoptFavorites.presenter";

export default function AdpotFavorites() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);
  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotFavoritesUI navigateTo={navigateTo} />
      <Navigation />
    </>
  );
}
