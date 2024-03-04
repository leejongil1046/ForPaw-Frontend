import * as S from "./Signup2.styles";
import SignupHeaderUI from "../SignupHeader.presenter";

export default function SignUpUI(){
  return(
    <>
      <S.WrapperContainer>
        <SignupHeaderUI />
        <S.ProgressBarBlock>
          <S.ProgressBar />
        </S.ProgressBarBlock>
      </S.WrapperContainer>
    </>
  )
}