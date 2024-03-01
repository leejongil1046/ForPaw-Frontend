import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
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
