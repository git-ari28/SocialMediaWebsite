import React from 'react'
import { useState } from 'react'
import {MoreVert} from "@mui/icons-material/"
import "./Post.css"
import {users} from "./Dummydata"
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Post({post}) {

const [like,setLike]=useState(post.like)
const [isLiked,setIsLiked]=useState(false)
const PF=process.env.REACT_APP_PUBLIC_FOLDER;

const likeHandler=()=>{
   setLike(isLiked? like-1:like+1) 
setIsLiked(!isLiked)
}
    return (

   
<div className='post'>

<div className='postcover'>
<div className='posttop'>

<div className='posttopleft'>
<img className="postprofileimg"src={users.filter((u)=>u.id===post?.userId)[0].profilePicture} alt=""></img>
<span className="postusername">{users.filter((u)=>u.id===post?.userId)[0].username}</span>
<span className="posttime">{post.date}</span>
</div>
<div className='posttopright'>
    <MoreVert/>
</div>
</div>



<div className='postcenter'>
<span className='posttext'>{post.desc}</span>
<img className='postimg' src={post.photo} alt=""></img>
</div>




<div className='postbottom'>
    <div className='postbottomleft'>
<span onClick={likeHandler} className='like'><FavoriteIcon/></span>

<span className='likecount'>{like} people liked it</span>
    </div>
    <div className='postbottomright'>
<div className='commenttext'>{post.comment} comments</div>
    </div>
</div>


</div>
</div>
   
  )
}
