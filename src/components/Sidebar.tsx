import CircularIcon from "./CircularIcon";
import DummyLogo from "../assets/dummy_logo.svg"
export default function Sidebar(){
    return (
        <>
        <div className="h-screen">
        <div className="bg-custom-dark-green h-5/6 w-12 rounded-full ml-2">
        <div className="flex flex-col h-full items-center justify-between p-2 space-y-10">
        <div  className="space-y-2 cursor-pointer hover:focus-visible:">
            <CircularIcon image={DummyLogo} />
            <CircularIcon image={DummyLogo} />
            <CircularIcon image={DummyLogo} />
            <CircularIcon image={DummyLogo} />
            <CircularIcon image={DummyLogo} />
        </div>
        <div className="space-y-2 cursor-pointer">
            <CircularIcon image={DummyLogo} />
            <CircularIcon image={DummyLogo} />
            <CircularIcon image={DummyLogo} />
        </div>
        </div>
        </div>
        </div>
        </>
    )
}