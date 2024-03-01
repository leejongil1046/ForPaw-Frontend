import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
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
