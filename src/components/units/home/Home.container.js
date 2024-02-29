import HomeHeader from "../headers/HomeHeader.container";
import Navigation from "../navigation/Navigation.container";
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
