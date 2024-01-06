
const Card = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center py-2">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl  hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
            <div className="md:flex">
                <div className="md:shrink-0 p-1">
                    <img className="h-48 w-full object-cover md:h-full md:w-48 rounded-xl" src="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80" alt="Modern building architecture" />

                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                    <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Card;