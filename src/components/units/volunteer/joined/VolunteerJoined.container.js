import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerJoinedUI from "./VolunteerJoined.presenter";
import { useRouter } from "next/router";

export default function VolunteerJoined() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);
  return (
    <>
      <Headers />
      <VolunteerHandler />
      <VolunteerJoinedUI navigateTo={navigateTo}/>
      <Navigation />
    </>
  );
}
