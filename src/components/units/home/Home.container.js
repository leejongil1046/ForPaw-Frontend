import { useRouter } from "next/router";
import HomeHeader from "../../commons/headers/HomeHeader.container";
import Navigation from "../../commons/navigation/Navigation.container";
import HomeUI from "./Home.presenter";

export default function CommunityQuestions() {
  const router = useRouter();
  const navigateTo = (path) => () => router.push(path);

  const paths = {
    adopt: "/adopt/pets",
    volunteer: "/volunteer/recommend",
    community: "/community/adoption",
    faq: "/home/faq",
    dogs: "home/dogs",
    cats: "home/cats",
  };

  return (
    <>
      <HomeHeader />
      <HomeUI navigateTo={navigateTo} paths={paths} />
      <Navigation />
    </>
  );
}
