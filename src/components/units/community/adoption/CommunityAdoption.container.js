import Headers from "../../headers/Headers.container";
import Navigation from "../../navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import CommunityAdoptionUI from "./CommunityAdoption.presenter";

export default function CommunityAdoption() {
  return (
    <>
      <Headers />
      <CommunityHandler />
      <CommunityAdoptionUI />
      <Navigation />
    </>
  );
}
