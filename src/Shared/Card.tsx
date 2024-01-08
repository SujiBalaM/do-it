import { useEffect, useState } from "react";

const Card = () => {
    const [drugs,setDrugs] = useState();
    useEffect(()=>{
 getDrugs();
    },[]);
 const getDrugs = async () => {
        const response = await fetch("/drugs");
        const convertedResponse = await response.json();
        console.log(convertedResponse)
        return response;
    }

    return (
        <div className="bg-gray-100 items-center justify-center  md:w-2/3 lg:w-3/4">
        <div className="max-w-sm mx-auto bg-white rounded shadow-lg overflow-hidden  hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
                <div className="md:shrink-0 p-1">
                    <img className="object-cover md:h-full rounded" src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80" alt="Modern building architecture" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                    <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                </div>

        </div>
        </div>
    )
}

export default Card;