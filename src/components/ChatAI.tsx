import { useState } from "react";
import axios from "axios";
import DummyLogo from '../assets/dummy_logo.svg'

export default function ChatAI(){

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
        <div className="bg-custom-dark-green h-96 w-96 ml-12 rounded-md mt-4 overflow-hidden flex flex-col justify-between">
            <div className=" bg-slate-200 h-10 flex items-center">
                <span className="p-1">
                <img src={DummyLogo} alt="AI help assistant" />
                </span>
                <span className="p-1">
                <p>Chat With Niri</p>
                </span>
            </div>
            <div>
                <div className="flex space-x-2 ml-2 mr-2">
                    <div className="bg-slate-500 h-28 w-28">
                        <img src={DummyLogo} />
                        <p className="text-sm">Lorem Ipsum</p>
                        <p className="text-xs">Dummy query - the desired result</p>
                    </div>
                                      <div className="bg-slate-500 h-28 w-28">
                        <img src={DummyLogo} />
                        <p className="text-sm">Lorem Ipsum</p>
                        <p className="text-xs">Dummy query - the desired result</p>
                    </div>
                                      <div className="bg-slate-500 h-28 w-28">
                        <img src={DummyLogo} />
                        <p className="text-sm">Lorem Ipsum</p>
                        <p className="text-xs">Dummy query - the desired result</p>
                    </div>
                </div>
                 <div className="h-8 rounded-full overflow-hidden m-2">
            <input
                className="bg-search-box-color flex items-center w-full h-full placeholder-gray-600 rounded-full px-4"
                type="text"
                placeholder="🔍 Type Your Message Here"
                onChange={(e)=>{
        setSearch(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
        </div>
            </div>
        </div>
    )
}