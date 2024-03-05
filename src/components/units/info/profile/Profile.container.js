import { useRouter } from "next/router";
import ProfileUI from "./Profile.presenter";

export default function Profile() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  const navigateBack = () => {
    router.back();
  };

  const paths = {
    edit: "/info/profile/edit",
    pw: "/info/profile/pw",
  };

  return (
    <ProfileUI
      navigateTo={navigateTo}
      navigateBack={navigateBack}
      paths={paths}
    />
  );
}
