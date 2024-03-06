import SignupHeaderUI from "../SignupHeader/SignupHeader.presenter";
import * as S from "./Signup3.styles";
import { useEffect, useState } from 'react';
import Progress from "../component/Progress";
import { useRouter } from "next/router";


export default function SignUpUI() {

  const router = useRouter();

  const MoveSignup4Page = () => {
    router.push('/login/signup')
  }

  const [password, setPassword] = useState(""); // 비밀번호 상태 추가
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인 상태 추가
  const [isPasswordMatch, setIsPasswordMatch] = useState(false); // 비밀번호 일치 여부 상태 추가

  // 비밀번호 입력 시 상태 업데이트
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    setIsPasswordMatch(confirmPasswordValue === password); // 비밀번호 확인 값과 비밀번호 값 비교하여 일치 여부 업데이트
  };


  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeaderUI />
          <S.ProgressBarBlock>
            <S.ProgressBar value={Progress({ startValue: 40, max: 80, interval: 10 })} max={80} />
          </S.ProgressBarBlock>
          <S.InfoBlock>
            <S.InfoTitleItem>비밀번호를 설정해주세요</S.InfoTitleItem>
            <S.InfoContentsBlock>
              <S.InfoTitleEmail>이메일</S.InfoTitleEmail>
              <S.CheckEmail>
                <S.ShowEmail>sadadaw@gmail.com</S.ShowEmail>
              </S.CheckEmail>
            </S.InfoContentsBlock>
            <S.InfoContentsBlock>
              <S.InfoTitlePassWord>비밀번호</S.InfoTitlePassWord>
              <S.SetPassWord
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="비밀번호"
              />
            </S.InfoContentsBlock>
            <S.InfoFormPassWord>
              특수문자를 포함한 10자리를 입력해주세요
            </S.InfoFormPassWord>
            <S.InfoContentsBlock>
              <S.CheckPassWordTitle>비밀번호 확인</S.CheckPassWordTitle>
              <S.CheckPassWord
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="비밀번호 확인"
              />
            </S.InfoContentsBlock>
            {isPasswordMatch ? (
              <S.PassWordCorrect>비밀번호가 일치합니다.</S.PassWordCorrect>
            ) : (
              <S.PassWordCorrect style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</S.PassWordCorrect>
            )}
          </S.InfoBlock>
          <S.NextButtonBlock>
            <S.NextButtonItem>
              다음
            </S.NextButtonItem>
          </S.NextButtonBlock>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}