import { useRouter } from "next/router";
import LogInUI from "./login.presenter";

export default function LogIn() {
  const router = useRouter();

  const navigateTo = (path) => () => router.push(path);

  return (
    <>
      <LogInUI
        navigateTo={navigateTo}
      />
    </>
  );
}