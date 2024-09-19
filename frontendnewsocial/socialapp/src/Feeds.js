import "./Feeds.css"
import Postsshare from "./Postsshare.js"
import Post from "./Post.js"
import {posts} from "./Dummydata.js"

export default function Feeds() {
  return (
    <div className="feed">
        <div className="feedcover">
            <Postsshare/>
            {posts.map((p)=>(
            <Post key={p.id} post={p}/>
           )) }

            
        </div>
      
        </div>
  )
}
