import SignupHeaderUI from "../SignupHeader/SignupHeader.presenter";
import * as S from "./Signup3.styles";
import { useEffect, useState } from 'react';
import Progress from "../component/Progress";


export default function SignUpUI() {

  ///// select의 값을 찾아내는 함수
  // const [selectedOption, setSelectedOption] = useState("");

  // const handleChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };

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
              <S.SetPassWord placeholder="비밀번호" />
            </S.InfoContentsBlock>
            <S.InfoFormPassWord>
              특수문자를 포함한 10자리를 입력해주세요
            </S.InfoFormPassWord>
            <S.InfoContentsBlock>
              <S.CheckPassWordTitle>비밀번호 확인</S.CheckPassWordTitle>
              <S.CheckPassWord placeholder="비밀번호 확인"/>
            </S.InfoContentsBlock>
            <S.PassWordCorrect>
              비밀번호가 일치합니다.
            </S.PassWordCorrect>
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