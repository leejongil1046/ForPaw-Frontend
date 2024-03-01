// Navigation.present.js
import * as S from "./Navigation.styles";
import Image from "next/image";

export default function NavigationUI(props) {
  return (
    <S.WrapperNavigation>
      {Object.keys(props.paths).map((iconName) => (
        <S.NavigationIconContainer
          key={iconName}
          onClick={props.navigateTo(iconName)}
        >
          <Image
            src={props.getIconSrc(iconName)}
            alt={`${iconName}_icon`}
            width={40}
            height={40}
          />
        </S.NavigationIconContainer>
      ))}
    </S.WrapperNavigation>
  );
}
