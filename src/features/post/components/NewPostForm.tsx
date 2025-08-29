import { useState } from "react";
import ImageIcon from "@/components/icons/ImageIcon";
import FaceIcon from "@/components/icons/FaceIcon";
import TextareaAutosize from "react-textarea-autosize";

export default function NewPostCard({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  const [mediaList, setMediaList] = useState<string[]>([
    "Media", "Media", "Media", "Media",
    "Media", "Media", "Media", "Media",
    "Media", "Media", "Media", "Media",
    "Media", "Media", "Media", "Media",
    "Media", "Media", "Media", "Media",
    "Media", "Media", "Media", "Media",
    "Media", "Media", "Media", "Media",
    "Media", "Media", "Media", "Media",
    "Media", "Media", "Media", "Media"
  ]);

  const removeMedia = (index: number) => {
    setMediaList(mediaList.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      {/* Modal content */}
      <div className="relative max-w-[640px] w-full bg-white sm:rounded-2xl shadow-lg p-4 z-40 h-full sm:h-auto flex flex-col sm:max-h-[90vh]">

        {/* Header + input */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center pb-2 mb-3">
            <h2 className="font-bold text-lg absolute left-1/2 -translate-x-1/2">New post</h2>
            <button className="hover:text-black ml-auto mr-3" onClick={onClose}>Cancel</button>
          </div>

          <div className="flex flex-row gap-1 w-full">
            <div className="flex flex-start mb-2">
              <img
                src="src/assets/react.svg"
                alt="avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
            </div>
            <div className="flex-1 mr-3 sm:mr-6 md:mr-12">
              <span className="font-bold">Nguyen Huu Hoang</span>
              <TextareaAutosize
                className="w-full resize-none outline-none"
                placeholder="What's on your mind?"
                minRows={1}
                maxRows={10}
              />
              <div className="flex items-center gap-3 mb-3 text-gray-600">
                <button className="hover:text-black"><ImageIcon /></button>
                <button className="hover:text-black"><FaceIcon /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 ml-12">
          {mediaList.map((media, index) => (
            <div
              key={index}
              className="relative bg-gray-300 rounded-md flex items-center justify-center h-20"
            >
              <span className="text-sm">{media}</span>
              <button
                onClick={() => removeMedia(index)}
                className="absolute top-1 right-1 bg-gray-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-3">
          <button className="px-4 py-2 border bg-white text-black rounded-lg">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
