import Logo from "../assets/logo.png"
import CircularIcon from "./CircularIcon"
import Profile from "./Profile"
import Search from "./Search"
import DummyImage from "../assets/dummy_logo.svg"


export default function Navbar(){
    return (
        <div className="b-screen flex justify-center mt-2">
        <div className="bg-custom-dark-green h-12 w-full ml-12 mr-12 rounded-full flex justify-between">
            <div>
            <img className="ml-4" src={Logo} alt="Nirikshan AI"/>
    </div>

    <div className="flex space-x-8 mr-4">
        <Search />
        <div className="mt-2">
        <CircularIcon image={DummyImage} />
        </div>
        <Profile />
    </div>
    </div>
    </div>
    
    )
}