import AnnouncementUI from "./Announcement.presenter";
import VolunteerDetailHeader from "../../detail/volunteerDetailHeader/VolunteerDetailHeader.container";
import { useState } from "react";
import * as S from "./Announcement.styles";
import Image from "next/image";

export default function Announcement() {

  const LikeImage = ({ initialSrc, alt }) => {
    const [imgSrc, setImgSrc] = useState(initialSrc);
    const [isSecondClick, setIsSecondClick] = useState(false);

    const handleImgClick = () => {
      const newSrc = isSecondClick
        ? "/images/volunteer/announcement/comment_like_icon.svg"
        : "/images/volunteer/announcement/comment_active_like_icon.svg";
      setImgSrc(newSrc);
      setIsSecondClick(!isSecondClick);
    };

    return (
      <S.LikeImg onClick={handleImgClick}>
        <Image
          src={imgSrc}
          alt={alt}
          width={30}
          height={30}
        />
      </S.LikeImg>
    );
  };

  return (
    <>
      <VolunteerDetailHeader />
      <AnnouncementUI 
        LikeImage={LikeImage}
      />
    </>
  )
}