import Headers from "../../headers/Headers.container";
import Navigation from "../../navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotSheltersUI from "./AdoptShelters.presenter";

export default function AdpotShelters() {
  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotSheltersUI />
      <Navigation />
    </>
  );
}
