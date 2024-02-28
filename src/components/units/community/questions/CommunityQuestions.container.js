import Headers from "../../headers/Headers.container";
import Navigation from "../../navigation/Navigation.container";
import CommunityHandler from "../CommunityHandler.container";
import CommunityQuestionsUI from "./CommunityQuestions.presenter";

export default function CommunityQuestions() {
  return (
    <>
      <Headers />
      <CommunityHandler />
      <CommunityQuestionsUI />
      <Navigation />
    </>
  );
}
