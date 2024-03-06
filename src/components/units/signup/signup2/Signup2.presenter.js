import * as S from "./Signup2.styles";
import SignupHeaderUI from "../SignupHeader/SignupHeader.presenter";
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Progress from "../component/Progress";

export default function SignUpUI() {
  const router = useRouter();

  const MoveSignup3Page = () => {
    router.push('/login/signup/3');
  };

  const [selectedOption, setSelectedOption] = useState(""); ///// select의 값을 찾아내는 함수
  const [isEmailAvailable, setIsEmailAvailable] = useState(false);  //이메일 사용가능 여부
  const [isVisible, setIsvisible] = useState(false);
  const [timer, setTimer] = useState(90); // 타이머 초 초기값
  const [timerId, setTimerId] = useState(null); // 타이머 인터벌 ID

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckEmailAndStartTimer = () => {
    //여기에서 중복가능 버튼을 통해 사용가능한 이메일인지 유효성 검사를 실행하는 로직을 만들어주자!
    //사용가능하다면 true를 반환시키고 불가능하다면 flase를 반환시켜 나타낸다. 
    //밑의 setIsEmailAvailable를 if문으로 감싸서 판단한다.
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

  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeaderUI />
          <S.ProgressBarBlock>
            <S.ProgressBar value={Progress({ startValue: 20, max: 40, interval: 10 })} max={40} />
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
                  <option value="gmail.com">gmail.com</option>
                  <option value="naver.com">naver.com</option>
                </S.SelectAddress>
              </S.EmailBlock>
              <S.CheckEmailBlock>
                {isEmailAvailable ? (
                  <S.AvailableEmail style={{ visibility: isVisible ? 'visible' : '' }}>
                    사용가능한 이메일입니다.
                  </S.AvailableEmail>
                ) : (
                  <S.AvailableEmail style={{ color: 'red', visibility: isVisible ? 'visible' : '' }}>사용 불가능한 이메일입니다.</S.AvailableEmail>
                )}

                <S.CheckEmailBtn type="button" onClick={handleCheckEmailAndStartTimer}>
                  중복확인
                </S.CheckEmailBtn>
              </S.CheckEmailBlock>
              <S.VerificationCodeTitle>
                인증번호를 입력해주세요
              </S.VerificationCodeTitle>
              <S.VerificationCodeBlock>
                <S.VerificationCodeItem placeholder="1234" type="number" />
                <S.timerItem>{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</S.timerItem>
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