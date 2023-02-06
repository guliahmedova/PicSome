import { useContext, useState } from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"

function CartItem({ item, randomCost }) {
    const { removeFromCart } = useContext(Context)
    const [hovered, setHovered] = useState(false)

    return (
        <div className="cart-item"
        >
            <i className={`ri-delete-bin-${hovered ? "fill" : "line"} delete-icon`} onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            ></i>
            <img className="cart-img" src={item.url} width="130px" />
            <p>${randomCost}</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem