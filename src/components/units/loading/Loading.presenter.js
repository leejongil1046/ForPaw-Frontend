import { useRouter } from "next/router";
import * as S from "./Loading.styles";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingUI() {
  const router = useRouter();

  //3초뒤 자동으로 페이지 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 1500);
    //페이지 이동 후 타이며 초기화
    return () => clearTimeout(timer);
  }, []);

  const [blurred, setBlurred] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlurred(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.WrapperLoading>
      <S.BlurryElement blurred={blurred}>
        <S.WrapperImage>
          <Image
            src="/images/loading/loading_paw.png"
            alt="loading_paw"
            width={124}
            height={138}
          />
        </S.WrapperImage>
      </S.BlurryElement>
    </S.WrapperLoading>
  )
}