import * as S from "./VolunteerRegion.styles";
import Image from "next/image";

export default function VolunteerRegionUI() {
  return (
    <>
      <S.WrapperContents>
        <S.VolunteerRegionMenuBlock>
          <S.VolunteerRegionMenu>
            <option value="" disabled selected>
              지역명
            </option>
          </S.VolunteerRegionMenu>
          <S.MenuArrowBlock>
            <Image
              src="/images/volunteer/volunteer_arrow_down_icon.svg"
              alt="volunteer_arrow_down_icon"
              width={18}
              height={20}
            />
          </S.MenuArrowBlock>
          <S.VolunteerRegionMenuSub>
            <option value="" disabled selected>
              지역명
            </option>
          </S.VolunteerRegionMenuSub>
          <S.MenuSubArrowBlock>
            <Image
              src="/images/volunteer/volunteer_arrow_down_icon.svg"
              alt="volunteer_arrow_down_icon"
              width={18}
              height={20}
            />
          </S.MenuSubArrowBlock>
        </S.VolunteerRegionMenuBlock>
      </S.WrapperContents>
    </>
  );
}
