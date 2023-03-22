// eslint-disable-next-line @typescript-eslint/no-unused-vars

import type { UserEntity } from "@/graphql/graphql";

declare module "next-auth" {
  interface Session {
    user: UserEntity;
    expires: string;
  }
}
