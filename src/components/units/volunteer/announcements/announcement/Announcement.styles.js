import styled from "@emotion/styled";

export const WrapperContents = styled.div`
  width: 390px;
  height: calc(100vh - 179px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-y: auto;
  background-color: white;

  /* 스크롤 바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox */
`;

export const AnnouncementContainer = styled.div`
  width: 390px;
  height: 430px;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`;

export const AnnouncementTitle = styled.div`
  width: 340px;
  height: 72px;
  font-size: 28px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: -0.8px;

  margin-bottom: 16px;
`;

export const AnnouncementImg = styled.div`
  width: 390px;
  height: 201px;
`;

export const AnnouncementText = styled.div`
  width: 343px;
  height: 96px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.5px;

  margin-top: 24px;
`;

export const Boundary = styled.div`
  width: 390px;
  height: 20px;
  background-color: #FDFAF7;
  flex-shrink: 0;
`;

export const CommentContainer = styled.div`
  width: 390px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`;

export const Comments = styled.div`
  margin-top: 25px;
  width: 344px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  flex-shrink: 0;
`;

export const CommentBlock = styled.div`
  width: 100%; /*344px*/
  height: auto;
`;

export const UserInfoItems = styled.div`
  width: 100%; /*344px*/
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const UserImgbox = styled.div`
  width: 40px;
  height: 40px;
`;

export const CommentUser = styled.div`
  width: 296px;
  height: 40px;
  margin-left: 8px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const UserName = styled.div`
  width: 304px
  height: 20px;
  font-size: 14px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const CommentTime = styled.div`
  width: 304px;
  height: 20px;
  font-size: 12px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const CommentText = styled.div`
  width: 100%; /*344px*/
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 0;
`;

export const Comment = styled.p`
  width: 230px;
  height: auto;
  font-size: 16px;
  font-weight: 500;
  word-wrap: break-word;
  letter-spacing: -0.5px;

  margin-left: 48px;
  padding-top: 6px;
`;

export const CommentMenuImg = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 36px;
  cursor: pointer;
`;

export const LikeBlock = styled.div`
  margin-top: 3px;
  width: 100%; /*344px*/
  height: 30px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`;

export const LikeImg = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 48px;
  cursor: pointer;
`;

export const LikeText = styled.p`
  width: 31px;
  height: 14px;
  font-size: 12px;
  letter-spacing: -0.4px;
  margin-left: 5px;

  padding-top: 3px;
`;

export const ReplyBlock = styled.div`
  margin-top: 24px;
  
  width: 296px;
  height: 103px;
`;

export const ReplyUser = styled.div`
  width: 256px;
  height: 40px;
  padding-left: 8px;
`;

export const Reply = styled.p`
  width: 190px;
  height: auto;
  font-size: 16px;
  font-weight: 500;
  word-wrap: break-word;
  letter-spacing: -0.5px;

  margin-left: 48px;
  padding-top: 6px;
`;

export const ReplyMenuImg = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 28px;
  cursor: pointer;
`;

/*공간을 만들어주는 div*/
export const Blank = styled.div`
  width: 390px;
  height: 40px;
  flex-shrink: 0;
`;

/*답글을 쓰는 컨테이너*/
export const AddCommentContainer = styled.div`
  width: 390px;
  height: 84px;
  margin: 0 auto;
  background-color: white;
  border-top: 1px solid #DBDBDB;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AddCommentBlock = styled.div`
  width: 344px;
  height: 44px;
  margin-top: 8px;

  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const OpenMenu = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #FF6636;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommentInput = styled.input`
  width: 232px;
  height: 44px;
  border: none;
  border-radius: 22px;
  background-color: #F6F6F6;
  padding-left: 15px;

  :focus{
    outline: none;
  }

  ::placeholder{
    color: #888888;
    font-size: 14px;
  }
`;

export const AddComment = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #240D05;
  cursor: pointer;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ArrowBlock = styled.div`
  width: 13px;
  height: 13px;
  border-top: 2px solid white;
  border-right: 2px solid white;
  transform: rotate(45deg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ArrowLine = styled.div`
  width: 15px;
  height: 2px;
  border: 1px solid white;
  background-color: white;

  position: absolute;
  right: 15px;
`;