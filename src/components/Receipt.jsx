import Topping from "./Topping"

function Receipt(props){
    //console.log(props)

    const toppings = props.recordData.order.toppings
    //console.log(toppings)

    return (
        <div>
            <div className="Order">
            <h3 className="Name">{props.recordData.person}</h3>
                <p>Main: {props.recordData.order.main}</p>
                <p>Protein: {props.recordData.order.protein}</p>
                <p>Rice: {props.recordData.order.rice}</p>
                <p>Sauce: {props.recordData.order.sauce}</p>
                <p>Drink: {props.recordData.order.drink}</p>
            <h5>Toppings:</h5>
            <ul>
                {toppings.map((topping, index) => {return <Topping topping={topping} key={index}/>})}
            </ul>
            </div>
            <div className="Cost">
            <p>${props.recordData.order.cost}</p>
            </div>
        </div>
    )
}

export default Receipt;