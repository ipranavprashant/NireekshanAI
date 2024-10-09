import { useState } from "react";
import axios from "axios";
import MessageSquare from '../assets/message_square.svg';
import LiveHelp from '../assets/live_help.svg';
import UploadIcon from '../assets/paperclip.svg';
import SearchIcon from '../assets/arrow.svg';

export default function ChatAI() {
    const [search, setSearch] = useState("");

    const handleSearch = async () => {
        try {
            const response = await axios.post("http://localhost:4000", {
                search,
            });
            console.log(response.data); // Handle the response as needed
        } catch (error) {
            console.error("Error searching:", error);
        }
    };

    return (
        <div className="backdrop-opacity-10 backdrop-invert h-96 w-96 ml-12 rounded-xl mt-4 overflow-hidden flex flex-col justify-between">
            <div className="bg-[#8c8b8b] bg-opacity-20 h-10 flex items-center p-4">
                <span className="p-1">
                    <img src={MessageSquare} alt="AI help assistant" />
                </span>
                <span className="p-1">
                    <p className="text-slate-300 text-lg">Chat With Niri</p>
                </span>
            </div>
            <div>
                <div className="flex space-x-2 ml-2 mr-2">
                    {Array(3).fill(0).map((_, index) => (
                        <div key={index} className="bg-[#a8a8a8] bg-opacity-20 h-28 w-28 rounded-md p-2">
                            <img src={LiveHelp} alt="Dummy" />
                            <p className="text-sm text-slate-300">Lorem Ipsum</p>
                            <p className="text-xs text-slate-300">Dummy query - the desired result</p>
                        </div>
                    ))}
                </div>
                <div className="h-10 rounded-full overflow-hidden m-2 flex items-center bg-[#a8a8a8] bg-opacity-20">
                    <span className="flex items-center pl-3">
                        <img src={UploadIcon} alt="Upload" className="h-6 w-6 cursor-pointer" />
                    </span>
                    <input
                        className="flex-grow bg-transparent placeholder-gray-600 rounded-full px-2 text-slate-300 placeholder:text-slate-300"
                        type="text"
                        placeholder="Type Your Message Here"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                    />
                    <span className="flex items-center pr-3 cursor-pointer" onClick={handleSearch}>
                        <img src={SearchIcon} alt="Search" className="h-6 w-6" />
                    </span>
                </div>
            </div>
        </div>
    );
}
