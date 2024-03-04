import { useRouter } from "next/router";
import Headers from "../../../commons/headers/Headers.container";
import DogsUI from "./Dogs.presenter";

export default function Dogs() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return (
    <>
      <Headers />
      <DogsUI navigateBack={navigateBack} />;
    </>
  );
}
