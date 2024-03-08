import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
`;

export const Container = styled.div`
  width: 100%;
  height: 912px;
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
    width: 100%;
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
  height: 540px;
`;

export const InfoTitleItem = styled.div`
  width: 100%;
  height: 29px;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
`;

export const InfoContentProfileContainer = styled.div`
  width: 344px;
  height: 132px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const InfoTitleProfile = styled.div`
  width: 100%;
  height: 24px;
  font-size: 18px;
  font-weight: 600;
`;

export const SetProfileBlock = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 8px;
  cursor: pointer;
`;

export const SetProfileItem = styled.div`
  width: 100px;
  height: 100px;
  background-color: #FEF8F2;
  border-radius: 10px;
  display: flex;
  fiex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoNickNameContainer = styled.div`
  width: 342px;
  height: 90px;
  margin-top: 20px;
  margin-left: 20px;
`;

export const InfoTitleNickName = styled.div`
  width: 100%;
  height: 24px;
  font-size: 18px;
  font-weight: 600; 
`;

export const SetNickName = styled.input`
  margin-top: 8px;
  width: 342px;
  height: 60px;
  border-radius: 10px;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  padding-left: 15px;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
  }
`;

export const CheckNickNameBlock = styled.div`
  width: 344px;
  height: 41px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-left: 20px;
`;

export const AvailableNickName = styled.p`
  width: 167px;
  height: 17px;
  font-size: 12px;
  color: #C6C6C6;
  visibility: hidden;
`;

export const CheckNickNameBtn = styled.button`
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

export const InfoActiveLocationContainer = styled.div`
  width: 344px;
  height: 160px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
`; 

export const InfoTitleActiveLocation = styled.div`
  width: 100%;
  height: 24px;
  font-size: 18px;
  font-weight: 600; 
`;

export const SelectCity = styled.select`
  width: 100%;
  height: 60px;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  color: #BEA597;
  cursor: pointer;
  margin-top: 8px;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
  }

  option {
    background-color: #FEF8F2;
    color: black;
  }
`

export const SelectRegionBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SelectRegionItem1 = styled.select`
  margin-top: 8px;
  width: 164px;
  height: 100%;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  color: #BEA597;
  cursor: pointer;
  margin-top: 8px;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
  }

  option {
    background-color: #FEF8F2;
    color: black;
  }
`
export const SelectRegionItem2 = styled.select`
  margin-top: 8px;
  width: 164px;
  height: 100%;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  border-radius: 10px;
  padding-left: 15px;
  color: #BEA597;
  cursor: pointer;
  margin-top: 8px;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
  }

  option {
    background-color: #FEF8F2;
    color: black;
  }
`

/*버튼 css */
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
