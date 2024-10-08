interface Props{
    image:string
}
export default function CircularIcon(props:Props){
    return (
        <div className="bg-custom-gray h-8 w-8 rounded-full flex items-center justify-center">
            <img src={props.image} alt="haha" className="h-5 w-5" />
        </div>
    )
}
