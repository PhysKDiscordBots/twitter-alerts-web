import { auth } from "@/auth";
import { SignInWithDiscord } from "./sign-in";
import { SignOut } from "./sign-out";

const LoginOrOut = async () => {
  const session = await auth();
  if (session) {
    return <SignOut />;
  } else {
    return <SignInWithDiscord />;
  }
};
export default LoginOrOut;
