import React, { Component } from 'react'

export default class Cart extends Component {

    render() {
        const { cartItems } = this.props
        return (
            <div>
                {cartItems.length === 0 ? <div className="EmptyCart">Cart is Empty</div> : <div className="cart">You have {cartItems.length} in cart</div>}
            </div>
        )
    }
}
