import * as S from "./Signup.styles";
import SignupHeaderUI from "../SignupHeader.presenter";

export default function SignUpUI(){
  return(
    <>
      <S.WrapperContainer>
        <SignupHeaderUI />
        <S.ProgreesBar></S.ProgreesBar>
      </S.WrapperContainer>
    </>
  )
}