import { useRouter } from "next/router";
import SignUpUI03 from "./Signup03.presenter";
import { useState } from 'react';

export default function SignUp03(){
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  const [password, setPassword] = useState(""); // 비밀번호 상태 추가
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인 상태 추가
  const [isPasswordMatch, setIsPasswordMatch] = useState(false); // 비밀번호 일치 여부 상태 추가
  const [isVisible, setIsvisible] = useState(false); //비밀번호 input 여부 상태

  // 비밀번호 입력 시 상태 업데이트
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordMatch(newPassword === confirmPassword); // 비밀번호와 비밀번호 확인 값 비교하여 일치 여부 업데이트
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setIsvisible(true);
    setIsPasswordMatch(newConfirmPassword === password); // 비밀번호 확인 값과 비밀번호 값 비교하여 일치 여부 업데이트
  };
  

  return(
    <>
      <SignUpUI03
        navigateTo={navigateTo}
        password={password}
        confirmPassword={confirmPassword}
        isPasswordMatch={isPasswordMatch}
        handlePasswordChange={handlePasswordChange}
        handleConfirmPasswordChange={handleConfirmPasswordChange}
        isVisible={isVisible}
      />
    </>
  )
}