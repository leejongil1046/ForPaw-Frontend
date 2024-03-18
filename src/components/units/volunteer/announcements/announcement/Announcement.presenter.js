import * as S from "./Announcement.styles";
import Image from "next/image";

export default function AnnouncementUI() {
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
          <S.Comments>
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
                  <S.UserName>닉네임</S.UserName>
                  <S.CommentTime>지역  4시간전</S.CommentTime>
                </S.CommentUser>
              </S.UserInfoItems>
              <S.CommentText>
                <S.Comment>댓글 내용을 입력해주세요.</S.Comment>
                <S.CommentMenuImg>
                  <Image
                    src="/images/header/menu_icon.svg"
                    alt="menu_icon"
                    width={30}
                    height={30}
                    priority={true}
                  />
                </S.CommentMenuImg>
              </S.CommentText>
              <S.LikeBlock>
                <S.LikeImg>
                  <Image
                    src="/images/volunteer/announcement/comment_like_icon.svg"
                    alt="comment_like_icon"
                    width={30}
                    height={30}
                  />
                </S.LikeImg>
                <S.LikeText>
                  좋아요
                </S.LikeText>
              </S.LikeBlock>
            </S.CommentBlock>
            <S.ReplyBlock>
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
                  <S.UserName>닉네임</S.UserName>
                  <S.CommentTime>지역  4시간전</S.CommentTime>
                </S.ReplyUser>
              </S.UserInfoItems>
              <S.CommentText>
                <S.Reply>댓글 내용을 입력해주세요.</S.Reply>
                <S.ReplyMenuImg>
                  <Image
                    src="/images/header/menu_icon.svg"
                    alt="menu_icon"
                    width={30}
                    height={30}
                    priority={true}
                  />
                </S.ReplyMenuImg>
              </S.CommentText>
              <S.LikeBlock>
                <S.LikeImg>
                  <Image
                    src="/images/volunteer/announcement/comment_active_like_icon.svg"
                    alt="comment_like_icon"
                    width={30}
                    height={30}
                  />
                </S.LikeImg>
                <S.LikeText>
                  좋아요
                </S.LikeText>
              </S.LikeBlock>
            </S.ReplyBlock>
          </S.Comments>
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
          <S.CommentInput placeholder="댓글을 입력해주세요!" type="text" />
          <S.AddComment>
            <S.ArrowLine />
            <S.ArrowBlock />
          </S.AddComment>
        </S.AddCommentBlock>
      </S.AddCommentContainer>
    </>
  )
}