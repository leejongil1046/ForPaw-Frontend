import { useRouter } from "next/router";
import { useState } from 'react';
import SignUpUI02 from "./Signup02.presenter";

export default function SignUp02(){
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  const [selectedOption, setSelectedOption] = useState(""); ///// select의 값을 찾아내는 함수
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);  //이메일 사용가능 여부
  const [isVisible, setIsvisible] = useState(false);
  const [timer, setTimer] = useState(90); // 타이머 초 초기값
  const [timerId, setTimerId] = useState(null); // 타이머 인터벌 ID

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckEmailAndStartTimer = () => {
    setIsEmailAvailable(true);
    setIsvisible(true);
    setTimer(90);

    clearInterval(timerId);

    const id = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(id);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
    setTimerId(id); // 타이머 인터벌 ID 저장
  };

  return(
    <>
      <SignUpUI02
        navigateTo={navigateTo}
        selectedOption={selectedOption}
        handleChange={handleChange}
        isEmailAvailable={isEmailAvailable}
        isVisible={isVisible}
        timer={timer}
        handleCheckEmailAndStartTimer={handleCheckEmailAndStartTimer}
      />
    </>
  )
}