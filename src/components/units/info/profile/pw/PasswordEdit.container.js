import { useRouter } from "next/router";
import PasswordEditUI from "./PasswordEdit.presenter";

export default function PasswordEdit() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return <PasswordEditUI navigateBack={navigateBack} />;
}
