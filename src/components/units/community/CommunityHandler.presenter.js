import * as S from "./CommunityHandler.styles";

export default function CommunityHandlerUI(props) {
  return (
    <>
      <S.WrapperCommunityHandler>
        <S.CommunityMenuContainer>
          <S.CommunityMenu
            onClick={props.navigateTo(props.paths.adoption)}
            active={props.isActive(props.paths.adoption)}
          >
            입양스토리
          </S.CommunityMenu>
          <S.CommunityMenu
            onClick={props.navigateTo(props.paths.fostering)}
            active={props.isActive(props.paths.fostering)}
            style={{ width: "136px" }}
          >
            임시보호 스토리
          </S.CommunityMenu>
          <S.CommunityMenu
            onClick={props.navigateTo(props.paths.questions)}
            active={props.isActive(props.paths.questions)}
          >
            궁금해요
          </S.CommunityMenu>
        </S.CommunityMenuContainer>
      </S.WrapperCommunityHandler>
    </>
  );
}
