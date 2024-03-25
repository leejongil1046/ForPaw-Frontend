import LikeImage from './component/LikeImage';
import AnnouncementUI from './Announcement.presenter';
import VolunteerDetailHeader from '../../detail/volunteerDetailHeader/VolunteerDetailHeader.container';
import { useEffect, useState } from 'react';

export default function Announcement() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  //input에서 입력한 값을 배열로서 받을 것이고 presenter에서 map 함수를 이용하여 사용할 것이다.
  const [comments, setComments] = useState([]);

  //input안의 내용을 onChange로 받아줄 함수이다.
  const [newComment, setNewComment] = useState('');

  //답글달기를 누르면 placeholder를 변경하는 변수
  const [isClickedReply, setIsClickedReply] = useState(false);

  //답글달기를 눌렀는지 판단하는 기능 
  const handleJudegeReplyBtn = () => {
    setIsClickedReply(true);
  }

  //esc를 눌리고 setIsClickedReply를 false로 만들기


  //매뉴를 눌렀을 때 메뉴창이 나오도록 하는 기능
  const handleMenuClick = () => {
    setIsMenuClicked(true);
  };
  //메뉴 이외에 곳을 눌렀을 때 메뉴창이 꺼지게 하는 용도
  const handleOutsideMenuClick = () => {
    setIsMenuClicked(false);
  };

  //input값을 받아오는 기능
  const handleCommentValue = (e) => {
    setNewComment(e.target.value)
  };

  //input창에 enter을 입력하면 나오게 하는 것
  const handleCommentSubmit = (e) => {
    if (e.key === 'Enter' && newComment.trim() !== "") {
      const newCommentObject = { //배열에 추가되는 정보들
        id: comments.length + 1,
        name: '닉네임',
        region: '지역',
        hours: '몇 시간전',
        text: newComment,
        replies: []
      };

      setComments([...comments, newCommentObject]);
      setNewComment('');
    }
  }

  //버튼을 눌렸을 때 댓글을 달수 있도록 해주는 함수
  const activeBtn = () => {
    const newCommentObject = { //배열에 추가되는 정보들
      id: comments.length + 1,
      name: '닉네임',
      region: '지역',
      hours: '몇 시간전',
      text: newComment,
      replies: []
    };

    setComments([...comments, newCommentObject]);
    setNewComment('');
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
      handleCommentValue={handleCommentValue}
      handleCommentSubmit={handleCommentSubmit}
      isClickedReply={isClickedReply}
      handleJudegeReplyBtn={handleJudegeReplyBtn}
      activeBtn={activeBtn}
    />
  </>
);
}