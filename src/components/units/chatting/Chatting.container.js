import Headers from "../headers/Headers.container";
import Navigation from "../navigation/Navigation.container";
import ChattingUI from "./Chatting.presenter";

export default function Chatting() {
  return (
    <>
      <Headers />
      <ChattingUI />
      <Navigation />
    </>
  );
}
