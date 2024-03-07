import { useRouter } from "next/router";
import SignUpUI01 from "./Signup01.presenter";

export default function SignUp01(){
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);
  return(
    <>
      <SignUpUI01 
        navigateTo={navigateTo}
      />
    </>
  )
}