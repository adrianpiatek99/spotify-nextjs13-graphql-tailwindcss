import type { UserEntity } from "@/graphql/graphql";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type Status = "authenticated" | "loading" | "unauthenticated";

interface IState {
  user: UserEntity | null;
  loading: boolean;
  status: Status;
}

const initialState: IState = {
  user: null,
  loading: true,
  status: "loading"
};

const meSlice = createSlice({
  name: "me",
  initialState,
  reducers: {
    setSessionData: (state, { payload }: PayloadAction<IState>) => {
      state.user = payload.user;
      state.loading = payload.loading;
      state.status = payload.status;
    }
  }
});

export const { setSessionData } = meSlice.actions;

export default meSlice.reducer;
