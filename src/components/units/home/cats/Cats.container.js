import { useRouter } from "next/router";
import Headers from "../../../commons/headers/Headers.container";
import CatsUI from "./Cats.presenter";
import Navigation from "../../../commons/navigation/Navigation.container";

export default function Cats() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return (
    <>
      <Headers />
      <CatsUI navigateBack={navigateBack} />
      <Navigation />
    </>
  );
}
