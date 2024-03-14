import { useRouter } from "next/router"
import VolunteerDetailHeaderUI from "./VolunteerDetailHeader.presenter"

export default function VolunteerDetailHeader() {
  const router = useRouter();

  const PrevPage = () => {
    router.back();
  }

  return(
    <>
      <VolunteerDetailHeaderUI PrevPage={PrevPage} />
    </>
  )
}