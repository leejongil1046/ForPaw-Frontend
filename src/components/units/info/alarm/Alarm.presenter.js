import * as S from "./Alarm.styles";
import Image from "next/image";

export default function AlarmUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/left_arrow_icon.png"
              alt="left_arrow_icon"
              width={15}
              height={25}
              onClick={props.navigateBack}
            />
            <S.Title>알림</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperAlarm></S.WrapperAlarm>
    </>
  );
}
