import * as S from "./Signup2.styles";
import SignupHeaderUI from "../SignupHeader/SignupHeader.presenter";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

export default function SignUpUI() {
  const router = useRouter();

  const MoveSignup3Page = () => {
    router.push('/login/signup/3');
  };

  ////진행바를 나타내는 함수
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 40) {
        setProgress(prevProgress => prevProgress + 1);
      } else {
        clearInterval(interval); // 프로그레스가 100에 도달하면 interval 제거
      }
    }, 10); // 100ms 간격으로 호출

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 제거
  }, []);

  ///// select의 값을 찾아내는 함수
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeaderUI />
          <S.ProgressBarBlock>
            <S.ProgressBar value={progress} max={40} />
          </S.ProgressBarBlock>
          <S.InfoContainer>
            <S.InfoBlock>
              <S.InfoTitleItem>
                정보를 입력해주세요
              </S.InfoTitleItem>
              <S.EmailTitle>
                이메일
              </S.EmailTitle>
              <S.EmailBlock>
                <S.EmailItem placeholder="이메일" type="email" />
                <S.address>@</S.address>
                <S.SelectAddress value={selectedOption} onChange={handleChange}>
                  <option value="">직접입력</option>
                  <option value="gmail">gmail.com</option>
                  <option value="naver">naver.com</option>
                </S.SelectAddress>
              </S.EmailBlock>
              <S.CheckEmailBlock>
                <S.AvailableEmail>
                  사용가능한 이메일입니다.
                </S.AvailableEmail>
                <S.CheckEmailBtn type="submit">
                  중복확인
                </S.CheckEmailBtn>
              </S.CheckEmailBlock>
              <S.VerificationCodeTitle>
                인증번호를 입력해주세요
              </S.VerificationCodeTitle>
              <S.VerificationCodeBlock>
                <S.VerificationCodeItem placeholder="1234" type="number" />
                <S.timerItem></S.timerItem>
              </S.VerificationCodeBlock>
              <S.RetryVerification>
                인증번호가 오지 않아요...
              </S.RetryVerification>
            </S.InfoBlock>
            <S.NextButtonBlock>
              <S.NextButtonItem onClick={MoveSignup3Page}>
                다음
              </S.NextButtonItem>
            </S.NextButtonBlock>
          </S.InfoContainer>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}