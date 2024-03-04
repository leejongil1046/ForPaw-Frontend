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
  background: #DBDBDB;
  display: flex;
  flex-direction: column;
`;

export const ProgressBar = styled.progress`
    width: 20%;
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
`

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

export const InfoNameItem = styled.input`
  width: 342px;
  height: 60px;
  background-color: #FEF8F2;
  border: 1px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  margin-top: 25px;
  margin-left: 20px;

  :focus{
    border: 3px solid #F1C598;
    outline: none;
  }
  ::placeholder{
    color: #F1C598  
  }
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


