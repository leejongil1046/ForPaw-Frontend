import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: 749px;
  margin: 0 auto;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentsContainer = styled.div`
  width: 344px;
  height: 693px;
`;

export const TitleBlock = styled.div`
  width: 100%;
  height: 24px;
  margin-top: 24px;

  font-size: 20px;
  font-weight: bold;
`;

export const Title = styled.p`
  width: 109px;
  height: 24px;
  letter-spacing: -0.5px;
`;

export const AddMainImg = styled.div`
  margin-top: 12px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;

  background-color: #FEF8F2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputVolunteerName = styled.input`
  width: 342px;
  height: 60px;
  border-radius: 10px;
  background-color: #FEF8F2;
  border: 2px solid transparent;
  padding-left: 15px;
  margin-top: 12px;

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }
  ::placeholder{
    color: #BEA597;
    font-size: 16px;
  }
`;

export const BigSelectWrap = styled.div`
  margin-top: 12px;
  width: 344px;
  height: 60px;
  background-color: #FEF8F2;
  border-radius: 10px;
  position: relative;
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  font-size: 16px;
  border-radius: 10px;
  color: #BEA597;
  cursor: pointer;
  padding-left: 15px;
  position: absolute;
  border: 2px solid transparent;

  z-index: 1;
 

  :focus{
    border: 2px solid #BEA597;
    outline: none;
  }

  option {
    background-color: #FEF8F2;
    color: black;
  }

  ::-ms-expand{
    display:none;/*for IE10,11*/
  }

  -webkit-appearance: none; /* 크롬, 사파리 */
  -moz-appearance: none; /* 파이어폭스 */
  appearance: none; /* 표준 */
`;

export const Arrow1Img = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 300px;
  top: 19px;
  
  z-index: 0;
`;

export const SmallSelectWrap = styled.div`
  margin-top: 8px;
  width: 344px;
  height: 60px;
  
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const SmallSelectBlock = styled.div`
  width: 164px;
  height: 60px;
  background-color: #FEF8F2;
  border-radius: 10px;
  position: relative;

  z-index: 1;
`;

export const Arrow2Img = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 130px;
  top: 19px;
  
  z-index: 0;
`;

/*버튼 css */
export const NextButtonBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 73px;
`;

export const NextButtonItem = styled.button`
  background-color: #FF6636;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

