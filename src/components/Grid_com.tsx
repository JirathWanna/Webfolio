interface Props {
    img : string;
    title : string;
    organization : string;
}

export default function GridCom({img,title,organization} : Props) {



    return (
        <div className='w-full group rounded-[10px] duration-200 bg-white shadow-[0_0px_8px_0_rgba(0,0,0,0.1),_0_0px_20px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0px_8px_0_rgba(0,0,0,0.2),_0_0px_20px_0_rgba(0,0,0,0.2)] cursor-pointer'>
            <img src={img} alt="" className="w-full  rounded-t-[10px] h-60 object-cover"/>
            <div className="w-full py-3 duration-200 bg-white rounded-b-2xl  px-6 items-center group-hover:px-7">
                <div className="text-[1.5rem]">{title}</div>
                <div className="text-gray-500 text-[1rem]"> {organization}</div>
            </div>
        </div>
    )
}