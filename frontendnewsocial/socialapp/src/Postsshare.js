import "./Postsshare.css"
import React from 'react'
import{PermMedia} from "@mui/icons-material"

export default function Postsshare() {
  return (
    <div className="share">
        <div className="sharecover">
            <div className="sharetop">
     <img className="profileimage"src="./images/usershare.jpeg" alt=""/>
      <input placeholder="What would you like to share" className="shareinput" ></input> 
        </div>
        <hr className="sharehr"></hr>
        <div className="sharebottom">
            <div className="shareoptions">
             <div className="shareoption">
<PermMedia className="shareicon"/>
              <span className="shareoptiontext">Photo or Video</span>  
              </div>   
            </div>
        <button className="sharebtn">share</button>
        </div>
            
            </div>
       
        </div>
  )
}
