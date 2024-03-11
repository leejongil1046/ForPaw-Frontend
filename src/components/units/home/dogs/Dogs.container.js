import { useRouter } from "next/router";
import Headers from "../../../commons/headers/Headers.container";
import DogsUI from "./Dogs.presenter";
import Navigation from "../../../commons/navigation/Navigation.container";

export default function Dogs() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return (
    <>
      <Headers />
      <DogsUI navigateBack={navigateBack} />
      <Navigation />
    </>
  );
}
