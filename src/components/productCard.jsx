export default function ProductCard(props) {

    console.log(props)

    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.image} alt="Random Image"></img>
            <p>{props.price}</p>
            <button>Buy Now</button>
        </div>
    )
}