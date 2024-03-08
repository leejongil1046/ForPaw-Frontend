import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
`;

export const Container = styled.div`
  width: 100%;
  height: 844px;
  background-color: white;
`;

export const WraaperLogoAndImage = styled.div`
  width: 100%;
  height: 134px;
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const WrapperLogo = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const WraperLoginContents = styled.div`
  margin-top: 40px;
  width: 100%;
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:10px
`;

export const IdAndPassWordInput = styled.input`
  width: 342px;
  height: 60px;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  border-radius: 10px;
  padding-left: 15px;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
  }
`;

export const LoginButton = styled.button`
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export const SignUpBtn = styled.button`
  background-color: white;
  border: 2px solid #FF6636;
  border-radius: 30px;
  font-size: 20px;
  color: black;
  cursor: pointer;
`;

export const OrContainer = styled.div`
  width: 100%;
  height:50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const KakaoButton = styled.button`
  background-color: #FFEB04;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  cursor: pointer;
`
export const NaverButton = styled.button`
  background-color: #00B63B;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  color: white;
  cursor: pointer;
`

export const AccoutAndInfoContainer = styled.div`
  margin-top:20px;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:10px
`;

export const AccoutFind = styled.div`
  width: 132px;
  height: 17px;
  color: #A1A1A1;
  border-bottom: 1px solid #A1A1A1; 
  font-size: 12px;
  cursor: pointer;
`;

export const InfoPaw= styled.div`
  width: 158px;
  height: 17px;
  color: #A1A1A1;
  font-size: 12px;
  cursor: pointer;
`;