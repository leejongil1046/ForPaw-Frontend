import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotFavoritesUI from "./AdoptFavorites.presenter";

export default function AdpotFavorites() {
  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotFavoritesUI />
      <Navigation />
    </>
  );
}
