import VolunteerDetailHeader from "./volunteerDetailHeader/VolunteerDetail.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import VolunteerHandler from "../VolunteerHandler.container";
import VolunteerDetailUI from "./VolunteerDetail.presenter";

export default function VolunteerDetail() {
  return (
    <>
      <VolunteerDetailHeader />
      <VolunteerHandler />
      <VolunteerDetailUI />
      <Navigation />
    </>
  )
}