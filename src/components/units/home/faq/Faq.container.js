import { useRouter } from "next/router";
import FaqUI from "./Faq.presenter";
import Headers from "../../../commons/headers/Headers.container";

export default function Faq() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return (
    <>
      <Headers />
      <FaqUI navigateBack={navigateBack} />
    </>
  );
}
