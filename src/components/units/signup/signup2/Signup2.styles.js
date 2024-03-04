import styled from "@emotion/styled";

export const WrapperContainer = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
`;

export const ProgressBarBlock = styled.div`
  width: 100%;
  height: 3px;
  background-color: #DBDBDB;
  display: flex;
  flex-direction: column;
`;

export const ProgressBar = styled.div`
  width: 40%;
  height: 3px;
  background-color: #FF6636;
  animation: progress 1s linear;

  @keyframes progress{
    0% {
      width: 20%;
    }
    100%{
      width: 40%;
    }
  }
`;