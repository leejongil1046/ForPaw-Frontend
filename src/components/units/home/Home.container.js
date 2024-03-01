import HomeHeader from "../../commons/headers/HomeHeader.container";
import Navigation from "../../commons/navigation/Navigation.container";
import HomeUI from "./Home.presenter";

export default function CommunityQuestions() {
  return (
    <>
      <HomeHeader />
      <HomeUI />
      <Navigation />
    </>
  );
}
