import React, { Component } from 'react'
import formatProduct from '../utils'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product.id}>
                            <div className="product">
                                <a href="#"><img src={product.image} alt={product.title}></img>
                                    <p>{product.title}</p>
                                </a>
                                <div className="productsPrice">
                                    {formatProduct(product.price)}
                                    <button className="button primary">
                                        Add to cart
                                  </button>
                                </div>
                            </div>

                        </li>
                    ))}
                </ul>
            </div >
        )
    }
}
