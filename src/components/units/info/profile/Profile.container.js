import { useRouter } from "next/router";
import ProfileUI from "./Profile.presenter";

export default function Profile() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return <ProfileUI navigateBack={navigateBack} />;
}
