import Records from "../Records";

function Receipts(props){
        
    const Records = props

    return(
        <div>
                <div className="orderName">
                    <h3>{props.person}</h3>
                </div>
                <div className="order">
                    <span>Main: {props.order.main}</span>
                    <span>Protein: {props.order.protein}</span>
                    <span>Rice: {props.order.rice}</span>
                    <span>Sauce: {props.order.sauce}</span>
                        <span>
                            <h6>Toppings:</h6>
                        <ul> 
                            <li>{props.order.toppings[0]}</li>
                            <li>{props.order.toppings[1]}</li>
                        </ul>
                        </span>
                    <span>Drink: {props.order.drink}</span>
                    <span>Cost: {props.order.cost}</span>
                    { props.paid ? <span><button className="settled" id="button" onClick={props.togglePay}>Settle Bill</button></span> : null }
                </div>
        </div>
    )
}

export default Receipts;