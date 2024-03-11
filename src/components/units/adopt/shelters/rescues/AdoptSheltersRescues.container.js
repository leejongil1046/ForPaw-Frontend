import { useRouter } from "next/router";
import Navigation from "../../../../commons/navigation/Navigation.container";
import AdoptSheltersHandler from "../AdoptSheltersHandler.container";
import AdpotSheltersRescuesUI from "./AdoptSheltersRescues.presenter";

export default function AdpotSheltersRescues() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);
  return (
    <>
      <AdoptSheltersHandler />
      <AdpotSheltersRescuesUI navigateTo={navigateTo} />
      <Navigation />
    </>
  );
}
