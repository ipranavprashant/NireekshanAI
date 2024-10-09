import StatisticsLogo from "../assets/statistics_logo.svg"
export default function Statistics(){
    return (
        <div className="backdrop-opacity-10 backdrop-invert h-80 w-80 ml-12 rounded-xl mt-4 overflow-hidden">
            <div className=" bg-[#8c8b8b] bg-opacity-20 h-10 flex items-center p-4">
            
                <span className="p-1">
                <img src={StatisticsLogo} alt="statistics of what?" />
                </span>
                <span className="p-1">
                <p className="text-slate-300 text-lg">Bridge Statistics</p>
                </span>
            </div>

            {/* <div className="space-y-3 ml-4 mt-4 text-[#CECECE]"> */}
            <div className="space-y-3 ml-4 mt-4 text-slate-300">
                <p>Parameter 1 --------------------------- </p>
                <p>Parameter 2 --------------------------- </p>
                <p>Parameter 3 --------------------------- </p>
                <p>Parameter 4 --------------------------- </p>
                <p>Parameter 5 --------------------------- </p>
            </div>
        </div>
    )
}