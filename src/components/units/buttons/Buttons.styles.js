import styled from "@emotion/styled";


export const SelectPhone = styled.select`
  width: 342px;
  height: 60px;
  border: 1px solid #F5F5F5;
  border-radius: 10px;
  background-color: #F5F5F5;
  padding-left: 20px
`;


export const BigButtonGray = styled.input`
  width: 342px;
  height: 60px;
  border: 1px solid #F5F5F5;
  border-radius: 10px;
  background-color: #F5F5F5;
  padding-left: 20px

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;


export const BigButtonOrange = styled.button`
  width: 342px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background-color: #FF6636;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  font-size: 18px;
  font-weight: bold;
`;

export const BigButtonBlack = styled.div`
  width: 342px;
  height: 60px;
  border-radius: 30px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  font-size: 18px;
  font-weight: bold;
`;

