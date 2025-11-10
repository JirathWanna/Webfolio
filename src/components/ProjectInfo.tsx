import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type link = {
    name : string;
    url : string;
  }

interface Props {
    img : string;
    des : string;
    title : string;
    organization : string;
    award : string;
    img1 : string;
    img2 : string;
    img3 :string;
    link : link[];
    visible : boolean;
    onClose : () => void;
}


export default function ProjectInfo({visible,img,des,title,organization,award,img1,img2,img3,link,onClose} : Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className= {` ${visible ? "visible opacity-100 z-20":"hidden opacity-0"} fixed top-1/2 left-1/2 w-100 md:w-150 lg:w-250 h-150 md:h-150 lg:h-[80%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl`}>
            <div className="relative h-[50%]">
                <img
                    className="w-full h-full rounded-t-2xl object-cover"
                    src={img}
                    alt=""
                />

                <div className="absolute inset-0 bg-black/60 rounded-t-2xl z-0"></div>

                <div className="absolute inset-0 z-10 flex flex-col justify-center px-10 text-white">
                    <div className="text-2xl lg:text-5xl md:text-4xl font-black text-shadow-black text-shadow-lg">{title}</div>
                    <div className="text-shadow-black text-shadow-lg text-gray-100 my-7">{organization}</div>
                    <div className="flex">
                        <div className={` text-[1rem]  text-white bg-black/70 p-3 rounded-[0.5rem]`}> {award} </div>
                    </div>
                    
                </div>
            </div>
            
            <div className="p-5 h-[50%] overflow-y-scroll flex flex-col gap-5 lg:flex-row">
                <div className="text-gray-800 flex-3">
                    <div>{des}</div>
                    <div className="mt-3"> 
                        {link.map((i) => (
                            <div>
                                {i.name}
                                <a className="text-blue-500 underline" target="blank" href={i.url}>{i.url}</a>
                            </div>
                        ))}
                    </div>
                </div>
                

                <div className="flex-1 flex flex-col">
                    <button className="cursor-pointer" type="button" onClick={() => setOpen(true)}>
                        <img className="m-3" src={img1} alt="" />
                        <img className="m-3" src={img2} alt="" />
                        <img className="m-3" src={img3} alt="" />
                    </button>
                    

                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={[
                        { src: img1 },
                        { src: img2 },
                        { src : img3}
                        ]}
                    />
                </div>
                
            </div>
            
            

            <button onClick={onClose} className="cursor-pointer z-50 bg-red-600 text-white p-3 rounded-2xl absolute top-1 right-1">X</button>
        </div>
    )
}