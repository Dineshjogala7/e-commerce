import { useEffect, useState } from "react";
import cover from "../assets/Cover.jpg"
import { useNavigate } from "react-router-dom";
const Home = () => {
    const Navigate=useNavigate()
    const [count,setCount]=useState(0)
    const HandleButtonClick=()=>{
        Navigate("/products")
    }
    useEffect(()=>{
            
            let interval = null;

        if (count < 20001) {
            interval = setInterval(() => {
                setCount((prev) => {
                    if (prev >= 20000) {
                        clearInterval(interval);
                        return prev;
                    }
                    return prev + 78;
                });
            }, 0); // Fastest possible, you can slow it down with a value like 1 or 10ms
        }

        return () => clearInterval(interval); // cleanup
    },[])
    return (
        <div className="bg-white text-black min-h-screen flex flex-col" >
            {console.log("render")}
            <div className="flex flex-col md:flex-row  items-center px-10 py-8  flex-1">
                <div className="flex-1 space-y-8 h-full p-6">
                    <h1 className="text-6xl font-bold">FIND BRANDS THAT <span className='italic text-7xl'>MATCHES</span> YOUR GRACE</h1>
                    <p className="text-gray-800 text-md text-start ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quos laboriosam velit distinctio,
                        nihil, fugiat amet assumenda aut quis nisi sunt unde saepe
                        
                    </p>
                    <button className="border border-black px-6 py-2 bg-black text-white transition-all hover:bg-gray-300 hover:text-black shadow-lg duration-300 rounded-full rounded-tr-none" onClick={HandleButtonClick}>
                        Shop Now
                    </button>
                    <div className="flex items-center justify-around flex-wrap">
                        <div>
                            <h1 className="text-4xl">{count-1279}+</h1>
                            <p className="font-bold">Users</p>
                        </div>
                        <div>
                            <h1 className="text-4xl">{count+1500}+</h1>
                            <p className="font-bold">Brands</p>
                        </div>
                        <div>
                            <h1 className="text-4xl">{count+11678}+</h1>
                            <p className="font-bold">Users</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 mt-10 md:mt-0 mx-auto h-full ">
                    <img 
                            src={cover} 
                            alt="Kohli-CoverPage" 
                            className="grayscale object-cover object-center  w-full h-80 sm:h-96 md:h-[400px] lg:h-[500px]" 
                        />
                </div>
            </div>
            <div className="w-full bg-black flex justify-around  items-center text-4xl text-white font-bold md:h-[3rem] lg:h-[6rem] bottom-0">
                <p>Grey Nicolls</p>
                <p> KookaBurra</p>
                <p> MRF</p>
                <p>CEAT</p>
            </div>
            
        </div>
    );
};

export default Home;
