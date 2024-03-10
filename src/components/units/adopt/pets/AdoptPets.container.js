import { useRouter } from "next/router";
import Headers from "../../../commons/headers/Headers.container";
import Navigation from "../../../commons/navigation/Navigation.container";
import AdoptHandler from "../AdoptHandler.container";
import AdpotPetsUI from "./AdoptPets.presenter";

export default function AdpotPets() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);
  return (
    <>
      <Headers />
      <AdoptHandler />
      <AdpotPetsUI navigateTo={navigateTo} />
      <Navigation />
    </>
  );
}
