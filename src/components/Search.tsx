import { useState } from "react";
import axios from "axios";
import SearchLogo from '../assets/search.svg';

export default function Search() {
    const [search, setSearch] = useState("");

    const handleSearch = async () => {
        try {
            const response = await axios.post("http://localhost:4000", {
                search,
            });
            console.log(response.data);
        } catch (error) {
            console.error("Error searching:", error);
        }
    };

    return (
        <div className="h-10 rounded-full overflow-hidden mt-3 w-80 relative">
            <img
                src={SearchLogo}
                alt="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-6"
            />
            <input
                className="bg-[#a8a8a8] bg-opacity-20 flex items-center w-full h-full placeholder-gray-600 rounded-full px-10 text-slate-200 placeholder:text-slate-300"
                type="text"
                placeholder="Search Here"
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
        </div>
    );
}
