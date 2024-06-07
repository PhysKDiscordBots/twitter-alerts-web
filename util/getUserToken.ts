import { auth } from "@/auth";
import prisma from "./db";

const getUserToken = async () => {
  const session = await auth();
  if (session) {
    const account = await prisma.account.findFirst({
      where: {
        userId: session.user?.id?.toString() || "",
        provider: "discord",
      },
      select: {
        access_token: true,
      },
    });

    if (account) {
      return account.access_token;
    }
  }
  return "";
};
export default getUserToken;
