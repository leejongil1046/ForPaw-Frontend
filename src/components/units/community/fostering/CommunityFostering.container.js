import Headers from "../../headers/Headers.container";
import Navigation from "../../navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import CommunityFosteringUI from "./CommunityFostering.presenter";

export default function CommunityFostering() {
  return (
    <>
      <Headers />
      <CommunityHandler />
      <CommunityFosteringUI />
      <Navigation />
    </>
  );
}
