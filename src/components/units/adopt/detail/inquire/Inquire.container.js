import { useRouter } from "next/router";
import InquireUI from "./Inquire.presenter";

export default function Inquire() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return <InquireUI navigateBack={navigateBack} />;
}
