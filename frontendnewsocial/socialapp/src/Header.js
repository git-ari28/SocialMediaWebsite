import "./Header.css";
import { Search,Person,Chat,Notifications } from "@mui/icons-material";

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <span className="logo">CONNECTSOCIAL</span>
            </div>
            <div className="headerCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input className="searchInput" placeholder="Search" />
                </div>
            </div>
            

           <div className="headerRight">
                <span className="headerLink">Home</span>
                <span className="headerLink">Timeline</span>
            
                
               <div className="headerIcons">
                    <div className="headerIconItem">
                        <Person />
                        <span className="headerIconBadge">1</span>
                    </div>
                    
                       <div className="headerIconItem">
                        <Chat />
                        <span className="headerIconBadge">1</span>
                    </div>
                    <div className="headerIconItem">
                        <Notifications />
                        <span className="headerIconBadge">1</span>
                    </div>
                </div>
                <img src="./images/userimage.jpg" alt="User" className="headerImage" />
            </div>
            </div>
        )}
