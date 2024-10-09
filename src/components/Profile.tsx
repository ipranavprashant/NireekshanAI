import Admin from "../assets/admin.svg";

export default function Profile() {
    return (
        <span className="bg-search-box-color h-8 min-w-48 rounded-full mt-4 flex items-center">
            <img src={Admin}  className="h-8 w-8 rounded-full"/>
            <span className="ml-2 text-sm text-slate-300">
                Prateek Negi<br/><small>NIT Calicut</small>
            </span>
        </span>
    );
}
