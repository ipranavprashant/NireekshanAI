export default function DetailsCard(){
    return (
        <div className="bg-[#D4D4D4] bg-opacity-10 h-full w-80 rounded-xl pb-4 pt-4">
            <div className="p-1 ml-4 mb-2 flex justify-between">
            <span className="text-slate-300 text-2xl">Kalundi Bridge</span>
            <a href="more" className="mr-4 text-slate-300 text-2xl cursor-pointer">...</a>
            </div>
            <div className="flex justify-center space-x-2 text-slate-100">
                <button className="bg-[#959494] h-8 w-36 rounded-md">Last Inspection</button>
                <button className="bg-[#959494] w-36 rounded-md">Digital Twin</button>
            </div>
            <div className="flex justify-center mt-2 text-slate-100">
            <div className="bg-[#50B917] h-8 w-80 mr-3 ml-3 flex justify-between rounded-md">
                <p className="ml-3 text-sm flex items-center">Overall Structure Health</p>
                <p className="mr-3 text-sm flex items-center">B+</p>
            </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="mr-auto ml-4 text-slate-300 mt-4 mb-2">Details</p>
                <div className="bg-[#575757] h-full w-72 p-2 text-slate-300 flex flex-col rounded-lg">
                                                           <span className="flex justify-between ml-8 mr-8 mt-1">
<small>Location</small>
<small>:Location</small>
                    </span>
                                        <span className="flex justify-between ml-8 mr-8">
<small>Length</small>
<small>:Location</small>
                    </span>
                                        <span className="flex justify-between ml-8 mr-8">
<small>Type</small>
<small>:Location</small>
                    </span>
                                           <span className="flex justify-between ml-8 mr-8">
<small>Age</small>
<small>:Location</small>
                    </span>
                                                             <span className="flex justify-between ml-8 mr-8">
<small>Age</small>
<small>:Location</small>
                    </span>
                                                             <span className="flex justify-between ml-8 mr-8">
<small>Age</small>
<small>:Location</small>
                    </span>
                    
                    <p className="flex justify-center">---------------------------------</p>
                                                          <span className="flex justify-between ml-8 mr-8 mb-1">
<small>Coordinates</small>
<small>:Coordinates</small>
                    </span>
                </div>
            </div>
                        <div className="flex flex-col items-center">
                <p className="mr-auto ml-4 text-slate-300 mt-4 mb-2">About</p>
                <div className="bg-[#575757] h-28 w-72 text-slate-300 flex flex-col items-center rounded-lg p-2">
                    <small>The district administration has set the ball rolling for reconstruction of one of the bridges across the river Chaliyar at Munderi near Nilambur connecting five tribal hamlets with the outside world....        <a href="pranavprashant.in" className="text-xs text-[#0099FF] underline-offset-*">[more]</a></small>
                </div>
            </div>
            <span className="text-xs ml-4 text-slate-300">More on <a href="pranavprashant.in" className="text-xs text-[#0099FF] underline-offset-*">The Hindu</a></span>
        </div>
    )
}