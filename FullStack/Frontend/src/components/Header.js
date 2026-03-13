import Navbar from "./Navbar";
import Sitetitle from "./Sitetitle";

function Header() {
    return (
        <header className="header">
            <Sitetitle/>
            <Navbar/>
        </header>
    );
}       
export default Header;