import AddPostCard from '../../components/AddPostCard'
import FeedHeader from '../../components/FeedHeader'
import PostCard from '@/features/post/components/PostCard'
import { mockPosts } from '../../data/mockPosts'

export default function NewFeed() {
  return (
    <div className="flex flex-col items-center gap-3">
      <FeedHeader/>
      <AddPostCard></AddPostCard>
      {mockPosts.map((post)=>(
        <PostCard key={post.id} {...post}></PostCard>
      ))}
    </div>
  )
}
