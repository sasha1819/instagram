import "../styles/menu.scss";
import {ReactComponent as Home} from "../images/home.svg";
import {ReactComponent as Inbox} from "../images/massenger.svg";
import {ReactComponent as Explore} from "../images/explore.svg";
import {ReactComponent as Notifications} from "../images/notifications.svg";
import image from "../images/123s.jpg";
import  ProfileIcon from "./ProfileIcon";

function Menu(){
    return ( 
    <div className="menu">
        <Home className="icone"/>
        <Inbox className="icone"/>
        <Explore className="icone"/>
        <Notifications className="icone"/>
        <ProfileIcon iconSize="small" image={image} storyBorder={true}/> 
    </div>
    );
}
export default Menu;