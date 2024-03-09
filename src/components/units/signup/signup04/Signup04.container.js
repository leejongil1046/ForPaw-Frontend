import SignUpUI04 from "./Signup04.presenter"
import { useRouter } from "next/router";

export default function SignUp04() {
  
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  return (
    <>
      <SignUpUI04 
        navigateTo={navigateTo}
      />
    </>
  )
}