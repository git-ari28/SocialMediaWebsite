import "./Leftbar.css"
import { RssFeed} from "@mui/icons-material"
import MessageIcon from '@mui/icons-material/Message';
import ChatIcon from '@mui/icons-material/Chat';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
export default function Leftbar() {
  return (
    <div className="leftbar">

       <div className="leftbarcover">

        <ul className="leftbarlist">
        <li className="leftbaritems">
          <RssFeed className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="leftbaritems">
          < ChatIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Chats</span>
        </li>
        <li className="leftbaritems">
          <MessageIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Messages</span>
        </li>
        <li className="leftbaritems">
          <SlideshowIcon  className="sidebarIcon"/>
          <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="leftbaritems">
          <BookmarkIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="leftbaritems">
          < HelpCenterIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Questions</span>
        </li>
        

        </ul>
      <button  className="leftbarbutton">Show more</button>
      <hr className="leftbarhr"></hr>
      <ul className="leftbarfriendlist">
     <li className="leftbarfriend">
     <img className="leftbarfriendimg" src="./images/friendsimage.jpeg" alt=""></img>
     <span className="sidebarFriendName">Oshane</span>
    </li>
    <li className="leftbarfriend">
     <img className="leftbarfriendimg" src="./images/friendsimage.jpeg" alt=""></img>
     <span className="sidebarFriendName">Harry</span>
    </li>
    <li className="leftbarfriend">
     <img className="leftbarfriendimg" src="./images/friendsimage.jpeg" alt=""></img>
     <span className="sidebarFriendName">Zubi</span>
    </li>
    <li className="leftbarfriend">
     <img className="leftbarfriendimg" src="./images/friendsimage.jpeg" alt=""></img>
     <span className="sidebarFriendName">Jim</span>
    </li>
    <li className="leftbarfriend">
     <img className="leftbarfriendimg" src="./images/friendsimage.jpeg" alt=""></img>
     <span className="sidebarFriendName"> Joseph</span>
    </li>
    <li className="leftbarfriend">
     <img className="leftbarfriendimg" src="./images/friendsimage.jpeg" alt=""></img>
     <span className="sidebarFriendName">Kris</span>
    </li>
    <li className="leftbarfriend">
     <img className="leftbarfriendimg" src="./images/friendsimage.jpeg" alt=""></img>
     <span className="sidebarFriendName">Harry</span>
    </li>
    <li className="leftbarfriend">
     <img className="leftbarfriendimg" src="./images/friendsimage.jpeg" alt=""></img>
     <span className="sidebarFriendName">Ved</span>
    </li>
    <li className="leftbarfriend">
     <img className="leftbarfriendimg" src="./images/friendsimage.jpeg" alt=""></img>
     <span className="sidebarFriendName">Alex</span>
    </li>
      </ul>
      
      </div>
       
    </div>
    
  )
}