import Headers from "../../commons/headers/Headers.container";
import Navigation from "../../commons/navigation/Navigation.container";
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
