import Feeds from "./Feeds"
import Leftbar from "./Leftbar"
import Header from "./Header"
import Rightbar from "./Rightbar"
import "./Homepage.css"

export default function Profile() {
    return (
    <>
    <Header/>
    <div className="profile">
    <Leftbar/>
    <div className="profileright">
    <div className="profilerighttop">
      <div className="profilecover">
      <img className="profilecoverimage"src="https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=1024x1024&w=is&k=20&c=knFJ__pEQhJ7QxtIXsG9Bd7_cgw5NtMxHxmoK0byA_k="  alt=""/>
      <img className="profileuserimage"src="https://media.istockphoto.com/id/831902150/photo/ive-solidified-my-name-in-the-business-world.jpg?s=1024x1024&w=is&k=20&c=k29qRcnB3Eo3dWOGHcvfSt2en0QXZouAXh2ofSvYM5I="  alt=""/>
      </div>
      <div className="profileinfo">
      <h4 className="profileinfoname">Safak Kochlu</h4>
      <span className="profileinfodesc">Hello my friends</span>
      </div>
    </div>
    <div className="profilerightbottom">
    <Feeds/>
    <Rightbar/>
    </div>
    </div>
    </div>
    </>
    )}
