import Feeds from "./Feeds"
import Leftbar from "./Leftbar"
import Header from "./Header"
import Rightbar from "./Rightbar"
import "./Homepage.css"

export default function Homepage() {
    return (
    <>
    <Header/>
    <div className="frontcontainer">
    <Leftbar/>
    <Feeds/>
    <Rightbar/>
    </div>
    </>
    )}