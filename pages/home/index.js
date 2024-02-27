import HomeContentsUI from "../../src/components/units/home/HomeContents.presenter";
import HomeHeaderUI from "../../src/components/units/home/HomeHeader.presenter";
import Navigation from "../../src/components/units/navigation/Navigation.container";

export default function HomePage() {
  return (
    <>
      <HomeHeaderUI />
      <HomeContentsUI />
      <Navigation />
    </>
  );
}
