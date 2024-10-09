interface Props{
    image:string
}
export default function CircularIcon(props:Props){
    return (
        <div className="bg-[#a8a8a8] bg-opacity-20 h-11 w-11 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-500">
            <img src={props.image} alt="haha" className="h-6 w-6" />
        </div>
    )
}
