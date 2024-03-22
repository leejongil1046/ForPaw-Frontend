import LikeImage from './component/LikeImage'; // LikeImage 컴포넌트의 파일 경로에 따라 수정해야 할 수도 있습니다.
import AnnouncementUI from './Announcement.presenter';
import VolunteerDetailHeader from '../../detail/volunteerDetailHeader/VolunteerDetailHeader.container';
import { useState } from 'react';
import { Reply } from './Announcement.styles';

export default function Announcement() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked(true);
  };

  const handleOutsideMenuClick = () => {
    setIsMenuClicked(false);
  };
  
  const initialComments = [
    {
      id: 1,
      name: "닉네임1",
      region: "부산",
      hours: "4시간전",
      text: "댓글 내용을 입력해주세요",
      replys: [
        { id: 1, name: "닉네임1", region: "서울", hours: "3시간전", text: "댓글 내용을 입력해주세요" }
      ]
    },
    {
      id: 2,
      name: "닉네임2",
      region: "부산",
      hours: "5시간전",
      text: "댓글 내용을 입력해주세요",
      replys: [
        { id: 1, name: "닉네임2", region: "경기", hours: "2시간전", text: "댓글 내용을 입력해주세요" },
        { id: 2, name: "닉네임2", region: "대구", hours: "1시간전", text: "댓글 내용을 입력해주세요" }
      ]
    }
  ];

  const replys = initialComments.map(comment => comment.replys);

  console.log(replys);
  
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
        initialComments={initialComments}
        replys={replys}
      />
    </>
  );
}