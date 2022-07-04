import Records from "./Records"

function Receipts(){



    return(
        <div>
                <div className="orderName">
                    <h3>{receipt1.person}</h3>
                </div>
                <div className="order" id="button">
                    <p>Main: {receipt1.order.main}</p>
                    <p>Protein: {receipt1.order.protein}</p>
                    <p>Rice: {receipt1.order.rice}</p>
                    <p>Sauce: {receipt1.order.sauce}</p>
                    <ul>Toppings: </ul>
                    <li>{receipt1.order.toppings[0]}</li>
                    <li>{receipt1.order.toppings[1]}</li>
                    <p>Drink: {receipt1.order.drink}</p>
                    <p>Cost: {receipt1.order.cost}</p>
                    <button className="settled" id="settled" onClick={isPaid}>Paid in full?</button>
                </div>
        </div>
    )
}

export default Receipts;