import CircularIcon from "./CircularIcon";
import OverviewKey from "../assets/overview_key.svg"
import Add from "../assets/add.svg"
import LinkedServices from "../assets/linked_services.svg"
import Analytics from "../assets/analytics.svg"
import BrowseActivity from "../assets/browse_activity.svg"
import Help from "../assets/help.svg"
import Manufacturing from "../assets/manufacturing.svg"
import Logout from "../assets/logout.svg"
export default function Sidebar(){
    return (
        <>
        <div className="h-screen">
        <div className="backdrop-opacity-10 backdrop-invert h-5/6 w-16 rounded-full ml-2">
        <div className="flex flex-col h-full items-center justify-between p-2 space-y-10">
        <div  className="space-y-2">
            <CircularIcon image={OverviewKey} />
            <CircularIcon image={Add} />
            <CircularIcon image={LinkedServices} />
            <CircularIcon image={Analytics} />
            <CircularIcon image={BrowseActivity} />
        </div>
        <div className="space-y-2 cursor-pointer">
            <CircularIcon image={Help} />
            <CircularIcon image={Manufacturing} />
            <CircularIcon image={Logout} />
        </div>
        </div>
        </div>
        </div>
        </>
    )
}