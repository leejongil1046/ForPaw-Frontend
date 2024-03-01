import { useRouter } from "next/router";
import SearchUI from "./Search.presenter";

export default function Search() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return <SearchUI navigateBack={navigateBack} />;
}
