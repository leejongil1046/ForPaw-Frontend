import Navigation from "../../../../../../src/components/commons/navigation/Navigation.container";
import AdoptSheltersHandler from "../AdoptSheltersHandler.container";
import AdpotSheltersDetailUI from "./AdoptSheltersDetail.presenter";

export default function AdpotSheltersDetail() {
  return (
    <>
      <AdoptSheltersHandler />
      <AdpotSheltersDetailUI />
      <Navigation />
    </>
  );
}
