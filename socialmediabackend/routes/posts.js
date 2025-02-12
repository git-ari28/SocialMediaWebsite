const router=require("express").Router();
const Post=require("../models/post")

//create a post
router.post("/",async (req,res)=>{
 const newPost=new Post(req.body)
 try{
const savedPost=await newPost.save();
res.status(200).json(savedPost)
 }
 catch(err){
res.status(500).json(err)
 }
})

//update a post
router.put("/:id",async (req,res)=>{
    try{
    const post=await Post.findById(req.params.id);
    if(post.userId===req.body.userId){
  await Post.updateOne({$set:req.body})
  res.status(200).json("your post has been updated")
    }
    else{
        res.status(403).json("you cannot update your post")
    }}
    catch(err)
    {
res.status(500).json(err)
    }
})
//deleta a post
router.delete("/:id",async (req,res)=>{
    try{
    const post=await Post.findById(req.params.id);
    if(post.userId===req.body.userId){
  await Post.deleteOne()
  res.status(200).json("your post has been updated")
    }
    else{
        res.status(403).json("you cannot delete your post")
    }}
    catch(err)
    {
res.status(500).json(err)
    }
})
//like a post//dislike a post
router.put("/:id/like",async(req,res)=>{
    try{
   const post=await Post.findById(req.params.id)
   if(!post.likes.includes(req.body.userId))
   {
    await post.updateOne({$push:{likes:req.body.userId}})
res.status(200).json("the post has been liked")
    }
    else
    {
    await post.updateOne({$pull:{likes:req.body.userId}});
    res.status(200).json("The post has been disliked");
    }
}
    catch(err){
res.status(500).json(err);
    }
})
//get a post
router.get("/:id",async(req,res)=>{
    try{
   const post=await Post.findById(req.params.id)
res.status(200).json(post)
    }
   
    catch(err){
res.status(500).json(err);
    }
})
//get timeline posts
router.get("/timeline",async(req,res)=>{
  let postArray=[];
  try{
  const currentUser=await User.findById(req.body.userId);
  const userPosts=await Post.find({userId:currentUser._id})
  const friendPosts=await Promise.all()
  currentUser.following.map((friendId)=>{
Post.find({userId:friendId});
res.json(userPosts.concat(...friendPosts))
  })}
  catch(err)
  {
    res.status(500).json(err);
  }
})






module.exports=router;