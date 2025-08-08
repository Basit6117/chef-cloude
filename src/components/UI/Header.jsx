import "./Header.css"
import chefIcon from "../../assets/images/icons/chef-icon.jpg"
const Header = () => {
  return (
    <header>
        <nav>
            <img className="chef-icon" src={chefIcon} alt="chef icon" />
            <p>chef claude</p>
        </nav>
    </header>
  )
}

export default Header
