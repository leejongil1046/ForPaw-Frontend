import * as S from "./Loading.styles";
import Image from "next/image";

export default function LoadingUI(){
  return(
    <S.WrapperLoading>
      <S.WrapperImage>
        <Image
          src="/images/loading/loading_paw.png"
          alt="loading_paw"
          width={124}
          height={138}
        />
      </S.WrapperImage>
    </S.WrapperLoading>
  )
}