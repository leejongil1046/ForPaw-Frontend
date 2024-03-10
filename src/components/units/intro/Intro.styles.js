import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
`;

export const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  background-color: white;
`

export const HeaderContainer = styled.div`
  width: 390px;
  height: 93px;
  background-color: white;
`;

export const HeadrtBlank = styled.div`
  width: 390px;
  height: 45px;
`
export const HeaderTitleBlock = styled.div`
  width: 390px;
  height: 48px;
`;

export const HeaderTitle = styled.p`
  width: 344px;
  height: 29px;
  color: #FF6636;
  font-weight: bold;
  font-size: 24px;
  margin-left: 23px;
`;

export const IntroContainer = styled.div`
  width: 390px;

  overflow-y: auto;
  bacground-color: white;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const IntroduceBrandMainBlock = styled.div`
  width: 390px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: brown;
  position: relative;
`;

export const IntroMainImageBlurBox = styled.div`
  width: 390px;
  height: 400px;
  background-color: white;
  opacity: 0.5;
  position: absolute;
`;

export const IntroMainTitleBlock = styled.div`
  width: 355px;
  height: 180px;
  position: absolute;
  margin-top: 180px;
  margin-left: 10px;
`; 

export const IntroMainTitle = styled.p`
  width: 355px;
  height: 66px;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
`;

export const IntroTItleContent = styled.p`
  width: 355px;
  height: 104px;
  font-size: 16px;
  line-height: 24px;
  position: absolute;
  top: 80px;
`;

export const IntroduceBrandBlock = styled.div`
  width: 344px;
  height: 325px;
  margin-top: 20px;
  margin-left: 23px;
`;  

export const IntroduceBrand = styled.p`
  width: 344px;
  height: 29px;
  font-size: 24px;
  font-weight: bold;
`;

export const IntroduceBrandDetail = styled.p`
  width: 344px;
  height: 72px;
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  margin-bottom: 16px;
  letter-spacing: -0.4px;
`;

export const ConcludingWords = styled.div`
  width: 344px;
  height: 266px;
  font-size: 28px;
  font-weight: bold;
  margin-top: 80px;
  margin-left: 23px;
`

/*버튼 css*/
export const NextButtonBlock = styled.div`
  width: 344px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 23px;
  position: fixed;
  bottom: 40px;
`;

export const NextButtonItem = styled.button`
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;