import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import HeartIcon from "@/components/icons/HeartIcon";
import CommentIcon from "@/components/icons/CommentIcon";
import type { Post } from "../types";
import MoreIcon from "@/components/icons/MoreIcon";

export default function PostCard({
  author,
  avatar,
  time,
  content,
  images,
  likes,
  comments,
}: Post) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col border-2 rounded-xl w-full max-w-[640px] pt-4 pb-4 bg-white">
      {/* Header */}
      <div className="flex flex-row items-start pl-4">
        {/* Avatar */}
        <img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full mr-3"
        />

        {/* Content */}
        <div className="flex-1">
          {/* Header: author + time + more */}
          <div className="flex items-center justify-between pr-4">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="font-bold max-w-[150px] truncate cursor-pointer"
                title={author} // khi hover sẽ hiện full name
              >
                {author}
              </span>
              <span className="text-gray-500 text-sm">{time}</span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full transition duration-150 hover:bg-gray-100 active:scale-75 cursor-pointer">
              <MoreIcon/>
            </div>
          </div>

          {/* Content text */}
          <p className="mt-1 mb-2 pr-4 whitespace-pre-wrap [overflow-wrap:anywhere] text-sm sm:text-base">
            {content}
          </p>
        </div> 
      </div>

      {/* Scroll container */}
      <ScrollContainer
        className="flex gap-2 cursor-grab active:cursor-grabbing overflow-hidden pr-5 mt-2 pl-16 "
        horizontal
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            className="max-h-48 sm:h-52 md:h-56 w-auto h-auto rounded-xl flex-shrink-0 object-cover"
          />
        ))}
      </ScrollContainer>

      {/* Action buttons */}
      <div className="flex flex-row gap-4 mt-3 ml-10 pl-4">
        {/* Like button */}
        <button
          onClick={() => setLiked((prev) => !prev)}
          className="group flex items-center gap-2 p-2 rounded-full 
               transition duration-150 hover:bg-gray-100 active:scale-75"
        >
          <HeartIcon active={liked} />
          <span className="text-sm sm:text-base">{likes}</span>
        </button>

        {/* Comment button */}
        <button
          className="flex items-center gap-2 p-2 rounded-full 
               transition duration-150 hover:bg-gray-100 active:scale-75"
        >
          <CommentIcon />
          <span className="text-sm sm:text-base">{comments}</span>
        </button>
      </div>
    </div>
  );
}
