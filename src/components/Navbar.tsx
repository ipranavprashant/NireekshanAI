import Logo from "../assets/logo.png"
import CircularIcon from "./CircularIcon"
import Profile from "./Profile"
import Search from "./Search"
import Bell from "../assets/bell.svg"

// bg-opacity-20
export default function Navbar(){
    return (
        <div className="b-screen flex justify-center">
        <div className="backdrop-opacity-10 backdrop-invert h-16 w-full ml-12 mr-12 rounded-full flex justify-between">
            <div className="mt-3">
            <img className="ml-4" src={Logo} alt="Nirikshan AI"/>
    </div>

    <div className="flex space-x-8 mr-4">
        <Search />
        <div className="mt-3 cursor-pointer">
        <CircularIcon image={Bell} />
        </div>
        <Profile />
    </div>
    </div>
    </div>
    
    )
}