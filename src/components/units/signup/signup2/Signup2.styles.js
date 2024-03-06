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
    width: 40%;
    height: 3px;
    appearance: none;
    
    &::-webkit-progress-bar {
      background-color: #DBDBDB; 
    }

    &::-webkit-progress-value {
      background-color: #FF6636; 
    }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 625px;
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

export const EmailTitle = styled.div`
    width: 100%;
    height: 21px;
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
    margin-left: 20px;
`;

export const EmailBlock = styled.div`
    width: 344px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
`;

export const EmailItem = styled.input`
    width: 144px;
    height: 60px;
    background-color: #FEF8F2;
    border: 1px solid transparent;
    border-radius: 10px;
    padding-left: 15px;

    :focus{
      border: 3px solid #F1C598;
      outline: none;
    }
    ::placeholder{
      color: #BEA597
    }
`;

export const address = styled.span`
    width: 30px;
    height: 60px;
    font-size: 30px;
    font-weight: 1000;
`;

export const SelectAddress = styled.select`
  width: 144px;
  height: 60px;
  background-color: #FEF8F2;
  border: 1px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  color: #BEA597;
  cursor: pointer;

  :focus{
    border: 3px solid #F1C598;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
  }

  option {
    background-color: #FEF8F2;
    color: black;
  }
`;

export const CheckEmailBlock = styled.div`
  width: 344px;
  height: 41px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-left: 20px;
`;

export const AvailableEmail = styled.p`
  width: 139px;
  height: 17px;
  font-size: 12px;
  color: #C6C6C6;
  visibility: hidden;
`;

export const CheckEmailBtn = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
`;

export const VerificationCodeTitle = styled.div`
  width: 100%;
  height: 21px;
  font-size: 18px;
  font-weight: 600;
  margin-top: 30px;
  margin-left: 20px;
`;

export const VerificationCodeBlock = styled.div`
  width: 342px;
  height: 60px;
  background-color: #FEF8F2;
  border: 1px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const VerificationCodeItem = styled.input`
  width: 150px;
  height: 60px;
  background-color: #FEF8F2;
  border: 1px solid transparent;
  border-radius: 10px;
  padding-left: 1px;

  :focus{
   
    outline: none;
  }
  
  ::placeholder{
    color: #BEA597
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const timerItem = styled.div`
  width: 40px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #FEF8F2;
  margin-right: 20px;
`;

export const RetryVerification = styled.div`
  width: 139px;
  height: 17px;
  font-size: 12px;
  color: #C6C6C6;
  margin-top: 20px;
  margin-left: 20px;
  cursor: pointer;
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