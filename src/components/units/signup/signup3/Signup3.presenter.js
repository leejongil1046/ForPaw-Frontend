import SignupHeaderUI from "../SignupHeader/SignupHeader.presenter";
import * as S from "./Signup3.styles";
import { useEffect, useState } from 'react';


export default function SignUpUI(){

  ////진행바 함수
  const [progress, setProgress] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 60) {
        setProgress(prevProgress => prevProgress + 1);
      } else {
        clearInterval(interval); // 프로그레스가 100에 도달하면 interval 제거
      }
    }, 10); // 100ms 간격으로 호출

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 제거
  }, []);

  ///// select의 값을 찾아내는 함수
  // const [selectedOption, setSelectedOption] = useState("");

  // const handleChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };
  return(
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeaderUI />
          <S.ProgressBarBlock>
            <S.ProgressBar value={progress} max={60}/>
          </S.ProgressBarBlock>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}