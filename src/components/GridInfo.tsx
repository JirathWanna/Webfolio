interface Props {
    img : string;
    des : string;
    title : string;
    organization : string;
    award : string;
    visible : boolean;
    onClose : () => void;
}


export default function GridInfo({visible,img,des,title,organization,award,onClose} : Props) {

    return (
        <div className= {` ${visible ? "visible opacity-100 z-20":"hidden opacity-0"} fixed top-1/2 left-1/2 w-300 h-200 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl`}>
            <div>{title}</div>
            <div>{des}</div>
            <img className="w-100" src={img} />
            <div>{organization}</div>
            <div>{award}</div>

            <button onClick={onClose} className="cursor-pointer bg-red-600 text-white p-3 rounded-2xl absolute top-1 right-1">X</button>
        </div>
    )
}