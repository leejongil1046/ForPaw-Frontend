import { useRouter } from "next/router";
import AdoptHandlerUI from "./AdoptHandler.presenter";

export default function AdoptHandler() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  const navigateTo = (path) => () => router.push(path);

  const paths = {
    pets: "/adopt/pets",
    shelters: "/adopt/shelters",
    favorites: "/adopt/favorites",
  };

  return (
    <>
      <AdoptHandlerUI
        isActive={isActive}
        navigateTo={navigateTo}
        paths={paths}
      />
    </>
  );
}
