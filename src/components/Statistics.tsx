import DummyLogo from "../assets/dummy_logo.svg"
export default function Statistics(){
    return (
        <div className="bg-custom-dark-green h-80 w-80 ml-12 rounded-md mt-4 overflow-hidden">
            <div className=" bg-slate-200 h-10 flex items-center">
                <span className="p-1">
                <img src={DummyLogo} alt="statistics of what?" />
                </span>
                <span className="p-1">
                <p>Bridge Statistics</p>
                </span>
            </div>
            <div className="space-y-3 ml-4 mt-4">
                <p>Parameter 1</p>
                <p>Parameter 2</p>
                <p>Parameter 3</p>
                <p>Parameter 4</p>
                <p>Parameter 5</p>
            </div>
        </div>
    )
}