import * as S from "./Signup01.styles";
import SignupHeader from "../SignupHeader/SignupHeader.container";
import Progress from "../component/Progress";

export default function SignUpUI01(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeader />
          <S.ProgressBarBlock>
            <S.ProgressBar value={Progress({ startValue: 0, max: 20, interval: 10 })} max={20} />
          </S.ProgressBarBlock>
          <S.InfoContainer>
            <S.InfoBlock>
              <S.InfoTitleItem>
                이름을 입력해주세요
              </S.InfoTitleItem>
              <S.InfoNameItem type="text" placeholder="홍길동" />
              <S.NextButtonBlock>
                <S.NextButtonItem onClick={props.navigateTo("/login/signup/02")}>
                  다음
                </S.NextButtonItem>
              </S.NextButtonBlock>
            </S.InfoBlock>
          </S.InfoContainer>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}
