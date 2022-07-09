import React from "react"

const Records = () => {

const receipt1 =
  {
    person: 'Andre',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  }
const receipt2 = {
  person: 'Katelyn',
  order: {
    main: 'Rice Bowl',
    protein: 'Ginger Soy Chix',
    rice: 'Sticky Rice',
    sauce: 'Korilla',
    toppings: [
      'Yuzu Pickled Sweet Pepper', 'Kale'
    ],
    drink: 'Korchata',
    cost: 19
  },
  paid: false
}
const receipt3 = {
  person: 'Bruno',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: true
}

const Records = [{receipt1}, {receipt2}, {receipt3}]

return(
  <div>{Records.map(receipt => {
    const { person, main, protein, rice, sauce, toppings, drink, cost, paid } = receipt;
    return(
      <div><div className="orderName">
      <h3>{person}</h3>
  </div>
  <div className="order">
      <span>Main: {main}</span>
      <span>Protein: {protein}</span>
      <span>Rice: {rice}</span>
      <span>Sauce: {sauce}</span>
          <span>
              <h6>Toppings:</h6>
          <ul> 
              <li>{toppings}</li>
          </ul>
          </span>
      <span>Drink: {drink}</span>
      <span>Cost: {cost}</span>
      { paid ? <span><button className="settled" id="button">Settle Bill</button></span> : null }
  </div></div>
    )
  })}</div>

)}

export default Records;