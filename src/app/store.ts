import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "@/features/post";


export const store = configureStore({
  reducer: {
    post: postReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
