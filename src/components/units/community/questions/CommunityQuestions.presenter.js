import * as S from "./CommunityQuestions.styles";
import Image from "next/image";

export default function CommunityQuestionsUI() {
  return (
    <>
      <S.WrapperContents>
        <S.CommunityAddIcon>
          <Image
            src="/images/community/community_add_icon.svg"
            alt="community_add_icon"
            width={28}
            height={28}
          />
        </S.CommunityAddIcon>
      </S.WrapperContents>
    </>
  );
}
