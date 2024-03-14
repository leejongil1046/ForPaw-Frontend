import VolunteerDetailHeader from "./volunteerDetailHeader/VolunteerDetail.container";
import VolunteerHandler from "../../VolunteerHandler.container";
import VolunteerDetailUI from "./VolunteerDetail.presenter";
import Navigation from "../../../../commons/navigation/Navigation.container";

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