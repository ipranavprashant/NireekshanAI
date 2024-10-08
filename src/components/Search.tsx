import { useState } from "react";
import axios from "axios";

export default function Search() {
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
        <div className="h-8 rounded-full overflow-hidden mt-2">
            <input
                className="bg-search-box-color flex items-center w-full h-full placeholder-gray-600 rounded-full px-4"
                type="text"
                placeholder="🔍 Search Here"
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
    );
}
