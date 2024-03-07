import * as S from "./PasswordEdit.styles";
import Image from "next/image";

export default function PasswordEditUI(props) {
  return (
    <>
      <S.WrapperHeader>
        <S.Header>
          <S.LeftArrowTitleContainer>
            <Image
              src="/images/header/arrow_left_icon.svg"
              alt="arrow_left_icon"
              width={15}
              height={25}
              onClick={props.navigateBack}
            />
            <S.Title>비밀번호 변경</S.Title>
          </S.LeftArrowTitleContainer>
        </S.Header>
      </S.WrapperHeader>
      <S.WrapperPasswordEdit>
        <S.PasswordEditContainer>
          <S.EditTextBlock>
            <S.EditTitle>현재 비밀번호</S.EditTitle>
          </S.EditTextBlock>
          <S.PasswordInput type="text" placeholder="현재 비밀번호" />
          <S.ConfrimMessageBlock>
            <S.ConfirmMessage>비밀번호가 확인되었습니다</S.ConfirmMessage>
          </S.ConfrimMessageBlock>
        </S.PasswordEditContainer>
        <S.PasswordEditContainer>
          <S.EditTextBlock>
            <S.EditTitle>새 비밀번호</S.EditTitle>
          </S.EditTextBlock>
          <S.PasswordInput type="text" placeholder="새 비밀번호" />
          <S.PasswordInput type="text" placeholder="새 비밀번호 확인" />
          <S.ConfrimMessageBlock>
            <S.ConfirmMessage>비밀번호가 확인되었습니다</S.ConfirmMessage>
          </S.ConfrimMessageBlock>
        </S.PasswordEditContainer>
        <S.PasswordEditButton>비밀번호 변경</S.PasswordEditButton>
      </S.WrapperPasswordEdit>
    </>
  );
}
