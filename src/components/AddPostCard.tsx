export default function AddPostCard() {
  return (
    <div className="flex flex-row flex-wrap items-center bg-white border-2 rounded-xl h-20 w-full max-w-[640px] pr-4">
      <img
        src="/assets/react.svg"
        alt="avatar"
        className="w-10 h-10 rounded-full ml-4 mr-3"
      />

      <input
        type="text"
        className="rounded flex-1 min-w-0 px-3 py-2 text-sm sm:text-base"
        placeholder="What's new"
      />

      <button className=" px-4 py-2 border-2 rounded-xl  ">
        Post
      </button>
    </div>
  )
}
