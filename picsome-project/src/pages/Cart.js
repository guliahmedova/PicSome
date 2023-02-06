import { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const { cartItems, emptyCart } = useContext(Context)

    const [buttonText, setButtonText] = useState("Place Order")

    const randomCost = Math.floor(Math.random() * 50) + 1;

    const cartItem = cartItems.map(item => (
        <CartItem key={item.id} item={item} randomCost={randomCost} />
    ))

    const totalAmount = randomCost * cartItems.length;
    const totalCostDisplay = totalAmount.toLocaleString("en-US", { style: "currency", currency: "USD" });

    function changeOrderButtonText() {
        setButtonText("Ordering..")
        setTimeout(function () {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 2000);
    }

    return (
        <main className="cart-page">
            {cartItem}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            <div className="order-button">
                {
                    cartItem .length ? <button className="button-56" onClick={changeOrderButtonText}>{buttonText}</button>
                    : 
                    <p className="empty-text">There are no products in the cart.</p>
                }
            </div>
        </main>
    )
}

export default Cart