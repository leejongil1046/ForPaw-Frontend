import Headers from "../../headers/Headers.container";
import Navigation from "../../navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerRegionUI from "./VolunteerRegion.presenter";

export default function VolunteerRegion() {
  return (
    <>
      <Headers />
      <VolunteerHandler />
      <VolunteerRegionUI />
      <Navigation />
    </>
  );
}
