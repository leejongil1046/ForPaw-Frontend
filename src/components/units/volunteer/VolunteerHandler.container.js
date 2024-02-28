import { useRouter } from "next/router";
import VolunteerHandlerUI from "./VolunteerHandler.presenter";

export default function VolunteerHandler() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  const navigateTo = (path) => () => router.push(path);

  const paths = {
    recommend: "/volunteer/recommend",
    region: "/volunteer/region",
    joined: "/volunteer/joined",
  };

  return (
    <>
      <VolunteerHandlerUI
        isActive={isActive}
        navigateTo={navigateTo}
        paths={paths}
      />
    </>
  );
}
