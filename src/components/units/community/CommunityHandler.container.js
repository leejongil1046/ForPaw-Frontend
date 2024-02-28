import { useRouter } from "next/router";
import CommunityHandlerUI from "./CommunityHandler.presenter";

export default function CommunityHandler() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  const navigateTo = (path) => () => router.push(path);

  const paths = {
    adoption: "/community/adoption",
    fostering: "/community/fostering",
    questions: "/community/questions",
  };

  return (
    <>
      <CommunityHandlerUI
        isActive={isActive}
        navigateTo={navigateTo}
        paths={paths}
      />
    </>
  );
}
