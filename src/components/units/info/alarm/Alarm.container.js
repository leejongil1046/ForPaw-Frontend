import { useRouter } from "next/router";
import AlarmUI from "./Alarm.presenter";

export default function Alarm() {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return <AlarmUI navigateBack={navigateBack} />;
}
