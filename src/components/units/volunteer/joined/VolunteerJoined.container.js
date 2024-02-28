import Headers from "../../headers/Headers.container";
import Navigation from "../../navigation/Navigation.container";
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
