import { useAppDispatch, useAppSelector } from "@/app/hooks/redux";
import { useEffect } from "react";
import { fetchPosts } from "../slice";

export function usePosts() {
  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return { posts: items, loading };
}
