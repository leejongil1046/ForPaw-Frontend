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

export const ProgressBarBlock = styled.div`
  width: 100%;
  height: 3px;
  background-color: #DBDBDB;
  display: flex;
  flex-direction: column;
`;

export const ProgressBar = styled.progress`
    width: 80%;
    height: 3px;
    appearance: none;
    
    &::-webkit-progress-bar {
      background-color: #DBDBDB; 
    }

    &::-webkit-progress-value {
      background-color: #FF6636; 
    }
`;

export const InfoBlock = styled.div`
  width: 100%;
  height: 530px;
`;

export const InfoTitleItem = styled.div`
  width: 100%;
  height: 29px;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
`;

export const InfoContentsBlock = styled.div`
  width: 344px;
  height: 90px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const InfoTitleEmail = styled.div`
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
`;

export const CheckEmail = styled.div`
  width: 100%;
  height: 60px;
  background-color: #FEF8F2;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ShowEmail = styled.div`
  width: 300px;
  height: 20px;
  color: #BEA597;
`;

export const InfoTitlePassWord = styled.div`
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
`;

export const SetPassWord = styled.input`
  width: 100%;
  height: 60px;
  background-color: #FEF8F2;
  border-radius: 10px;
  border: 1px solid transparent;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  :focus{
    border: 3px solid #F1C598;
    outline: none;
  }
  ::placeholder{
    color: #BEA597
  }
`;

export const InfoFormPassWord = styled.p`
  width: 300px;
  height:17px;
  color: #C6C6C6;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 20px;
`;

export const CheckPassWordTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
`;

export const CheckPassWord = styled.input`
  width: 100%;
  height: 60px;
  background-color: #FEF8F2;
  border-radius: 10px;
  border: 1px solid transparent;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  :focus{
    border: 3px solid #F1C598;
    outline: none;
  }
  ::placeholder{
    color: #BEA597
  }
`;

export const PassWordCorrect = styled.p`
  width: 300px;
  height:17px;
  color: #9AC8FF;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 20px;
`;

export const NextButtonBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NextButtonItem = styled.button`
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;
