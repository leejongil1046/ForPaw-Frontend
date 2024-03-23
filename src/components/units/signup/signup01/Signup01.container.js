import { useRouter } from "next/router";
import SignUpUI01 from "./Signup01.presenter";
import { useState } from "react";

export default function SignUp01() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);
  const [nameValue, setNameValue] = useState("");

  const handleNameValueChange = (e) => {
    setNameValue(e.target.value);
  }

  return (
    <>
      <SignUpUI01
        navigateTo={navigateTo}
        nameValue={nameValue}
        handleNameValueChange={handleNameValueChange}
      />
    </>
  )
}