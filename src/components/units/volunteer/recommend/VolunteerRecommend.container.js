import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerRecommendUI from "./VolunteerRecommend.presenter";
import { useRouter } from "next/router";

export default function VolunteerRecommend() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  return (
    <>
      <Headers />
      <VolunteerHandler />
      <VolunteerRecommendUI navigateTo={navigateTo} />
      <Navigation />
    </>
  );
}
