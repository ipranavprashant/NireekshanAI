import CircularIcon from "./CircularIcon";
import DummyImage from "../assets/dummy_logo.svg";

export default function Profile() {
    return (
        <span className="bg-search-box-color h-8 min-w-48 rounded-full mt-2 flex items-center">
            <CircularIcon image={DummyImage} />
            <span className="ml-2 text-sm text-gray-500">
                Prateek Negi
            </span>
            {/* <br /> */}
            {/* <span className="ml-2 text-gray-500 text-xs">
                NIT Calicut
            </span> */}
        </span>
    );
}
