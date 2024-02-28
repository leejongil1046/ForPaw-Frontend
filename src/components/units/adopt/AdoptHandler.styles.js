import styled from "@emotion/styled";

export const WrapperAdoptHandler = styled.div`
  width: 390px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

export const AdoptTextContainer = styled.div`
  width: 270px;
  height: 88px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 70px;
`;

export const AdoptText = styled.h1`
  font-size: 32px;
`;

export const AdoptMenuContainer = styled.div`
  width: 390px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
`;

export const AdoptMenu = styled.div`
  width: 104px;
  height: 50px;
  font-size: 20px;
  color: #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;
  color: ${(props) => (props.active ? "black" : "#bdbdbd")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  border-bottom: ${(props) => (props.active ? "2px solid #ff6636" : "none")};
`;
