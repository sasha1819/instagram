import "../styles/Navigation.scss";
import logo from "../images/1logo.png";
import searchLogo from "../images/searchLogo.png";
import Menu from "./Menu.js"


function Navigation(){
    return(
        <div className="navigation">
            <div className="contanier">
                <img className="logo" src={logo} alt="instagram logo" />
                <div className="search">
                    <img className="searchIcon" src={searchLogo} alt="search icon" />
                    <span className="searchText">Search</span>
                </div>
                <Menu/>
            </div>
        </div>
    );
}

export default Navigation;