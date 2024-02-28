import Headers from "../../headers/Headers.container";
import Navigation from "../../navigation/Navigation.container";
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
