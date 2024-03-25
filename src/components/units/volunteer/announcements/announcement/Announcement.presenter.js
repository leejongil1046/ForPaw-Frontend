import * as S from "./Announcement.styles";
import Image from "next/image";

export default function AnnouncementUI(props) {
  return (
    <>
      <S.WrapperContents>
        <S.AnnouncementContainer>
          <S.AnnouncementTitle>
            공지사항 타이틀을 입력해주세요 최대 두줄 정도로 넘으면..처리
          </S.AnnouncementTitle>
          <S.AnnouncementImg>
            <Image
              src="/images/volunteer/announcement/announcement_img.svg"
              alt="announcement_img"
              width={390}
              height={201}
              priority={true}
            />
          </S.AnnouncementImg>
          <S.AnnouncementText>
            소년은 개울가에서 소녀를 보자 곧 윤 초시네 증손녀 딸<br />
            이라는 걸 알 수 있었다. 그런데, 어제까지는 개울 기슭에서 하더니, 오늘은 징검다리 한가운데 앉아서 하고 있다.<br />
            소녀는 소년이 개울둑에 앉아 있는 걸 아는지 모르는지
          </S.AnnouncementText>
        </S.AnnouncementContainer>
        <S.Boundary />
        <S.CommentContainer>
          {props.comments.map((comment, index) => (
            <S.Comments key={comment.id}>
              <S.CommentBlock>
                <S.UserInfoItems>
                  <S.UserImgbox>
                    <Image
                      src="/images/volunteer/announcement/user_icon.svg"
                      alt="member_icon"
                      width={40}
                      height={40}
                      priority={true}
                    />
                  </S.UserImgbox>
                  <S.CommentUser>
                    <S.UserName>{comment.name}</S.UserName>
                    <S.CommentTime>{comment.region} {comment.hours}</S.CommentTime>
                  </S.CommentUser>
                </S.UserInfoItems>
                <S.CommentText>
                  <S.Comment>{comment.text}</S.Comment>
                  <S.CommentMenuImg onClick={() => props.handleCommentMenuClick(comment.id)}>
                    <Image
                      onClick={props.handleOutReplyMenu}
                      src="/images/header/menu_icon.svg"
                      alt="menu_icon"
                      width={30}
                      height={30}
                      priority={true}
                    />
                    <S.MenuBlock
                      style={{ visibility: props.isCommentMenuClicked && props.clickedCommentID === comment.id ? "visible" : "hidden" }}
                    >
                      <S.Edit>수정하기</S.Edit>
                      <S.Delete>삭제하기</S.Delete>
                    </S.MenuBlock>
                  </S.CommentMenuImg>
                </S.CommentText>
                <S.LikeBlock>
                  <props.LikeImage initialSrc="/images/volunteer/announcement/comment_like_icon.svg" alt="comment_like_icon" />
                  <S.LikeText>
                    좋아요
                  </S.LikeText>
                  <S.AddReplyText onClick={() => props.handleJudegeReplyBtn(comment.id, null)}>
                    답글 달기
                  </S.AddReplyText>
                </S.LikeBlock>
              </S.CommentBlock>
              {comment.replies.map((reply, replyIndex) => (
                <S.ReplyBlock key={reply.id}>
                  <S.UserInfoItems>
                    <S.UserImgbox>
                      <Image
                        src="/images/volunteer/announcement/user_icon.svg"
                        alt="member_icon"
                        width={40}
                        height={40}
                        priority={true}
                      />
                    </S.UserImgbox>
                    <S.ReplyUser>
                      <S.UserName>{reply.name}</S.UserName>
                      <S.CommentTime>{reply.region}  {reply.hours}</S.CommentTime>
                    </S.ReplyUser>
                  </S.UserInfoItems>
                  <S.CommentText>
                    <S.Reply>{reply.text}</S.Reply>
                    <S.ReplyMenuImg onClick={() => props.handleReplyMenuClick(comment.id, reply.id)}>
                      <Image
                        onClick={props.handleOutCommentMenu}
                        src="/images/header/menu_icon.svg"
                        alt="menu_icon"
                        width={30}
                        height={30}
                        priority={true}
                      />
                      <S.MenuBlock
                        style={{ visibility: props.isReplyMenuClicked && props.clickedReplyID === reply.id && props.selectedCommentID === comment.id ? "visible" : "hidden" }}
                      >
                        <S.Edit>수정하기</S.Edit>
                        <S.Delete>삭제하기</S.Delete>
                      </S.MenuBlock>
                    </S.ReplyMenuImg>
                  </S.CommentText>
                  <S.LikeBlock>
                    <props.LikeImage initialSrc="/images/volunteer/announcement/comment_like_icon.svg" alt="comment_like_icon" />
                    <S.LikeText>
                      좋아요
                    </S.LikeText>
                  </S.LikeBlock>
                </S.ReplyBlock>
              ))}
            </S.Comments>
          ))}
        </S.CommentContainer>
        <S.Blank />
      </S.WrapperContents>
      <S.AddCommentContainer>
        <S.AddCommentBlock>
          <S.OpenMenu>
            <Image
              src="/images/volunteer/announcement/open_menu.svg"
              alt="open_menu"
              width={20}
              height={20}
              priority={true}
            />
          </S.OpenMenu>
          <S.div style={{ zIndex: props.isClickedReply ? "1" : "2" }}>
            <S.CommentInput
              autoFocus
              placeholder="댓글을 입력해주세요"
              type="text"
              value={props.newComment}
              onKeyDown={props.handleCommentSubmit}
              onChange={props.handleCommentValue}
            />
          </S.div>
          <S.div style={{ zIndex: props.isClickedReply ? "2" : "1" }}>
            <S.ReplyInput
              autoFocus
              placeholder="답글을 입력해주세요"
              type="text"
              value={props.newReply}
              onKeyDown={(e) => props.handleReplySubmit(e)}
              onChange={props.handleReplyValue}
            />
          </S.div>
          <S.AddComment onClick={props.activeBtn}>
            <S.ArrowLine />
            <S.ArrowBlock />
          </S.AddComment>
        </S.AddCommentBlock>
      </S.AddCommentContainer>
    </>
  )
}