export default function ProductCard(props) {

    console.log(props)

    return (
        <div className="w-64 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100">
            <div className="aspect-square overflow-hidden bg-slate-50">
                <img
                    src={props.image}
                    alt={props.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-4">
                <h1 className="text-slate-900 font-semibold text-lg truncate">
                    {props.name}
                </h1>

                <p className="text-indigo-700 font-bold text-xl mt-1">
                    ${props.price}
                </p>

                <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-medium py-2.5 rounded-xl transition-colors duration-200">
                    Buy Now
                </button>
            </div>
        </div>
    )
}