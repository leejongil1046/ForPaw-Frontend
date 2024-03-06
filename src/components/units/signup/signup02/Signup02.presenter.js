import * as S from "./Signup02.styles";
import SignupHeaderUI from "../SignupHeader/SignupHeader.presenter";
import Progress from "../component/Progress";

export default function SignUpUI02(props) {
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
                <S.SelectAddress value={props.selectedOption} onChange={props.handleChange}>
                  <option value="">직접입력</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="naver.com">naver.com</option>
                </S.SelectAddress>
              </S.EmailBlock>
              <S.CheckEmailBlock>
                {props.isEmailAvailable ? (
                  <S.AvailableEmail style={{ visibility: props.isVisible ? 'visible' : 'hidden' }}>
                    사용가능한 이메일입니다.
                  </S.AvailableEmail>
                ) : (
                  <S.AvailableEmail style={{ color: 'red', visibility: props.isVisible ? 'visible' : 'hidden' }}>사용 불가능한 이메일입니다.</S.AvailableEmail>
                )}

                <S.CheckEmailBtn type="button" onClick={props.handleCheckEmailAndStartTimer}>
                  중복확인
                </S.CheckEmailBtn>
              </S.CheckEmailBlock>
              <S.VerificationCodeTitle>
                인증번호를 입력해주세요
              </S.VerificationCodeTitle>
              <S.VerificationCodeBlock>
                <S.VerificationCodeItem placeholder="1234" type="number" />
                <S.timerItem>{Math.floor(props.timer / 60)}:{(props.timer % 60).toString().padStart(2, '0')}</S.timerItem>
              </S.VerificationCodeBlock>
              <S.RetryVerification>
                인증번호가 오지 않아요...
              </S.RetryVerification>
            </S.InfoBlock>
            <S.NextButtonBlock>
              <S.NextButtonItem onClick={props.navigateTo("/login/signup/03")}>
                다음
              </S.NextButtonItem>
            </S.NextButtonBlock>
          </S.InfoContainer>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}