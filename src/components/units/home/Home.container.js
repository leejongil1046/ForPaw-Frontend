import Navigation from "../navigation/Navigation.container";
import HomeHeaderUI from "../headers/HomeHeader.presenter";
import HomeUI from "./Home.presenter";

export default function CommunityQuestions() {
  return (
    <>
      <HomeHeaderUI />
      <HomeUI />
      <Navigation />
    </>
  );
}
