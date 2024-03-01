import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerJoinedUI from "./VolunteerJoined.presenter";

export default function VolunteerJoined() {
  return (
    <>
      <Headers />
      <VolunteerHandler />
      <VolunteerJoinedUI />
      <Navigation />
    </>
  );
}
