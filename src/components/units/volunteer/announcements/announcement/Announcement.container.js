import LikeImage from './component/LikeImage'; // LikeImage 컴포넌트의 파일 경로에 따라 수정해야 할 수도 있습니다.
import AnnouncementUI from './Announcement.presenter';
import VolunteerDetailHeader from '../../detail/volunteerDetailHeader/VolunteerDetailHeader.container';
import { useState } from 'react';

export default function Announcement() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  //input에서 입력한 값을 배열로서 받을 것이고 presenter에서 map 함수를 이용하여 사용할 것이다.
  const [comments, setComments] = useState([]); 

  //input안의 내용을 onChange로 받아줄 함수이다.
  const [newComment, setNewComment] = useState(''); 

  const handleMenuClick = () => {
    setIsMenuClicked(true);
  };

  const handleOutsideMenuClick = () => {
    setIsMenuClicked(false);
  };

  const handleCommentValue = (e) => {
    setNewComment(e.target.value)
  };

  const handleCommentSubmit = (e) => {
    if(e.key === 'Enter') {
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
        handleCommentValue ={handleCommentValue}
        handleCommentSubmit={handleCommentSubmit}
      />
    </>
  );
}