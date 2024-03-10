import { useRouter } from "next/router";
import IntroUI from "./Intro.presenter";

export default function Intro() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  return(
    <>
      <IntroUI
        navigateTo={navigateTo} 
      />
    </>
  )
}