import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
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
