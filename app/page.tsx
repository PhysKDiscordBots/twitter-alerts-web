import { auth } from "@/auth";
import LoginOrOut from "@/components/auth/LoginOrOut";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginOrOut />
    </main>
  );
}
