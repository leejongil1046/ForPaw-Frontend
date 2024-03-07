import * as S from "./Signup04.styles";
import SignupHeaderUI from "../SignupHeader/SignupHeader.presenter";
import Progress from "../component/Progress";

export default function SignUpUI04() {
  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeaderUI />
          <S.ProgressBarBlock>
            <S.ProgressBar value={Progress({ startValue: 75, max: 100, interval: 10 })} max={100} />
          </S.ProgressBarBlock>
          <S.InfoBlock>
            <S.InfoTitleItem>프로필을 설정해주세요</S.InfoTitleItem>
            <S.InfoContentProfileBlock>
              <S.InfoTitleProfile>프로필 사진</S.InfoTitleProfile>
            </S.InfoContentProfileBlock>
          </S.InfoBlock>
          <S.NextButtonBlock>
            <S.NextButtonItem>
              완료
            </S.NextButtonItem>
          </S.NextButtonBlock>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}