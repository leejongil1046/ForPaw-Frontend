import Headers from "../../headers/Headers.container";
import Navigation from "../../navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerRecommendUI from "./VolunteerRecommend.presenter";

export default function VolunteerRecommend() {
  return (
    <>
      <Headers />
      <VolunteerHandler />
      <VolunteerRecommendUI />
      <Navigation />
    </>
  );
}
