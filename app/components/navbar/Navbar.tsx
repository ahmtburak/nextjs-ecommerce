import CardCount from "./CardCount"
import HamburgerMenu from "./HamburgerMenu"
import Logo from "./Logo"
import Search from "./Search"
import User from "./User"

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-slate-100 py-3 px-3 flex justify-items-center items-center gap-5">
      <Logo />
      <Search />
      <CardCount />
      <User />
      <HamburgerMenu />

    </div>
  )
}

export default Navbar
