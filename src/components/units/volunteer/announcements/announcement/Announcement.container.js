import LikeImage from './component/LikeImage';
import AnnouncementUI from './Announcement.presenter';
import VolunteerDetailHeader from '../../detail/volunteerDetailHeader/VolunteerDetailHeader.container';
import { useEffect, useState } from 'react';

export default function Announcement() {

  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isCommentMenuClicked, setIsCommentMenuClicked] = useState(false);
  const [clickedCommentID, setClickedCommentID] = useState(null); // 클릭된 댓글의 ID를 관리합니다.
  const [isReplyMenuClicked, setIsReplyMenuClicked] = useState(false);
  const [selectedCommentID, setSelectedCommentID] = useState(null); // 클릭된 댓글의 ID를 관리합니다.
  const [clickedReplyID, setClickedReplyID] = useState(null); // 클릭된 답글의 ID를 관리한다. 메뉴보이게끔 하는 용도

  //매뉴를 눌렀을 때 메뉴창이 나오도록 하는 기능
  const handleMenuClick = () => {
    setIsMenuClicked(true);
  };
  //메뉴 이외에 곳을 눌렀을 때 메뉴창이 꺼지게 하는 용도
  const handleOutsideMenuClick = () => {
    setIsMenuClicked(false);
  };

  // 코멘트 메뉴 클릭 시 보이게끔 true로 설정
  const handleCommentMenuClick = (commentID) => {
    setIsCommentMenuClicked(true);
    setIsReplyMenuClicked(false);
    setClickedCommentID(commentID); // 클릭된 댓글의 ID를 설정합니다.
    setSelectedCommentID(commentID); 
  };

  const handleReplyMenuClick = (commentID, replyID) => {
    setIsCommentMenuClicked(false);
    setIsReplyMenuClicked(true);
    setClickedReplyID(replyID);
    setSelectedCommentID(commentID); 
  }
  
  const handleOutCommentMenuClick = () => {
    setIsCommentMenuClicked(false);
    setIsReplyMenuClicked(false);
  }

  //input에서 입력한 값을 배열로서 받을 것이고 presenter에서 map 함수를 이용하여 사용할 것이다.
  const [comments, setComments] = useState([]);
  //input안의 내용을 onChange로 받아줄 함수이다.
  const [newComment, setNewComment] = useState('');
  const [newReply, setNewReply] = useState('');
  const [targetCommentID, setTargetCommentID] = useState(null); // 추가된 부분
  //답글달기를 클릭한 유저닉네임을 판단하는 방법
  const [name, setName] = useState('');

  //Comment input값을 받아오는 기능
  const handleCommentValue = (e) => {
    setNewComment(e.target.value)
  };

  //Reply Input을 받아오는 기능
  const handleReplyValue = (e) => {
    setNewReply(e.target.value);
  };

  //답글달기를 누르면 Input의 z-index를 변경하는 변수
  const [isClickedReply, setIsClickedReply] = useState(false);

  //답글달기를 눌렀는지 판단하는 기능 
  const handleJudegeReplyBtn = (commentID, userName) => {
    setIsCommentMenuClicked(false);
    setIsClickedReply(true);
    setNewComment('');
    setNewReply('');
    setTargetCommentID(commentID)
    setName(userName)
  }

  const handleJudegeXClick = () => {
    setIsClickedReply(false);
    setIsCommentMenuClicked(false);
    setIsReplyMenuClicked(false);
  }

  //input창에 enter을 입력하면 나오게 하는 것
  const handleCommentSubmit = (e) => {
    if (e.key === 'Enter' && newComment.trim() !== "") {
      const newCommentObject = { //배열에 추가되는 정보들
        id: comments.length + 1,
        name: `닉네임${comments.length + 1}`,
        region: '지역',
        hours: '몇 시간전',
        text: newComment,
        replies: []
      };

      setComments([...comments, newCommentObject]);
      setNewComment('');
    }
  }

  const handleReplySubmit = (e) => {
    if (e.key === 'Enter' && newReply.trim() !== "") {
      const updatedComments = comments.map(comment => {
        if (comment.id === targetCommentID) { // 이부분을 확실히 해줘야함
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: comment.replies.length + 1,
                name: `답글 닉네임${comment.replies.length + 1}`,
                region: '지역',
                hours: '몇 시간전',
                text: newReply
              }
            ]
          };
        } else {
          return comment;
        }
      });

      setComments(updatedComments);
      setNewReply('');
    }
  };

  //버튼을 눌렸을 때 댓글을 달수 있도록 해주는 함수
  const activeBtn = () => {
    if (isClickedReply == false) {
      const newCommentObject = { //배열에 추가되는 정보들
        id: comments.length + 1,
        name: `닉네임${comments.length + 1}`,
        region: '지역',
        hours: '몇 시간전',
        text: newComment,
        replies: []
      };

      setComments([...comments, newCommentObject]);
      setNewComment('');
    } else if (isClickedReply) {
      const updatedComments = comments.map(comment => {
        if (comment.id === targetCommentID) { // 이부분을 확실히 해줘야함
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: comment.replies.length + 1,
                name: `답글 닉네임${comment.replies.length + 1}`,
                region: '지역',
                hours: '몇 시간전',
                text: newReply
              }
            ]
          };
        } else {
          return comment;
        }
      });

      setComments(updatedComments);
      setNewReply('');
    }
  };

  const handleDelete = (commentID, replyID) => {
    setIsClickedReply(false);
    if (replyID === null) {
      // 답글이 아닌 댓글 삭제
      const updatedComments = comments.filter(comment => comment.id !== commentID);
      setComments(updatedComments);
    } else {
      // 답글 삭제
      const updatedComments = comments.map(comment => {
        if (comment.id === commentID) {
          // 현재 댓글의 replies 배열에서 해당 답글 제외
          const updatedReplies = comment.replies.filter(reply => reply.id !== replyID);
          return {
            ...comment,
            replies: updatedReplies
          };
        }
        return comment;
      });
      setComments(updatedComments);
    }
  };
  
  return (
    <>
      <VolunteerDetailHeader
        isMenuClicked={isMenuClicked}
        handleMenuClick={handleMenuClick}
        handleOutsideMenuClick={handleOutsideMenuClick}
      />
      <AnnouncementUI
        LikeImage={LikeImage}
        handleOutsideMenuClick={handleOutsideMenuClick}
        comments={comments}
        newComment={newComment}
        newReply={newReply}
        handleCommentValue={handleCommentValue}
        handleReplyValue={handleReplyValue}
        handleCommentSubmit={handleCommentSubmit}
        handleReplySubmit={handleReplySubmit}
        isClickedReply={isClickedReply}
        handleJudegeReplyBtn={handleJudegeReplyBtn}
        activeBtn={activeBtn}

        isCommentMenuClicked={isCommentMenuClicked}
        handleCommentMenuClick={handleCommentMenuClick}
        clickedCommentID={clickedCommentID}

        isReplyMenuClicked={isReplyMenuClicked}
        handleReplyMenuClick={handleReplyMenuClick}
        clickedReplyID={clickedReplyID}
       
        selectedCommentID={selectedCommentID}

        name={name} //답글달기를 클릭하였을 때 유저 닉네임을 가져오기 위한 변수
        handleJudegeXClick={handleJudegeXClick}
        handleOutCommentMenuClick={handleOutCommentMenuClick}

        handleDelete={handleDelete}
      />
    </>
  );
}