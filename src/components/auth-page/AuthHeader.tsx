import React from "react";

import { SpotifyIcon } from "@/icons";

export const AuthHeader = () => {
  return (
    <div className="grid place-content-center border-b-[1px] border-gray py-[25px]">
      <SpotifyIcon className="h-[35px] w-[110px] fill-foreground md:h-[45px] md:w-[145px]" />
    </div>
  );
};
