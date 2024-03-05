import * as S from "./Signup1.styles";
import SignupHeaderUI from "../SignupHeader/SignupHeader.presenter";
import { useRouter } from "next/router";
import Progress from "../component/Progress";

export default function SignUpUI() {
  const router = useRouter();

  const MoveSignup2Page = () => {
    router.push('/login/signup/2');
  };

  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeaderUI />
          <S.ProgressBarBlock>
            <S.ProgressBar value={Progress({ startValue: 0, max: 20, interval: 10})} max={20} />
          </S.ProgressBarBlock>
          <S.InfoContainer>
            <S.InfoBlock>
              <S.InfoTitleItem>
                이름을 입력해주세요
              </S.InfoTitleItem>
              <S.InfoNameItem type="text" placeholder="홍길동" />
            </S.InfoBlock>
            <S.NextButtonBlock>
              <S.NextButtonItem onClick={MoveSignup2Page}>
                다음
              </S.NextButtonItem>
            </S.NextButtonBlock>
          </S.InfoContainer>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}