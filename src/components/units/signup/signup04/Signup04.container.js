import SignUpUI04 from "./Signup04.presenter"
import { useRouter } from "next/router";
import { useState } from 'react';

export default function SignUp04() {

  const router = useRouter();
  const [isVisible, setIsvisible] = useState(false);
  const [nickNameValue, setNickNameValue] = useState("");


  const navigateTo = (path) => () => router.push(path);

  const handleCheckNickname = () => {
    setIsvisible(true);
  }

  const handleNicknameValueChange = (e) => {
    setNickNameValue(e.target.value);
  }

  console.log(nickNameValue);

  return (
    <>
      <SignUpUI04 
        navigateTo={navigateTo}
        isVisible={isVisible}
        nickNameValue={nickNameValue}
        handleCheckNickname={handleCheckNickname}
        handleNicknameValueChange={handleNicknameValueChange}
      />
    </>
  )
}