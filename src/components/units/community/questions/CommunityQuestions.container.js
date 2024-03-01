import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
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
