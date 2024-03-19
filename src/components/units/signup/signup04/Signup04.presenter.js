import * as S from "./Signup04.styles";
import SignupHeader from "../SignupHeader/SignupHeader.container";
import Progress from "../component/Progress";
import Image from "next/image";

export default function SignUpUI04(props) {
  return (
    <>
      <S.WrapperContainer>
        <S.Container>
          <SignupHeader />
          <S.ProgressBarBlock>
            <S.ProgressBar value={Progress({ startValue: 75, max: 100, interval: 10 })} max={100} />
          </S.ProgressBarBlock>
          <S.InfoContainer>
            <S.InfoBlock>
              <S.InfoTitleItem>프로필을 설정해주세요</S.InfoTitleItem>
              <S.InfoContentProfileContainer>
                <S.InfoTitleProfile>프로필 사진</S.InfoTitleProfile>
                <S.SetProfileBlock>
                  <S.SetProfileItem>
                    <Image
                      src="/images/signup/add_profile.svg"
                      alt="add_profile"
                      width={28}
                      height={28}
                    />
                  </S.SetProfileItem>
                </S.SetProfileBlock>
              </S.InfoContentProfileContainer>
              <S.InfoNickNameContainer>
                <S.InfoTitleNickName>닉네임</S.InfoTitleNickName>
                <S.SetNickName placeholder="닉네임" type="text" />
              </S.InfoNickNameContainer>
              <S.CheckNickNameBlock>
                <S.AvailableNickName>사용가능한 닉네임입니다.</S.AvailableNickName>
                <S.CheckNickNameBtn>중복확인</S.CheckNickNameBtn>
              </S.CheckNickNameBlock>
              <S.InfoActiveLocationContainer>
                <S.InfoTitleActiveLocation>활동 지역 선택</S.InfoTitleActiveLocation>
                <S.SelectCity>
                  <option value="">시/도 선택</option>
                </S.SelectCity>
                <S.SelectArrow>
                  <Image
                    src="/images/info/select_arrow_icon.svg"
                    alt="select_arrow_icon"
                    width={22}
                    height={12}
                  />
                </S.SelectArrow>
                <S.SelectRegionBlock>
                  <S.SelectRegionItem1>
                    <option value="">구/군/시</option>
                  </S.SelectRegionItem1>
                  <S.SelectArrow style={{top: "123px"}}>
                  <Image
                    src="/images/info/select_arrow_icon.svg"
                    alt="select_arrow_icon"
                    width={22}
                    height={12}
                  />
                </S.SelectArrow>
                  <S.SelectRegionItem2>
                    <option value="">동/읍/면</option>
                  </S.SelectRegionItem2>
                  <S.SelectArrow style={{left: "120px", top: "123px"}}>
                  <Image
                    src="/images/info/select_arrow_icon.svg"
                    alt="select_arrow_icon"
                    width={22}
                    height={12}
                  />
                </S.SelectArrow>
                </S.SelectRegionBlock>
              </S.InfoActiveLocationContainer>
              <S.NextButtonBlock>
                <S.NextButtonItem onClick={props.navigateTo('/login/signup/complete')}>
                  완료
                </S.NextButtonItem>
              </S.NextButtonBlock>
            </S.InfoBlock>
          </S.InfoContainer>
        </S.Container>
      </S.WrapperContainer>
    </>
  )
}