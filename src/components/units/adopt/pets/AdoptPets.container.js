import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotPetsUI from "./AdoptPets.presenter";

export default function AdpotPets() {
  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotPetsUI />
      <Navigation />
    </>
  );
}
