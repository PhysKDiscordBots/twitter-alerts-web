import { User } from "next-auth";

export interface CustomUser extends User {
  // Define additional properties if needed
  access_token?: string;
}
